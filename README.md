# Microservicio de Productos

Un microservicio profesional para la gestión de productos en una arquitectura distribuida.

## Descripción General

Este microservicio es responsable de manejar todas las operaciones relacionadas con productos, incluyendo creación, consulta, actualización y eliminación de productos. Está diseñado para ser escalable, mantenible y sigue las mejores prácticas para arquitecturas de microservicios.

## Características

- Operaciones CRUD completas para productos
- Endpoints API RESTful
- Persistencia de datos con Prisma ORM
- Validación y manejo de errores
- Arquitectura escalable

## Stack Tecnológico

- Node.js
- NestJS
- Prisma ORM
- SQLite
- Soporte para Docker

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Git

## Configuración de Desarrollo

# Microservicio de Productos

## Pasos Rápidos para Iniciar el Proyecto

````bash
# 1. Clonar el repositorio
git clone https://github.com/tu-organizacion/microservicio-productos.git
cd microservicio-productos

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env basado en env.template
cp .env.template .env

# 4. Ejecutar migración de Prisma
npx prisma migrate dev

# 5. Ejecutar el proyecto en modo desarrollo
npm run start:dev

```bash
git clone https://github.com/tu-organizacion/microservicio-productos.git
cd microservicio-productos
````
