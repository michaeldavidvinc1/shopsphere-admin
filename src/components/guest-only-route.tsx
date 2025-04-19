import { ROUTES } from "@/constant";
import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestOnlyRoute({ children }: {children: React.ReactNode}) {
    const token = localStorage.getItem('token');
    if (token) return <Navigate to={ROUTES.DASHBOARD} replace={true} />;

    return children || <Outlet />;
}
