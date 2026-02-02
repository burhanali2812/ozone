"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ViewWorker() {
  const params = useParams();
  const router = useRouter();
  const workerId = params.workerId;

  const [worker, setWorker] = useState(null);
  const [attendances, setAttendances] = useState([]);
  const [allAttendances, setAllAttendances] = useState([]);
  const [weekStats, setWeekStats] = useState(null);
  const [totalStats, setTotalStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedAttendance, setSelectedAttendance] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState("current");
  const [availableWeeks, setAvailableWeeks] = useState([]);

  // Calculate weeks since joining
  const getWeeksSinceJoining = (joiningDate, currentDate) => {
    const joining = new Date(joiningDate);
    const current = new Date(currentDate);
    const diffTime = Math.abs(current - joining);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.ceil(diffDays / 7);
  };

  // Get current week number based on joining date
  const getCurrentWeekNumber = (joiningDate) => {
    return getWeeksSinceJoining(joiningDate, new Date());
  };

  useEffect(() => {
    if (workerId) {
      fetchWorkerData();
    }
  }, [workerId]);

  useEffect(() => {
    if (selectedWeek !== "all" && worker) {
      filterAttendanceByWeek();
    }
  }, [selectedWeek, allAttendances, worker]);

  const fetchWorkerData = async () => {
    try {
      setLoading(true);

      // Fetch worker details first
      const workerResponse = await fetch(`/api/worker?id=${workerId}`);
      if (!workerResponse.ok) {
        console.error("Failed to fetch worker:", await workerResponse.text());
        setLoading(false);
        return;
      }

      const workerData = await workerResponse.json();
      setWorker(workerData);

      // Fetch ALL attendance records for this worker
      const allAttendanceUrl = `/api/worker/attendance?workerId=${workerId}`;
      console.log("Fetching all attendance from:", allAttendanceUrl);

      const allAttendanceResponse = await fetch(allAttendanceUrl);
      if (allAttendanceResponse.ok) {
        const fetchedAttendances = await allAttendanceResponse.json();
        console.log("All attendance data received:", fetchedAttendances);

        const allAttendancesArray = Array.isArray(fetchedAttendances)
          ? fetchedAttendances
          : [];

        // Calculate week number for each attendance based on joining date
        const attendancesWithWeek = allAttendancesArray.map((att) => ({
          ...att,
          weekSinceJoining: getWeeksSinceJoining(
            workerData.dateOfJoin,
            att.date,
          ),
        }));

        setAllAttendances(attendancesWithWeek);

        // Get current week number based on joining
        const currentWeekNum = getCurrentWeekNumber(workerData.dateOfJoin);

        // Create list of available weeks
        const weeks = [
          ...new Set(attendancesWithWeek.map((att) => att.weekSinceJoining)),
        ].sort((a, b) => b - a);
        setAvailableWeeks(weeks);

        // Filter to get current week attendances for stats
        const currentWeekAttendances = attendancesWithWeek.filter(
          (att) => att.weekSinceJoining === currentWeekNum,
        );

        // Calculate current week stats
        const totalHours = currentWeekAttendances.reduce(
          (sum, att) => sum + (att.hoursWorked || 0),
          0,
        );
        const remainingHours = Math.max(0, 45 - totalHours);

        // Calculate total stats since joining
        const totalHoursSinceJoining = attendancesWithWeek.reduce(
          (sum, att) => sum + (att.hoursWorked || 0),
          0,
        );
        const totalDaysWorked = attendancesWithWeek.filter(
          (att) => att.status === "checked-out",
        ).length;
        const averageHoursPerDay =
          totalDaysWorked > 0 ? totalHoursSinceJoining / totalDaysWorked : 0;

        // Set attendances to display (current week by default)
        setAttendances(currentWeekAttendances);
        setSelectedWeek("current");

        setWeekStats({
          totalHours,
          remainingHours,
          requiredHours: 45,
          currentWeekNum,
        });
        setTotalStats({
          totalHoursSinceJoining,
          totalDaysWorked,
          averageHoursPerDay,
        });
      } else {
        console.error(
          "Failed to fetch attendance:",
          await allAttendanceResponse.text(),
        );
      }
    } catch (error) {
      console.error("Error fetching worker data:", error);
      alert("Failed to fetch worker data");
    } finally {
      setLoading(false);
    }
  };

  const filterAttendanceByWeek = () => {
    if (!worker) return;

    if (selectedWeek === "all") {
      setAttendances(allAttendances);

      // Calculate stats for all time (same as total stats)
      const totalHours = allAttendances.reduce(
        (sum, att) => sum + (att.hoursWorked || 0),
        0,
      );

      setWeekStats({
        totalHours,
        remainingHours: 0,
        requiredHours: 45,
        currentWeekNum: "All Time",
      });
    } else if (selectedWeek === "current") {
      const currentWeekNum = getCurrentWeekNumber(worker.dateOfJoin);
      const weekAttendances = allAttendances.filter(
        (att) => att.weekSinceJoining === currentWeekNum,
      );

      setAttendances(weekAttendances);

      const totalHours = weekAttendances.reduce(
        (sum, att) => sum + (att.hoursWorked || 0),
        0,
      );
      const remainingHours = Math.max(0, 45 - totalHours);

      setWeekStats({
        totalHours,
        remainingHours,
        requiredHours: 45,
        currentWeekNum,
      });
    } else {
      // Specific week number
      const weekNum = parseInt(selectedWeek);
      const weekAttendances = allAttendances.filter(
        (att) => att.weekSinceJoining === weekNum,
      );

      setAttendances(weekAttendances);

      const totalHours = weekAttendances.reduce(
        (sum, att) => sum + (att.hoursWorked || 0),
        0,
      );
      const remainingHours = Math.max(0, 45 - totalHours);

      setWeekStats({
        totalHours,
        remainingHours,
        requiredHours: 45,
        currentWeekNum: weekNum,
      });
    }
  };

  const handleCheckIn = async () => {
    try {
      const checkInDateTime = checkInTime
        ? new Date(checkInTime).toISOString()
        : new Date().toISOString();

      const response = await fetch("/api/worker/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workerId,
          checkIn: checkInDateTime,
          notes,
        }),
      });

      if (response.ok) {
        alert("Checked in successfully!");
        setShowCheckInModal(false);
        setCheckInTime("");
        setNotes("");
        fetchWorkerData();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to check in");
      }
    } catch (error) {
      console.error("Error checking in:", error);
      alert("Failed to check in");
    }
  };

  const handleCheckOut = async (attendanceId) => {
    try {
      const checkOutDateTime = checkOutTime
        ? new Date(checkOutTime).toISOString()
        : new Date().toISOString();

      const response = await fetch(
        `/api/worker/attendance?id=${attendanceId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            checkOut: checkOutDateTime,
          }),
        },
      );

      if (response.ok) {
        alert("Checked out successfully!");
        setSelectedAttendance(null);
        setCheckOutTime("");
        fetchWorkerData();
      } else {
        alert("Failed to check out");
      }
    } catch (error) {
      console.error("Error checking out:", error);
      alert("Failed to check out");
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading worker details...</p>
        </div>
      </div>
    );
  }

  if (!worker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Worker not found</p>
          <button
            onClick={() => router.push("/workerManage")}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg"
          >
            Back to Workers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="mt-10 sm:mt-0 mb-4 sm:mb-6 flex flex-col text-center sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="w-full sm:w-auto">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent break-words">
            {worker.name}
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Worker Details & Attendance
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setShowCheckInModal(true)}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Check In
          </button>
        </div>
      </div>

      {/* Week Filter */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
              Filter by Week
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              View attendance for specific weeks since joining
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <label className="text-xs sm:text-sm font-semibold text-gray-700">
              Select Week:
            </label>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 font-medium text-sm"
            >
              <option value="current">Current Week</option>
              <option value="all">All Weeks</option>
              {availableWeeks.map((week) => (
                <option key={week} value={week}>
                  Week {week}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Worker Information Card */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
          Worker Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Worker Name</p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">
              {worker.name}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Father Name</p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">
              {worker.fatherName}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Contact</p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {worker.contact}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">
              Father Contact
            </p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {worker.fatherContact || "N/A"}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">
              Date of Join
            </p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {formatDate(worker.dateOfJoin)}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">
              Weekly Payment
            </p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              Rs. {worker.weeklyPayment || 0}
            </p>
          </div>
          {worker.cnicNumber && (
            <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                CNIC Number
              </p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                {worker.cnicNumber}
              </p>
            </div>
          )}
          {worker.emergencyContact && (
            <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Emergency Contact
              </p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                {worker.emergencyContact}
              </p>
            </div>
          )}
          {worker.address && (
            <div className="p-3 sm:p-4 bg-purple-50 rounded-lg sm:col-span-2">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Address</p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                {worker.address}
              </p>
            </div>
          )}
          <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                worker.status === "active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {worker.status}
            </span>
          </div>
        </div>
      </div>

      {/* Weekly Hours Summary */}
      {weekStats && (
        <>
          <div className="mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              {selectedWeek === "all"
                ? "All Time Progress"
                : `Week ${weekStats.currentWeekNum} Progress`}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              {selectedWeek === "all"
                ? "Total hours across all weeks"
                : "Weekly target: 45 hours"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-xs sm:text-sm mb-1">
                    Hours Worked
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {weekStats.totalHours.toFixed(2)}h
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-xs sm:text-sm mb-1">
                    Remaining Hours
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {weekStats.remainingHours.toFixed(2)}h
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 text-xs sm:text-sm mb-1">
                    Required Hours
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {weekStats.requiredHours}h
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Total Stats Since Joining */}
      {totalStats && worker && (
        <>
          <div className="mb-3 sm:mb-4 mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              Total Statistics Since Joining
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Joined on:{" "}
              {new Date(worker.dateOfJoin).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-xs sm:text-sm mb-1">
                    Total Hours Worked
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {totalStats.totalHoursSinceJoining.toFixed(2)}h
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-xs sm:text-sm mb-1">
                    Total Days Worked
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {totalStats.totalDaysWorked}
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-black rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-xs sm:text-sm mb-1">
                    Average Hours/Day
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {totalStats.averageHoursPerDay.toFixed(2)}h
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Attendance Table */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
        <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h2 className="text-xl sm:text-2xl font-bold">
            {selectedWeek === "all"
              ? "All Attendance Records"
              : selectedWeek === "current"
                ? `Week ${weekStats?.currentWeekNum} Attendance`
                : `Week ${selectedWeek} Attendance`}
          </h2>
          <p className="text-purple-100 mt-1 text-xs sm:text-sm">
            {selectedWeek === "all"
              ? "All check-in and check-out records since joining"
              : "Check-in and check-out records for selected week"}
          </p>
        </div>

        {attendances.length === 0 ? (
          <div className="p-6 sm:p-8 text-center text-gray-500">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-base sm:text-lg">No attendance records found</p>
            <p className="text-xs sm:text-sm mt-2">
              Click "Check In" to start tracking
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                    Check In
                  </th>
                  <th className=" md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                    Check Out
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                    Hours
                  </th>
                  <th className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {attendances.map((attendance, index) => (
                  <tr
                    key={attendance._id}
                    className={`hover:bg-purple-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-medium text-xs sm:text-sm">
                      {formatDate(attendance.date)}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">
                      {formatDateTime(attendance.checkIn)}
                    </td>
                    <td className=" md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">
                      {attendance.checkOut
                        ? formatDateTime(attendance.checkOut)
                        : "Not checked out"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        {attendance.hoursWorked
                          ? `${attendance.hoursWorked.toFixed(2)}h`
                          : "0h"}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4">
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                          attendance.status === "checked-out"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {attendance.status === "checked-out"
                          ? "Completed"
                          : "In Progress"}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                      {attendance.status === "checked-in" && (
                        <button
                          onClick={() => setSelectedAttendance(attendance)}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-xs sm:text-sm"
                        >
                          Check Out
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Check In Modal */}
      {showCheckInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
              <h2 className="text-xl sm:text-2xl font-bold">Check In</h2>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                  Check In Time (Optional)
                </label>
                <input
                  type="datetime-local"
                  value={checkInTime}
                  onChange={(e) => setCheckInTime(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty to use current time
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Add any notes..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button
                  onClick={handleCheckIn}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                >
                  Check In
                </button>
                <button
                  onClick={() => {
                    setShowCheckInModal(false);
                    setCheckInTime("");
                    setNotes("");
                  }}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Check Out Modal */}
      {selectedAttendance && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
              <h2 className="text-xl sm:text-2xl font-bold">Check Out</h2>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  Checked In At:
                </p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {formatDateTime(selectedAttendance.checkIn)}
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                  Check Out Time (Optional)
                </label>
                <input
                  type="datetime-local"
                  value={checkOutTime}
                  onChange={(e) => setCheckOutTime(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty to use current time
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button
                  onClick={() => handleCheckOut(selectedAttendance._id)}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                >
                  Check Out
                </button>
                <button
                  onClick={() => {
                    setSelectedAttendance(null);
                    setCheckOutTime("");
                  }}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
