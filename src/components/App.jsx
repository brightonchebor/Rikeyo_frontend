import React from "react"

import "./style.css"

const Component = () => {
    return (
        <div id="webcrumbs">
            <div className="w-[1280px] p-6 font-sans bg-gray-50">
                <div className="flex">
                    <aside className="w-[280px] bg-white rounded-xl shadow-lg p-5 mr-6 h-[calc(100vh-48px)] sticky top-6">
                        <div className="flex items-center mb-10">
                            <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                                <span className="material-symbols-outlined text-white">location_on</span>
                            </div>
                            <h1 className="text-xl font-bold text-gray-800">GeoTrack</h1>
                        </div>

                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-3 rounded-lg bg-primary-50 text-primary-700 font-medium hover:bg-primary-100 transition-all duration-200"
                                    >
                                        <span className="material-symbols-outlined mr-3">dashboard</span>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
                                    >
                                        <span className="material-symbols-outlined mr-3">landscape</span>
                                        Attendance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
                                    >
                                        <span className="material-symbols-outlined mr-3">history</span>
                                        History
                                    </a>
                                </li>
                                <li>
                                    <details className="group">
                                        <summary className="flex items-center p-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                                            <span className="material-symbols-outlined mr-3">group</span>
                                            Users
                                            <span className="material-symbols-outlined ml-auto transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <ul className="pl-10 mt-1 space-y-1">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200"
                                                >
                                                    Teachers
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200"
                                                >
                                                    Technicians
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200"
                                                >
                                                    Admins
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </nav>

                        <div className="absolute bottom-5 left-5 right-5">
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <div className="flex items-center mb-3">
                                    <div className="h-9 w-9 bg-primary-100 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-600">
                                            account_circle
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-medium text-gray-800">James Wilson</h4>
                                        <p className="text-xs text-gray-500">Administrator</p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm mr-2">settings</span>
                                    Settings
                                </a>
                            </div>

                            <button className="w-full flex items-center justify-center p-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all duration-200">
                                <span className="material-symbols-outlined mr-2">logout</span>
                                Sign Out
                            </button>
                        </div>
                    </aside>

                    <main className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="flex items-center mb-3">
                                    <span className="material-symbols-outlined mr-2 text-primary-600">people</span>
                                    <h3 className="font-semibold">Total Employees</h3>
                                </div>
                                <div className="flex items-end">
                                    <span className="text-3xl font-bold">248</span>
                                    <span className="ml-2 text-sm text-green-500 flex items-center">
                                        <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                        12%
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="flex items-center mb-3">
                                    <span className="material-symbols-outlined mr-2 text-emerald-600">
                                        check_circle
                                    </span>
                                    <h3 className="font-semibold">Present Today</h3>
                                </div>
                                <div className="flex items-end">
                                    <span className="text-3xl font-bold">187</span>
                                    <span className="ml-2 text-sm text-gray-500">/ 248</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="flex items-center mb-3">
                                    <span className="material-symbols-outlined mr-2 text-amber-600">schedule</span>
                                    <h3 className="font-semibold">Late Arrivals</h3>
                                </div>
                                <div className="flex items-end">
                                    <span className="text-3xl font-bold">24</span>
                                    <span className="ml-2 text-sm text-red-500 flex items-center">
                                        <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                        8%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <header className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Attendance Tracking</h2>

                            <div className="flex items-center">
                                <div className="relative mr-3">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">
                                        search
                                    </span>
                                </div>

                                <div className="relative">
                                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors relative">
                                        <span className="material-symbols-outlined">notifications</span>
                                        <span className="absolute top-1 right-1 h-4 w-4 bg-primary-500 rounded-full border-2 border-white"></span>
                                    </button>
                                </div>
                            </div>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-5 overflow-hidden">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="font-semibold text-lg">Location Tracking</h3>
                                    <button className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
                                        <span className="text-sm">View Full Map</span>
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </button>
                                </div>

                                <div className="h-[400px] bg-gray-100 rounded-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-50 opacity-70">
                                        {/* Next: "Add interactive map using react-leaflet" */}
                                        <img
                                            src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MHx8fHwxNzQ3Mjk3MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="Map"
                                            className="w-full h-full object-cover"
                                            keywords="map, location tracking, geofence"
                                        />
                                    </div>

                                    <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                                        <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                        <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                                            <span className="material-symbols-outlined">my_location</span>
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-4">
                                        <div className="flex items-center mb-3">
                                            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
                                            <span className="text-sm font-medium">Inside Geofence</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-emerald-500 mr-2">
                                                location_on
                                            </span>
                                            <span className="text-sm">2.3 miles from workplace</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex">
                                    <button className="mr-3 flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm">
                                        Clock In
                                    </button>
                                    <button className="flex-1 bg-gray-100 text-gray-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                        Clock Out
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="font-semibold text-lg">Recent Activity</h3>
                                    <button className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
                                        <span className="text-sm">View All</span>
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </button>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="material-symbols-outlined text-emerald-600">login</span>
                                        </div>
                                        <div className="ml-3">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Clock In</h4>
                                                <span className="ml-auto text-xs text-gray-500">09:32 AM</span>
                                            </div>
                                            <p className="text-sm text-gray-500">You clocked in from Main Building</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="material-symbols-outlined text-amber-600">warning</span>
                                        </div>
                                        <div className="ml-3">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Geofence Alert</h4>
                                                <span className="ml-auto text-xs text-gray-500">Yesterday</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Location was outside allowed area</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="material-symbols-outlined text-red-600">logout</span>
                                        </div>
                                        <div className="ml-3">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Clock Out</h4>
                                                <span className="ml-auto text-xs text-gray-500">Yesterday</span>
                                            </div>
                                            <p className="text-sm text-gray-500">You clocked out from Main Building</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="material-symbols-outlined text-emerald-600">login</span>
                                        </div>
                                        <div className="ml-3">
                                            <div className="flex items-center">
                                                <h4 className="font-medium">Clock In</h4>
                                                <span className="ml-auto text-xs text-gray-500">Yesterday</span>
                                            </div>
                                            <p className="text-sm text-gray-500">You clocked in from Main Building</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-5 border-t pt-5">
                                    <h3 className="font-semibold mb-3">Today's Summary</h3>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-600">Hours Worked</span>
                                        <span className="font-medium">6h 32m</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Break Time</span>
                                        <span className="font-medium">45m</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-semibold text-lg">Employee Attendance</h3>

                                <div className="flex items-center">
                                    <div className="relative mr-3">
                                        <input
                                            type="date"
                                            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    <button className="flex items-center bg-primary-50 text-primary-600 py-2 px-4 rounded-lg hover:bg-primary-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2">filter_list</span>
                                        Filter
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 rounded-l-lg">
                                                Employee
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                                Role
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                                Clock In
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                                Clock Out
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                                Hours
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 rounded-r-lg">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc0NzIxOTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                        alt="Employee"
                                                        className="h-8 w-8 rounded-full mr-3"
                                                        keywords="profile, user avatar, employee"
                                                    />
                                                    <span className="font-medium">Sarah Johnson</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-gray-600">Teacher</td>
                                            <td className="px-4 py-4 text-gray-600">08:30 AM</td>
                                            <td className="px-4 py-4 text-gray-600">05:15 PM</td>
                                            <td className="px-4 py-4 text-gray-600">8h 45m</td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                    Present
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTc0NzIxOTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                        alt="Employee"
                                                        className="h-8 w-8 rounded-full mr-3"
                                                        keywords="profile, user avatar, employee"
                                                    />
                                                    <span className="font-medium">Michael Thompson</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-gray-600">Technician</td>
                                            <td className="px-4 py-4 text-gray-600">09:15 AM</td>
                                            <td className="px-4 py-4 text-gray-600">--:--</td>
                                            <td className="px-4 py-4 text-gray-600">--</td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                                                    Working
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc0NzIxOTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                        alt="Employee"
                                                        className="h-8 w-8 rounded-full mr-3"
                                                        keywords="profile, user avatar, employee"
                                                    />
                                                    <span className="font-medium">Emily Chen</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-gray-600">Teacher</td>
                                            <td className="px-4 py-4 text-gray-600">08:45 AM</td>
                                            <td className="px-4 py-4 text-gray-600">04:30 PM</td>
                                            <td className="px-4 py-4 text-gray-600">7h 45m</td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                    Present
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw0fHxwcm9maWxlfGVufDB8fHx8MTc0NzIxOTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                        alt="Employee"
                                                        className="h-8 w-8 rounded-full mr-3"
                                                        keywords="profile, user avatar, employee"
                                                    />
                                                    <span className="font-medium">Robert Wilson</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-gray-600">Admin</td>
                                            <td className="px-4 py-4 text-gray-600">--:--</td>
                                            <td className="px-4 py-4 text-gray-600">--:--</td>
                                            <td className="px-4 py-4 text-gray-600">--</td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                                    Absent
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlfGVufDB8fHx8MTc0NzIxOTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                        alt="Employee"
                                                        className="h-8 w-8 rounded-full mr-3"
                                                        keywords="profile, user avatar, employee"
                                                    />
                                                    <span className="font-medium">Jessica Martinez</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-gray-600">Technician</td>
                                            <td className="px-4 py-4 text-gray-600">09:30 AM</td>
                                            <td className="px-4 py-4 text-gray-600">06:00 PM</td>
                                            <td className="px-4 py-4 text-gray-600">8h 30m</td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                    Present
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-sm text-gray-600">Showing 5 of 248 employees</span>
                                <div className="flex items-center">
                                    <button
                                        className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-200 mr-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                                        disabled
                                    >
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="h-9 w-9 rounded-full flex items-center justify-center bg-primary-600 text-white mr-2 hover:bg-primary-700 transition-colors">
                                        1
                                    </button>
                                    <button className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-200 mr-2 hover:bg-gray-50 transition-colors">
                                        2
                                    </button>
                                    <button className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-200 mr-2 hover:bg-gray-50 transition-colors">
                                        3
                                    </button>
                                    <button className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Component