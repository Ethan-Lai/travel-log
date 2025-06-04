import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./features/auth/Login.jsx"
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import TravelLogs from "./features/travelLogs/TravelLogs.jsx";
import Settings from "./features/settings/Settings.jsx";
import Home from "./features/dashboard/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
					<DashboardLayout>
						<Home />
					</DashboardLayout>
				} />
				<Route path="/travel-logs" element={
					<DashboardLayout>
						<TravelLogs />
					</DashboardLayout>
				} />
				<Route path="/settings" element={
					<DashboardLayout>
						<Settings />
					</DashboardLayout>
				} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;