import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function GuardRoute() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            // try {
            //     const response = await axios.get(config.api_host_dev + API_URL.VERIFY_TOKEN(token));
            //     if (response.data.success !== true) {
            //         throw new Error('Token invalid');
            //     }
            // } catch (error) {
            //     localStorage.removeItem('token');
            //     navigate('/login');
            // }
        };

        validateToken();
    }, [location.pathname, navigate]);  
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    );
}
