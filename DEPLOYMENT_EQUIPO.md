# 🔒 Configuración del Área del Equipo en Vercel

## Seguridad

La sección `/equipo` está protegida por contraseña. Por defecto, usa `seminario2025`, pero **es importante cambiarla en producción**.

## Configuración en Vercel

### Opción 1: Variables de Entorno (RECOMENDADO)

1. Ve a tu proyecto en **Vercel Dashboard**
2. Ve a **Settings** → **Environment Variables**
3. Agrega las siguientes variables:
   - `VITE_EQUIPO_PASSWORD` = `tu_contraseña_segura_aqui`
   - `VITE_ADMIN_PASSWORD` = `admin_seguro` (opcional)
   - `VITE_GUEST_PASSWORD` = `guest_seguro` (opcional)

4. **Vuelve a deployar** para que los cambios tomen efecto

### Opción 2: Cambiar directamente en el código

Si no quieres usar variables de entorno, puedes cambiar directamente en `data/equipoActivities.ts`:

```typescript
export const EQUIPO_PASSWORD = 'tu_contraseña_super_segura_aqui';
```

## Cómo funciona

1. **URL de acceso**: `tudominio.com/equipo`
2. **Login**: Muestra una pantalla de login solicitando contraseña
3. **Dashboard**: Si la contraseña es correcta, muestra el dashboard con:
   - Estadísticas de progreso
   - Actividades organizadas por semana
   - Filtros por estado
   - Información detallada de cada actividad

## Características de Seguridad

- ✅ Solo quien conoce la contraseña puede ver el contenido
- ✅ La sesión persiste mientras el navegador esté abierto
- ⚠️ La URL `/equipo` es pública (cualquiera puede ver la pantalla de login)
- ⚠️ Para mayor seguridad, considera usar autenticación más robusta

## Recomendaciones

1. **Usa una contraseña fuerte** en producción
2. **No compartas la URL** públicamente
3. **Actualiza la contraseña** si sospechas que se comprometió
4. Para mayor seguridad, considera implementar autenticación con JWT o similar

## Testing

Para probar localmente:
1. Copia `.env.example` a `.env.local`
2. Modifica las variables según necesites
3. Inicia el servidor: `npm run dev`
4. Visita: `http://localhost:5173/equipo`

