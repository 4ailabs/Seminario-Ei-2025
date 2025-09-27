# 🤖 Chatbot Setup - OpenAI

## Configuración del Chatbot

El chatbot está implementado y listo para usar. Actualmente funciona con respuestas mock para desarrollo, pero puedes conectarlo a la API real de OpenAI.

### 🔧 Configuración de la API Key

#### **Para Desarrollo Local:**
1. **Obtén tu API Key de OpenAI:**
   - Ve a [OpenAI Platform](https://platform.openai.com/api-keys)
   - Crea una nueva API key
   - Copia la clave generada

2. **Crea archivo `.env.local`:**
   ```bash
   VITE_OPENAI_API_KEY=tu_api_key_aqui
   ```

#### **Para Vercel (Producción):**
1. **En el Dashboard de Vercel:**
   - Ve a tu proyecto
   - Settings > Environment Variables
   - Add New Variable:
     - **Name:** `VITE_OPENAI_API_KEY`
     - **Value:** `tu_api_key_aqui`
     - **Environment:** Production, Preview, Development

2. **Redeploy:**
   - Después de añadir la variable, haz redeploy del proyecto

#### **Activar API Real:**
- En el archivo `components/ChatWindow.tsx`
- Cambia la línea 47 de:
  ```typescript
  const response = await openaiService.sendMessageMock(inputMessage, language);
  ```
- A:
  ```typescript
  const response = await openaiService.sendMessage(inputMessage, language);
  ```

### 🚀 Características Implementadas

#### ✅ **Funcionalidades Completas:**
- **Botón flotante** con animación pulse
- **Ventana de chat** responsive y moderna
- **Soporte bilingüe** (Español/Inglés)
- **Preguntas rápidas** predefinidas
- **Respuestas inteligentes** sobre el seminario
- **Indicador de carga** durante respuestas
- **Diseño consistente** con el resto de la app

#### 🎯 **Información que puede proporcionar:**
- **Precios** (Early Bird y Regular)
- **Fechas** del seminario
- **Ubicación** (Ciudad de México)
- **Modalidades** (Presencial y Online)
- **Qué incluye** el seminario
- **Contacto** vía WhatsApp

#### 🎨 **Diseño y UX:**
- **Botón flotante** en la esquina inferior izquierda
- **Tooltip** con "¿Tienes preguntas?"
- **Animación pulse** para llamar la atención
- **Ventana modal** con diseño moderno
- **Mensajes diferenciados** (usuario vs bot)
- **Scroll automático** a nuevos mensajes
- **Preguntas rápidas** para facilitar la interacción

### 🔄 Modo de Desarrollo vs Producción

#### **Modo Desarrollo (Actual):**
- Usa respuestas mock predefinidas
- No requiere API key
- Respuestas instantáneas
- Perfecto para testing

#### **Modo Producción:**
- Conectado a OpenAI real
- Requiere API key válida
- Respuestas generadas por IA
- Más inteligente y contextual

### 📱 Responsive Design

El chatbot está optimizado para:
- **Desktop**: Ventana de chat completa
- **Tablet**: Ventana adaptada
- **Mobile**: Ventana full-screen optimizada

### 🌐 Soporte Bilingüe

- **Español**: Interfaz y respuestas en español
- **Inglés**: Interfaz y respuestas en inglés
- **Detección automática**: Usa el idioma seleccionado en la app
- **Contexto específico**: Respuestas adaptadas al idioma

### 🛠️ Personalización

Puedes personalizar:
- **Prompts del sistema** en `openaiService.ts`
- **Preguntas rápidas** en `ChatWindow.tsx`
- **Estilos** usando las clases de Tailwind
- **Comportamiento** modificando la lógica de respuestas

### 🔒 Seguridad

- **API Key**: Mantén tu clave segura
- **Validación**: El servicio valida respuestas
- **Fallback**: Respuestas de error amigables
- **Rate Limiting**: OpenAI maneja los límites automáticamente

¡El chatbot está listo para mejorar la experiencia de tus usuarios! 🎉
