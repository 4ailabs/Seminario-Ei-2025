import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import EquipoLogin from './EquipoLogin';
import { EQUIPO_PASSWORD } from '../data/equipoActivities';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // Verificar si el usuario está autenticado
        const authStatus = localStorage.getItem('equipo_authenticated');
        setIsAuthenticated(authStatus === 'true');
        setIsChecking(false);
    }, []);

    const handleLogin = (password: string): boolean => {
        // Comparar contraseña
        if (password === EQUIPO_PASSWORD) {
            localStorage.setItem('equipo_authenticated', 'true');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    if (isChecking) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <EquipoLogin onLogin={handleLogin} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

