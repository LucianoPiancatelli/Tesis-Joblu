Joblu 🚀
Optimiza tu búsqueda laboral con Inteligencia Artificial
Joblu es una plataforma integral diseñada para ayudar a los profesionales a potenciar su carrera. Combina herramientas de creación de CVs optimizados, un buscador de empleos avanzado y una comunidad colaborativa para compartir conocimientos.

✨ Características Principales
Constructor de CV Inteligente: Crea currículums profesionales utilizando plantillas optimizadas para sistemas ATS (Applicant Tracking Systems).

Buscador de Empleos: Accede a una base de datos actualizada de vacantes laborales filtradas según tu perfil.

Comunidad Joblu: Un espacio para que los usuarios interactúen, compartan consejos de entrevistas, recursos y experiencias sobre empresas.

IA de Asistencia: Integración de servicios de inteligencia artificial para mejorar la redacción de perfiles y el análisis de vacantes.

Gestión de Perfil: Panel de control personalizado para gestionar tus aplicaciones y documentos.

🛠️ Tecnologías Utilizadas
El proyecto utiliza un stack moderno de desarrollo web (MERN):

Frontend: React.js con Vite, React Router para la navegación y CSS3 para el diseño responsivo.

Backend: Node.js y Express.js para la API RESTful.

Base de Datos: MongoDB (gestionada a través de Mongoose).

Autenticación: JSON Web Tokens (JWT) para sesiones seguras.

Servicios Externos: Integración con servicios de IA y procesamiento de PDFs.

🚀 Instalación y Configuración
Sigue estos pasos para ejecutar el proyecto localmente:

Requisitos previos
Node.js (v16 o superior)

MongoDB instalado o una URI de MongoDB Atlas

1. Clonar el repositorio
Bash
git clone https://github.com/tu-usuario/tesis-joblu.git
cd tesis-joblu
2. Configuración del Backend
Bash
cd backend
npm install
Crea un archivo .env basado en .env.example.

Configura tu MONGODB_URI, JWT_SECRET y las claves de servicios de IA.

Inicia el servidor:

Bash
npm run dev
3. Configuración del Frontend
Bash
cd ../frontend
npm install
npm run dev
La aplicación estará disponible en http://localhost:5173.

📂 Estructura del Proyecto
/backend: API, modelos de datos, controladores y servicios de lógica de negocio.

/frontend: Interfaz de usuario, componentes de React y estilos.

/frontend/src/pages: Vistas principales como Home, CV Builder, Jobs y Community.

📄 Licencia
Este proyecto fue desarrollado por Luciano Piancatelli como parte de su tesis profesional. Todos los derechos reservados.
