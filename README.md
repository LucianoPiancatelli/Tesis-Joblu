# Joblu 🚀 | AI-Powered CV Builder & Career Hub

**Joblu** es una plataforma integral (Full Stack) diseñada para optimizar la búsqueda laboral mediante Inteligencia Artificial. Permite a los usuarios crear currículums optimizados para sistemas ATS, gestionar vacantes y participar en una comunidad profesional.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React (Vite) con arquitectura de componentes reutilizables y manejo de estado global.
* **Backend:** Node.js y Express.js, implementando una API RESTful escalable.
* **Base de Datos:** MongoDB con Mongoose para el modelado de datos.
* **IA:** Integración con la API de OpenAI (GPT-4o-mini) para la optimización de secciones de CV y análisis de perfiles.
* **Seguridad:** Autenticación robusta mediante JSON Web Tokens (JWT) y encriptación de contraseñas con bcryptjs.
* **PDF:** Generación de documentos profesionales utilizando Puppeteer en el servidor.

---

## ✨ Características Principales

* **Constructor de CV Inteligente:** Los usuarios pueden generar o mejorar sus experiencias y habilidades utilizando prompts de IA específicos para RRHH.
* **Modo Demo para Reclutadores:** Acceso instantáneo con un solo clic desde la pantalla de login para explorar todas las funcionalidades sin necesidad de registro manual.
* **Optimización ATS:** Plantillas diseñadas para ser legibles por los sistemas automáticos de filtrado de candidatos.
* **Comunidad Colaborativa:** Sistema de foros para compartir consejos de entrevistas y experiencias en empresas.
* **Buscador de Empleos:** Interfaz dinámica para filtrar y guardar vacantes de interés.

---

## 🚀 Instalación y Uso Local

1. **Clonar repositorio:**
   ```bash
   git clone [https://github.com/lucianopiancatelli/tesis-joblu.git](https://github.com/lucianopiancatelli/tesis-joblu.git)

   Configurar Backend:

Entrar en /backend, ejecutar npm install.

Crear un archivo .env con: MONGODB_URI, JWT_SECRET, OPENAI_API_KEY.

Iniciar con npm run dev.

Configurar Frontend:

Entrar en /frontend, ejecutar npm install.

Configurar API_BASE_URL en src/config/api.js.

Iniciar con npm run dev.







Gemini ha dicho
Hola, Luciano. Entiendo perfectamente el desafío. Como desarrollador con años en la industria, te confirmo que la "fricción de registro" es el enemigo número uno de los portfolios. Un reclutador técnico dedica pocos minutos a cada perfil, y si tiene que crear una cuenta, probablemente cerrará la pestaña.

Aquí tienes las dos herramientas que me pediste para profesionalizar tu proyecto Joblu y asegurar que nadie se pierda tu integración con OpenAI.

1) Prompt para Cursor: Implementación del "Modo Demo"
Copia y pega este prompt en el chat de Cursor (asegúrate de tener abiertos los archivos backend/controllers/authController.js, backend/routes/authRoutes.js, frontend/src/pages/Login.jsx y backend/server.js).

Prompt:
"Quiero implementar un 'Modo Demo' para que los reclutadores accedan a Joblu con un solo clic sin registrarse. Realiza los siguientes cambios:

Backend (Controller): En authController.js, crea una función demoLogin. Esta debe buscar un usuario con el email 'invitado@joblu.com'. Si no existe, debe crearlo con datos de prueba básicos. Luego, debe generar y devolver un JWT de la misma forma que el login normal.

Backend (Routes): En authRoutes.js, añade una ruta POST /demo-login que apunte a la función creada.

Frontend (Login Page): En Login.jsx, añade un botón debajo del formulario que diga 'Acceder como Invitado'. Al hacer clic, debe realizar un fetch a la nueva ruta /api/auth/demo-login, recibir el token y el usuario, y ejecutar onLogin(data.user, data.token, '/') para redirigir al inicio.

Estilos: Asegúrate de que el botón de invitado sea visualmente distinto (por ejemplo, con un borde o un color secundario) para que resalte como una opción de acceso rápido."

2) README.md Profesional para GitHub
Este README está diseñado para "vender" tu capacidad técnica, resaltando el uso del Stack MERN y la IA.

Markdown
# Joblu 🚀 | AI-Powered CV Builder & Career Hub

**Joblu** es una plataforma integral (Full Stack) diseñada para optimizar la búsqueda laboral mediante Inteligencia Artificial. Permite a los usuarios crear currículums optimizados para sistemas ATS, gestionar vacantes y participar en una comunidad profesional.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React (Vite) con arquitectura de componentes reutilizables y manejo de estado global.
* **Backend:** Node.js y Express.js, implementando una API RESTful escalable.
* **Base de Datos:** MongoDB con Mongoose para el modelado de datos.
* **IA:** Integración con la API de OpenAI (GPT-4o-mini) para la optimización de secciones de CV y análisis de perfiles.
* **Seguridad:** Autenticación robusta mediante JSON Web Tokens (JWT) y encriptación de contraseñas con bcryptjs.
* **PDF:** Generación de documentos profesionales utilizando Puppeteer en el servidor.

---

## ✨ Características Principales

* **Constructor de CV Inteligente:** Los usuarios pueden generar o mejorar sus experiencias y habilidades utilizando prompts de IA específicos para RRHH.
* **Modo Demo para Reclutadores:** Acceso instantáneo con un solo clic desde la pantalla de login para explorar todas las funcionalidades sin necesidad de registro manual.
* **Optimización ATS:** Plantillas diseñadas para ser legibles por los sistemas automáticos de filtrado de candidatos.
* **Comunidad Colaborativa:** Sistema de foros para compartir consejos de entrevistas y experiencias en empresas.
* **Buscador de Empleos:** Interfaz dinámica para filtrar y guardar vacantes de interés.

---

## 🚀 Instalación y Uso Local

1. **Clonar repositorio:**
   ```bash
   git clone [https://github.com/lucianopiancatelli/tesis-joblu.git](https://github.com/lucianopiancatelli/tesis-joblu.git)
Configurar Backend:

Entrar en /backend, ejecutar npm install.

Crear un archivo .env con: MONGODB_URI, JWT_SECRET, OPENAI_API_KEY.

Iniciar con npm run dev.

Configurar Frontend:

Entrar en /frontend, ejecutar npm install.

Configurar API_BASE_URL en src/config/api.js.

Iniciar con npm run dev.

👨‍💻 Sobre el Proyecto
Este proyecto es el resultado de mi tesis profesional como Diseñador y Desarrollador Web Full Stack. Representa un ecosistema completo que resuelve la desconexión entre el talento y las herramientas modernas de IA.

Desarrollado por Luciano Piancatelli.
