(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OZONE/ozone-water-1/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ViewWorker() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const workerId = params.workerId;
    const [worker, setWorker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attendances, setAttendances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allAttendances, setAllAttendances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [weekStats, setWeekStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalStats, setTotalStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCheckInModal, setShowCheckInModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkInTime, setCheckInTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [checkOutTime, setCheckOutTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedAttendance, setSelectedAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedWeek, setSelectedWeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("current");
    const [availableWeeks, setAvailableWeeks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Calculate weeks since joining
    const getWeeksSinceJoining = (joiningDate, currentDate)=>{
        const joining = new Date(joiningDate);
        const current = new Date(currentDate);
        const diffTime = Math.abs(current - joining);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.ceil(diffDays / 7);
    };
    // Get current week number based on joining date
    const getCurrentWeekNumber = (joiningDate)=>{
        return getWeeksSinceJoining(joiningDate, new Date());
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewWorker.useEffect": ()=>{
            if (workerId) {
                fetchWorkerData();
            }
        }
    }["ViewWorker.useEffect"], [
        workerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewWorker.useEffect": ()=>{
            if (selectedWeek !== "all" && worker) {
                filterAttendanceByWeek();
            }
        }
    }["ViewWorker.useEffect"], [
        selectedWeek,
        allAttendances,
        worker
    ]);
    const fetchWorkerData = async ()=>{
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
                const allAttendancesArray = Array.isArray(fetchedAttendances) ? fetchedAttendances : [];
                // Calculate week number for each attendance based on joining date
                const attendancesWithWeek = allAttendancesArray.map((att)=>({
                        ...att,
                        weekSinceJoining: getWeeksSinceJoining(workerData.dateOfJoin, att.date)
                    }));
                setAllAttendances(attendancesWithWeek);
                // Get current week number based on joining
                const currentWeekNum = getCurrentWeekNumber(workerData.dateOfJoin);
                // Create list of available weeks
                const weeks = [
                    ...new Set(attendancesWithWeek.map((att)=>att.weekSinceJoining))
                ].sort((a, b)=>b - a);
                setAvailableWeeks(weeks);
                // Filter to get current week attendances for stats
                const currentWeekAttendances = attendancesWithWeek.filter((att)=>att.weekSinceJoining === currentWeekNum);
                // Calculate current week stats
                const totalHours = currentWeekAttendances.reduce((sum, att)=>sum + (att.hoursWorked || 0), 0);
                const remainingHours = Math.max(0, 45 - totalHours);
                // Calculate total stats since joining
                const totalHoursSinceJoining = attendancesWithWeek.reduce((sum, att)=>sum + (att.hoursWorked || 0), 0);
                const totalDaysWorked = attendancesWithWeek.filter((att)=>att.status === "checked-out").length;
                const averageHoursPerDay = totalDaysWorked > 0 ? totalHoursSinceJoining / totalDaysWorked : 0;
                // Set attendances to display (current week by default)
                setAttendances(currentWeekAttendances);
                setSelectedWeek("current");
                setWeekStats({
                    totalHours,
                    remainingHours,
                    requiredHours: 45,
                    currentWeekNum
                });
                setTotalStats({
                    totalHoursSinceJoining,
                    totalDaysWorked,
                    averageHoursPerDay
                });
            } else {
                console.error("Failed to fetch attendance:", await allAttendanceResponse.text());
            }
        } catch (error) {
            console.error("Error fetching worker data:", error);
            alert("Failed to fetch worker data");
        } finally{
            setLoading(false);
        }
    };
    const filterAttendanceByWeek = ()=>{
        if (!worker) return;
        if (selectedWeek === "all") {
            setAttendances(allAttendances);
            // Calculate stats for all time (same as total stats)
            const totalHours = allAttendances.reduce((sum, att)=>sum + (att.hoursWorked || 0), 0);
            setWeekStats({
                totalHours,
                remainingHours: 0,
                requiredHours: 45,
                currentWeekNum: "All Time"
            });
        } else if (selectedWeek === "current") {
            const currentWeekNum = getCurrentWeekNumber(worker.dateOfJoin);
            const weekAttendances = allAttendances.filter((att)=>att.weekSinceJoining === currentWeekNum);
            setAttendances(weekAttendances);
            const totalHours = weekAttendances.reduce((sum, att)=>sum + (att.hoursWorked || 0), 0);
            const remainingHours = Math.max(0, 45 - totalHours);
            setWeekStats({
                totalHours,
                remainingHours,
                requiredHours: 45,
                currentWeekNum
            });
        } else {
            // Specific week number
            const weekNum = parseInt(selectedWeek);
            const weekAttendances = allAttendances.filter((att)=>att.weekSinceJoining === weekNum);
            setAttendances(weekAttendances);
            const totalHours = weekAttendances.reduce((sum, att)=>sum + (att.hoursWorked || 0), 0);
            const remainingHours = Math.max(0, 45 - totalHours);
            setWeekStats({
                totalHours,
                remainingHours,
                requiredHours: 45,
                currentWeekNum: weekNum
            });
        }
    };
    const handleCheckIn = async ()=>{
        try {
            const checkInDateTime = checkInTime ? new Date(checkInTime).toISOString() : new Date().toISOString();
            const response = await fetch("/api/worker/attendance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    workerId,
                    checkIn: checkInDateTime,
                    notes
                })
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
    const handleCheckOut = async (attendanceId)=>{
        try {
            const checkOutDateTime = checkOutTime ? new Date(checkOutTime).toISOString() : new Date().toISOString();
            const response = await fetch(`/api/worker/attendance?id=${attendanceId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    checkOut: checkOutDateTime
                })
            });
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
    const formatDateTime = (dateString)=>{
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const formatDate = (dateString)=>{
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading worker details..."
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 301,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
            lineNumber: 300,
            columnNumber: 7
        }, this);
    }
    if (!worker) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600",
                        children: "Worker not found"
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/workerManage"),
                        className: "mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg",
                        children: "Back to Workers"
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 312,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
            lineNumber: 311,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-3 sm:p-4 md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 sm:mt-0 mb-4 sm:mb-6 flex flex-col text-center sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent break-words",
                                children: worker.name
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1 text-sm sm:text-base",
                                children: "Worker Details & Attendance"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full sm:w-auto flex items-center gap-3 sm:gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowCheckInModal(true),
                            className: "w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                "Check In"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base sm:text-lg font-bold text-gray-800 mb-1",
                                    children: "Filter by Week"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-gray-600",
                                    children: "View attendance for specific weeks since joining"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm font-semibold text-gray-700",
                                    children: "Select Week:"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedWeek,
                                    onChange: (e)=>setSelectedWeek(e.target.value),
                                    className: "w-full sm:w-auto px-3 sm:px-4 py-2 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 font-medium text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "current",
                                            children: "Current Week"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All Weeks"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        availableWeeks.map((week)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: week,
                                                children: [
                                                    "Week ",
                                                    week
                                                ]
                                            }, week, true, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4",
                        children: "Worker Information"
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Worker Name"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base break-words",
                                        children: worker.name
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Father Name"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base break-words",
                                        children: worker.fatherName
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base",
                                        children: worker.contact
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Father Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base",
                                        children: worker.fatherContact || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Date of Join"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base",
                                        children: formatDate(worker.dateOfJoin)
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Weekly Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base",
                                        children: [
                                            "Rs. ",
                                            worker.weeklyPayment || 0
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            worker.cnicNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "CNIC Number"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base",
                                        children: worker.cnicNumber
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this),
                            worker.emergencyContact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Emergency Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base",
                                        children: worker.emergencyContact
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            worker.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900 text-sm sm:text-base break-words",
                                        children: worker.address
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 bg-purple-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 mb-1",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block px-3 py-1 rounded-full text-sm font-semibold ${worker.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                        children: worker.status
                                    }, void 0, false, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            weekStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2",
                                children: selectedWeek === "all" ? "All Time Progress" : `Week ${weekStats.currentWeekNum} Progress`
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs sm:text-sm",
                                children: selectedWeek === "all" ? "Total hours across all weeks" : "Weekly target: 45 hours"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-blue-100 text-xs sm:text-sm mb-1",
                                                    children: "Hours Worked"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 503,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-3xl font-bold",
                                                    children: [
                                                        weekStats.totalHours.toFixed(2),
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 517,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-purple-100 text-xs sm:text-sm mb-1",
                                                    children: "Remaining Hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-3xl font-bold",
                                                    children: [
                                                        weekStats.remainingHours.toFixed(2),
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 545,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-pink-100 text-xs sm:text-sm mb-1",
                                                    children: "Required Hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 559,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-3xl font-bold",
                                                    children: [
                                                        weekStats.requiredHours,
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 562,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 573,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 566,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 499,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            totalStats && worker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4 mt-6 sm:mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2",
                                children: "Total Statistics Since Joining"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs sm:text-sm",
                                children: [
                                    "Joined on:",
                                    " ",
                                    new Date(worker.dateOfJoin).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 590,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-100 text-xs sm:text-sm mb-1",
                                                    children: "Total Hours Worked"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 607,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-3xl font-bold",
                                                    children: [
                                                        totalStats.totalHoursSinceJoining.toFixed(2),
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 606,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 621,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 615,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 605,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 604,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-indigo-100 text-xs sm:text-sm mb-1",
                                                    children: "Total Days Worked"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 635,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-3xl font-bold",
                                                    children: totalStats.totalDaysWorked
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 638,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 649,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 643,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 632,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-orange-500 to-orange-600 text-black rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-orange-100 text-xs sm:text-sm mb-1",
                                                    children: "Average Hours/Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 663,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-3xl font-bold",
                                                    children: [
                                                        totalStats.averageHoursPerDay.toFixed(2),
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 666,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 677,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 671,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 670,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 660,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 603,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold",
                                children: selectedWeek === "all" ? "All Attendance Records" : selectedWeek === "current" ? `Week ${weekStats?.currentWeekNum} Attendance` : `Week ${selectedWeek} Attendance`
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-100 mt-1 text-xs sm:text-sm",
                                children: selectedWeek === "all" ? "All check-in and check-out records since joining" : "Check-in and check-out records for selected week"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 701,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this),
                    attendances.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-8 text-center text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 716,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 710,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg",
                                children: "No attendance records found"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 723,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm mt-2",
                                children: 'Click "Check In" to start tracking'
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 724,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 709,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50 border-b-2 border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 733,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700",
                                                children: "Check In"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 736,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: " md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700",
                                                children: "Check Out"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 739,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700",
                                                children: "Hours"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 742,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 745,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-700",
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                lineNumber: 748,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-200",
                                    children: attendances.map((attendance, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-purple-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-medium text-xs sm:text-sm",
                                                    children: formatDate(attendance.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 761,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm",
                                                    children: formatDateTime(attendance.checkIn)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 764,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: " md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm",
                                                    children: attendance.checkOut ? formatDateTime(attendance.checkOut) : "Not checked out"
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 767,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 sm:px-6 py-3 sm:py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold",
                                                        children: attendance.hoursWorked ? `${attendance.hoursWorked.toFixed(2)}h` : "0h"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                        lineNumber: 773,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 772,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${attendance.status === "checked-out" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                                                        children: attendance.status === "checked-out" ? "Completed" : "In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                        lineNumber: 780,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 779,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 sm:px-6 py-3 sm:py-4 text-center",
                                                    children: attendance.status === "checked-in" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedAttendance(attendance),
                                                        className: "px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-xs sm:text-sm",
                                                        children: "Check Out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                        lineNumber: 794,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                                    lineNumber: 792,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, attendance._id, true, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 755,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 753,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 730,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                        lineNumber: 729,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 692,
                columnNumber: 7
            }, this),
            showCheckInModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold",
                                children: "Check In"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 815,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 814,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 space-y-3 sm:space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2",
                                            children: "Check In Time (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "datetime-local",
                                            value: checkInTime,
                                            onChange: (e)=>setCheckInTime(e.target.value),
                                            className: "w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 823,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Leave empty to use current time"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 829,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2",
                                            children: "Notes (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 835,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: notes,
                                            onChange: (e)=>setNotes(e.target.value),
                                            rows: "3",
                                            className: "w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm",
                                            placeholder: "Add any notes..."
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 838,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 834,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCheckIn,
                                            className: "flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base",
                                            children: "Check In"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 848,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowCheckInModal(false);
                                                setCheckInTime("");
                                                setNotes("");
                                            },
                                            className: "flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 text-sm sm:text-base",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 854,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 847,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 818,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                    lineNumber: 813,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 812,
                columnNumber: 9
            }, this),
            selectedAttendance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold",
                                children: "Check Out"
                            }, void 0, false, {
                                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                lineNumber: 875,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 874,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 space-y-3 sm:space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-purple-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-gray-600",
                                            children: "Checked In At:"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 880,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-900 text-sm sm:text-base",
                                            children: formatDateTime(selectedAttendance.checkIn)
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 883,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 879,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2",
                                            children: "Check Out Time (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 889,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "datetime-local",
                                            value: checkOutTime,
                                            onChange: (e)=>setCheckOutTime(e.target.value),
                                            className: "w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Leave empty to use current time"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 888,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleCheckOut(selectedAttendance._id),
                                            className: "flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base",
                                            children: "Check Out"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedAttendance(null);
                                                setCheckOutTime("");
                                            },
                                            className: "flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 text-sm sm:text-base",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                            lineNumber: 910,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                    lineNumber: 873,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
                lineNumber: 872,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OZONE/ozone-water-1/src/app/workerManage/view/[workerId]/page.jsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
_s(ViewWorker, "osMvhKwkbVNQ37Lq6m6UMSmfyzI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OZONE$2f$ozone$2d$water$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ViewWorker;
var _c;
__turbopack_context__.k.register(_c, "ViewWorker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OZONE_ozone-water-1_src_app_workerManage_view_%5BworkerId%5D_page_jsx_ab8bb1a1._.js.map