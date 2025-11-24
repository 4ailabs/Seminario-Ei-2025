import React, { useState } from 'react';
import { 
    CheckCircle2, 
    Clock, 
    PlayCircle,
    Users,
    LogOut,
    Filter,
    Calendar,
    Zap,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { equipoActivities, Activity } from '../data/equipoActivities';

const EquipoPage: React.FC = () => {
    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');
    const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
    const [expandedActivities, setExpandedActivities] = useState<Set<string>>(new Set());

    // Calcular estadísticas
    const allActivities = equipoActivities.flatMap(week => week.activities);
    const completedCount = allActivities.filter(a => a.status === 'completed').length;
    const inProgressCount = allActivities.filter(a => a.status === 'in-progress').length;
    const pendingCount = allActivities.filter(a => a.status === 'pending').length;
    const totalCount = allActivities.length;

    const handleLogout = () => {
        localStorage.removeItem('equipo_authenticated');
        window.location.href = '/equipo';
    };

    const toggleExpand = (activityId: string) => {
        setExpandedActivities(prev => {
            const newSet = new Set(prev);
            if (newSet.has(activityId)) {
                newSet.delete(activityId);
            } else {
                newSet.add(activityId);
            }
            return newSet;
        });
    };

    const getStatusIcon = (status: Activity['status']) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case 'in-progress':
                return <PlayCircle className="w-4 h-4 text-blue-500" />;
            default:
                return <Clock className="w-4 h-4 text-gray-400" />;
        }
    };

    const getPersonColor = (assignedTo?: string) => {
        if (!assignedTo) return 'bg-gray-100 text-gray-700 border-l-4 border-gray-500';
        
        if (assignedTo.includes('Miguel')) {
            return 'bg-blue-50 text-blue-700 border-l-4 border-blue-500';
        } else if (assignedTo.includes('Beto')) {
            return 'bg-purple-50 text-purple-700 border-l-4 border-purple-500';
        } else if (assignedTo.includes('Paola')) {
            return 'bg-pink-50 text-pink-700 border-l-4 border-pink-500';
        }
        return 'bg-gray-50 text-gray-700 border-l-4 border-gray-400';
    };

    const getStatusColor = (status: Activity['status']) => {
        switch (status) {
            case 'completed':
                return 'border-green-300';
            case 'in-progress':
                return 'border-blue-300';
            default:
                return 'border-gray-200';
        }
    };

    const getPriorityBadge = (priority: Activity['priority']) => {
        const colors = {
            high: 'bg-red-100 text-red-700',
            medium: 'bg-yellow-100 text-yellow-700',
            low: 'bg-blue-100 text-blue-700'
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[priority]}`}>
                {priority.toUpperCase()}
            </span>
        );
    };

    // Agrupar actividades por día según su fecha
    const activitiesByDay = allActivities.reduce((acc, activity) => {
        const date = activity.dueDate || 'Sin fecha';
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
    }, {} as Record<string, Activity[]>);

    // Definir días de la semana con sus fechas
    const daysOfWeek = [
        { name: 'Lunes 27', date: '2025-10-27', label: 'LUNES' },
        { name: 'Martes 28', date: '2025-10-28', label: 'MARTES' },
        { name: 'Miércoles 29', date: '2025-10-29', label: 'MIÉRCOLES' },
        { name: 'Jueves 30', date: '2025-10-30', label: 'JUEVES - WEBINAR EN VIVO' },
        { name: 'Viernes 31', date: '2025-10-31', label: 'VIERNES' },
        { name: 'Sábado 1', date: '2025-11-01', label: 'SÁBADO' },
        { name: 'Domingo 2', date: '2025-11-02', label: 'DOMINGO' }
    ];

    const getDayActivities = (date: string) => {
        return activitiesByDay[date] || [];
    };

    const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Plan Semanal del Equipo
                            </h1>
                            <p className="text-sm text-gray-600 mt-1">
                                27 Oct - 2 Nov | Meta: 120 inscritos
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            Salir
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Total</span>
                            <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{totalCount}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Completadas</span>
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-3xl font-bold text-green-600">{completedCount}</p>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-green-500 h-2 rounded-full transition-all"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{progressPercentage}% completado</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">En Progreso</span>
                            <PlayCircle className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-3xl font-bold text-blue-600">{inProgressCount}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Pendientes</span>
                            <Clock className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-3xl font-bold text-gray-600">{pendingCount}</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-6">
                    <div className="flex items-center gap-4">
                        <Filter className="w-5 h-5 text-gray-500" />
                        <span className="font-medium text-gray-700">Filtrar:</span>
                        {[
                            { value: 'all', label: 'Todos' },
                            { value: 'pending', label: 'Pendientes' },
                            { value: 'in-progress', label: 'En Progreso' },
                            { value: 'completed', label: 'Completadas' }
                        ].map(({ value, label }) => (
                            <button
                                key={value}
                                onClick={() => setStatusFilter(value as any)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    statusFilter === value
                                        ? 'bg-purple-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Team Colors Legend */}
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-8">
                    <div className="flex items-center gap-6">
                        <span className="font-medium text-gray-700">Responsables:</span>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            <span className="text-sm text-gray-600">Miguel</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-500 rounded"></div>
                            <span className="text-sm text-gray-600">Beto</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-pink-500 rounded"></div>
                            <span className="text-sm text-gray-600">Paola</span>
                        </div>
                    </div>
                </div>

                {/* Timeline por días */}
                <div className="space-y-4">
                    {daysOfWeek.map((day) => {
                        const activities = getDayActivities(day.date);
                        const filteredActivities = activities.filter(activity =>
                            statusFilter === 'all' || activity.status === statusFilter
                        );

                        if (filteredActivities.length === 0 && statusFilter !== 'all') {
                            return null;
                        }

                        const isToday = day.date === new Date().toISOString().split('T')[0];
                        const isWebinarDay = day.label.includes('WEBINAR');

                        return (
                            <div key={day.date} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                {/* Day Header */}
                                <div className={`px-6 py-4 ${
                                    isWebinarDay
                                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                                        : isToday
                                        ? 'bg-purple-50 border-purple-200'
                                        : 'bg-gray-50'
                                }`}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className={`text-xl font-bold ${isWebinarDay ? 'text-white' : 'text-gray-900'}`}>
                                                {day.label}
                                            </h2>
                                            <p className={`text-sm ${isWebinarDay ? 'text-white opacity-90' : 'text-gray-600'}`}>
                                                {day.name} de {day.date.includes('2025-10') ? 'Octubre' : 'Noviembre'}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                isWebinarDay
                                                    ? 'bg-white text-purple-600'
                                                    : isToday
                                                    ? 'bg-purple-500 text-white'
                                                    : 'bg-gray-200 text-gray-700'
                                            }`}>
                                                {filteredActivities.length} actividades
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Activities */}
                                {filteredActivities.length === 0 ? (
                                    <div className="p-6 text-center text-gray-500">
                                        {statusFilter !== 'all' ? 'Sin actividades para este filtro' : 'Sin actividades programadas'}
                                    </div>
                                ) : (
                                    <div className="p-6">
                                        <div className="grid gap-4">
                                            {filteredActivities.map((activity) => {
                                                const isExpanded = expandedActivities.has(activity.id);
                                                const hasDetails = activity.deliverables || activity.notes || activity.link;
                                                
                                                return (
                                                    <div
                                                        key={activity.id}
                                                        className={`p-5 rounded-lg border ${getStatusColor(activity.status)} ${getPersonColor(activity.assignedTo)} transition-all hover:shadow-lg`}
                                                    >
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex items-start gap-3 flex-1">
                                                                <div className="mt-1">
                                                                    {getStatusIcon(activity.status)}
                                                                </div>
                                                                <div className="flex-1 space-y-2">
                                                                    <div>
                                                                        <h3 className="font-semibold text-gray-900 mb-1">
                                                                            {activity.title}
                                                                        </h3>
                                                                        <p className="text-sm text-gray-600 mb-2">
                                                                            {activity.description}
                                                                        </p>
                                                                    </div>
                                                                    
                                                                    {/* Información principal */}
                                                                    <div className="flex items-center gap-3 flex-wrap">
                                                                        {activity.assignedTo && (
                                                                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                                                                <Users className="w-3 h-3" />
                                                                                {activity.assignedTo}
                                                                            </div>
                                                                        )}
                                                                        {getPriorityBadge(activity.priority)}
                                                                        {activity.time && (
                                                                            <div className="flex items-center gap-1 text-xs text-blue-600">
                                                                                <Clock className="w-3 h-3" />
                                                                                {activity.time}
                                                                            </div>
                                                                        )}
                                                                        {activity.platform && (
                                                                            <div className="flex items-center gap-1 text-xs text-purple-600">
                                                                                <Calendar className="w-3 h-3" />
                                                                                {activity.platform}
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    {/* Detalles expandibles */}
                                                                    {isExpanded && (
                                                                        <div className="mt-3 space-y-3">
                                                                            {/* Entregables */}
                                                                            {activity.deliverables && activity.deliverables.length > 0 && (
                                                                                <div className="pt-3 border-t border-gray-200">
                                                                                    <p className="text-xs font-semibold text-gray-700 mb-2">Entregables:</p>
                                                                                    <ul className="space-y-1">
                                                                                        {activity.deliverables.map((deliverable, idx) => (
                                                                                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                                                                                <span className="text-green-500 mt-1">•</span>
                                                                                                <span>{deliverable}</span>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            )}

                                                                            {/* Notas */}
                                                                            {activity.notes && (
                                                                                <div className="p-2 bg-blue-50 rounded border border-blue-200">
                                                                                    <p className="text-xs font-semibold text-blue-700 mb-1">Notas:</p>
                                                                                    <p className="text-xs text-blue-600">{activity.notes}</p>
                                                                                </div>
                                                                            )}

                                                                            {/* Link */}
                                                                            {activity.link && (
                                                                                <div>
                                                                                    <a 
                                                                                        href={activity.link} 
                                                                                        target="_blank" 
                                                                                        rel="noopener noreferrer"
                                                                                        className="text-xs text-blue-600 hover:text-blue-700 underline"
                                                                                    >
                                                                                        {activity.link}
                                                                                    </a>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {hasDetails && (
                                                                <button
                                                                    onClick={() => toggleExpand(activity.id)}
                                                                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                                                                >
                                                                    {isExpanded ? (
                                                                        <ChevronUp className="w-5 h-5" />
                                                                    ) : (
                                                                        <ChevronDown className="w-5 h-5" />
                                                                    )}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Meta Section */}
                <div className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-6 h-6" />
                        <h3 className="text-xl font-bold">Meta de la Semana</h3>
                    </div>
                    <p className="text-lg mb-2">Pasar de 50 a 120 inscritos</p>
                    <p className="text-sm opacity-90">
                        Evento clave: <strong>Jueves 6:00 PM - Webinar en Vivo</strong> (Facebook Live + Zoom)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EquipoPage;
