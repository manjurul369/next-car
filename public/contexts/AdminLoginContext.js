"use client";
import { createContext, useContext, useState } from 'react';

const AdminLoginContext = createContext();

export const useAdminLogin = () => {
    const context = useContext(AdminLoginContext);
    if (!context) {
        throw new Error('useAdminLogin must be used within an AdminLoginProvider');
    }
    return context;
}

export const AdminLoginProvider = ({children}) => {
    const [isLogging, setIsLogging] = useState(true);

    const handleclick = () => {
        setIsLogging(!isLogging);
    }

    return (
        <AdminLoginContext.Provider value={{ isLogging, handleclick }}>
            {children}
        </AdminLoginContext.Provider>
    );
}