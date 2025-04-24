import GuardRoute from "@/components/guard-route";
import GuestOnlyRoute from "@/components/guest-only-route";
import { ROUTES } from "@/constant";
import LoginPage from "@/pages/auth/login";
import DashboardPage from "@/pages/dashboard";
import { Route, Routes } from "react-router-dom";
import CategoryRoute from "./category.route";

export default function AppRoutes(){
    return (
        <Routes>
            <Route
                path={ROUTES.LOGIN}
                element={
                    <GuestOnlyRoute>
                        <LoginPage />
                    </GuestOnlyRoute>
                }
            />
            <Route
                path={ROUTES.DASHBOARD}
                element={
                    <GuardRoute />
                }
            >
                <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
                <Route path={`${ROUTES.CATEGORY}/*`} element={<CategoryRoute />} />
            </Route>
        </Routes>
    )
}