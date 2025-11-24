import React, { useState, FormEvent } from 'react';
import { Lock, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';

interface EquipoLoginProps {
    onLogin: (password: string) => boolean;
}

const EquipoLogin: React.FC<EquipoLoginProps> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simular validación
        setTimeout(() => {
            const isValid = onLogin(password);
            if (!isValid) {
                setError('Contraseña incorrecta');
                setIsLoading(false);
            }
            // Si es válida, el componente padre maneja la navegación
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {/* Logo / Icono */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-4">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Título */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Acceso Equipo
                        </h1>
                        <p className="text-gray-600">
                            Área privada para el equipo de organización
                        </p>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                placeholder="Ingresa la contraseña del equipo"
                                autoFocus
                            />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                <AlertCircle className="w-4 h-4" />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !password}
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    Verificando...
                                </>
                            ) : (
                                <>
                                    Ingresar <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Información adicional */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-xs text-center text-gray-500">
                            Esta área es exclusiva para miembros del equipo de organización del Seminario
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipoLogin;

