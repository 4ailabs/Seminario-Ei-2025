# 🚀 Deployment Guide - Vercel

## Despliegue en Vercel

### **1. Preparación del Proyecto**

El proyecto está listo para desplegar en Vercel con las siguientes características:
- ✅ **Vite** como build tool
- ✅ **PWA** capabilities
- ✅ **Service Worker** configurado
- ✅ **Responsive design** optimizado
- ✅ **Bilingual support** (ES/EN)
- ✅ **Chatbot** con Gemini AI

### **2. Pasos para Desplegar**

#### **Opción A: GitHub Integration (Recomendado)**
1. **Push a GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Conectar con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Sign in con GitHub
   - Click "New Project"
   - Importa tu repositorio
   - Vercel detectará automáticamente que es un proyecto Vite

3. **Configuración Automática:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

#### **Opción B: Vercel CLI**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

### **3. Configuración de Variables de Entorno**

#### **En Vercel Dashboard:**
1. Ve a tu proyecto en Vercel
2. **Settings** > **Environment Variables**
3. Añade las siguientes variables:

| Variable | Valor | Entornos |
|----------|-------|----------|
| `VITE_GEMINI_API_KEY` | `tu_api_key_de_gemini` | Production, Preview, Development |

#### **Obtener API Key de Gemini:**
1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una nueva API key
3. Copia la clave generada
4. Añádela en Vercel como variable de entorno

### **4. Configuración del Chatbot**

#### **Activar API Real:**
Después del despliegue, edita `components/ChatWindow.tsx`:

```typescript
// Cambiar esta línea:
const response = await geminiService.sendMessageMock(inputMessage, language);

// Por esta:
const response = await geminiService.sendMessage(inputMessage, language);
```

### **5. Configuración PWA**

El proyecto incluye:
- ✅ **manifest.json** - Metadatos de la app
- ✅ **sw.js** - Service Worker para cache
- ✅ **Iconos** - Para instalación en dispositivos

**Nota:** Asegúrate de tener los iconos `icon-192x192.png` e `icon-512x512.png` en la carpeta `public/`

### **6. Dominio Personalizado (Opcional)**

1. En Vercel Dashboard > **Settings** > **Domains**
2. Añade tu dominio personalizado
3. Configura los DNS records según las instrucciones

### **7. Monitoreo y Analytics**

Vercel incluye:
- **Analytics** - Métricas de rendimiento
- **Speed Insights** - Core Web Vitals
- **Function Logs** - Para debugging

### **8. Comandos Útiles**

```bash
# Build local
npm run build

# Preview build
npm run preview

# Deploy a Vercel
vercel

# Ver logs
vercel logs

# Redeploy
vercel --prod
```

### **9. Optimizaciones Incluidas**

- ✅ **Code Splitting** automático
- ✅ **Tree Shaking** para bundles más pequeños
- ✅ **Image Optimization** con Vercel
- ✅ **Edge Functions** ready
- ✅ **CDN** global de Vercel
- ✅ **HTTPS** automático
- ✅ **Compression** (Gzip/Brotli)

### **10. Troubleshooting**

#### **Build Fails:**
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs en Vercel Dashboard

#### **Chatbot no funciona:**
- Verifica que `VITE_GEMINI_API_KEY` esté configurada
- Asegúrate de activar la API real (no mock)

#### **PWA no se instala:**
- Verifica que `manifest.json` esté accesible
- Revisa que los iconos existan en `public/`

¡Tu aplicación estará lista para producción en Vercel! 🎉
