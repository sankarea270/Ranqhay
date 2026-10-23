# Ranqhay — Sistema Web de Gestión de Ventas

Sistema web para pequeños negocios: punto de venta, inventario, clientes, caja y reportes.

## Stack
- Frontend: React + Vite + TypeScript, React Router, Zustand, Tailwind
- Backend: Node.js + Express + TypeScript, Prisma, Zod, JWT
- Base de datos: PostgreSQL en Supabase
- Despliegue: HostArmada

## Equipo
- José Manuel Meza — API REST
- Roni Qqueso — Frontend
- Elisabet Florez — Base de datos, reportes y pruebas

## Estructura
- frontend/ — aplicación React
- backend/ — API REST y Prisma
- diseno/ — diagrama entidad-relación

## Ramas
- main: versión estable (solo en cada hito)
- develop: integración del equipo
- Trabajo: chore/setup-<capa>, feature/RF-XX-<api|front>-<tema>, fix/<tema>
- Todo entra a develop por Pull Request revisado por otro integrante

## Instalación

### Backend
1. cd backend
2. npm install
3. Copiar .env.example a .env y completar DATABASE_URL y JWT_SECRET
4. npm run dev → http://localhost:3000/api/health

### Frontend
1. cd frontend
2. npm install
3. Copiar .env.example a .env
4. npm run dev → http://localhost:5173