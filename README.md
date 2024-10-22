# Taskify - Trello Clone

Este repositorio contiene el código fuente de Taskify, un clon de Trello desarrollado utilizando **Next.js 14**, **Server Actions**, **Prisma**, **Stripe**, **Tailwind CSS**, y **MySQL**. Taskify permite la creación y gestión de tableros, listas y tarjetas de manera eficiente, con integración de organizaciones, registros de actividad, roles de usuario, y suscripciones a través de Stripe.

Puedes acceder a la aplicación desplegada aquí: [Taskify - Trello Clone](https://trello-nextjs-lac.vercel.app)

## Características clave
- **Autenticación con Clerk**: Inicio de sesión seguro y fácil.
- **Organizaciones/Espacios de trabajo**: Crea y gestiona múltiples espacios de trabajo para organizar tus proyectos.
- **Tableros**: Creación y personalización de tableros con imágenes aleatorias de Unsplash.
- **Listas y Tarjetas**: Crea, renombra, reordena y elimina listas y tarjetas mediante drag & drop.
- **Registro de Actividad**: Monitorea las actividades dentro de las organizaciones, tableros y tarjetas.
- **Suscripciones con Stripe**: Los usuarios pueden suscribirse para desbloquear la creación ilimitada de tableros.
- **Despliegue en Vercel**: Implementación rápida y eficiente con Next.js y Vercel.

## Tecnologías y dependencias principales
- **Next.js 14**: El framework de React utilizado para construir el frontend y backend de esta aplicación, utilizando funciones de renderizado del lado del servidor y Server Actions.
- **Prisma ORM**: Prisma se utiliza para interactuar con la base de datos MySQL, proporcionando una manera eficiente de realizar consultas y gestionar los datos.
- **Stripe**: Integración con Stripe para manejar las suscripciones y pagos dentro de la aplicación.
- **MySQL**: Base de datos relacional que almacena toda la información relacionada con usuarios, organizaciones, tableros, listas y tarjetas.
- **Tailwind CSS**: Framework de CSS utilizado para crear una interfaz de usuario moderna y responsive.
- **Clerk**: Clerk se encarga de la autenticación y gestión de usuarios, proporcionando una experiencia segura.
- **Unsplash API**: Se utiliza para proporcionar imágenes de portada aleatorias y visualmente atractivas para los tableros.
- **Zustand**: Se utiliza para la gestión de estado en la aplicación.
- **Zod**: Biblioteca de validación y esquematización de datos para garantizar la integridad de los datos en formularios y otras operaciones.

## Lista completa de dependencias

```json
  "dependencies": {
    "@clerk/nextjs": "^5.6.2",
    "@hello-pangea/dnd": "^17.0.0",
    "@prisma/client": "^5.20.0",
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "@tanstack/react-query": "^5.59.13",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "lodash": "^4.17.21",
    "lucide-react": "^0.446.0",
    "next": "14.2.13",
    "react": "^18",
    "react-dom": "^18",
    "sonner": "^1.5.0",
    "stripe": "^17.2.1",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "unsplash-js": "^7.0.19",
    "usehooks-ts": "^3.1.0",
    "zod": "^3.23.8",
    "zustand": "^5.0.0-rc.2"
  }
```


## Configuración e instalación

### Clonar el repositorio

1. Clona este repositorio en tu máquina local:
   
```sh
git clone "https://github.com/JairGuzman1810/trello-nextjs"
```
2. Clona este repositorio en tu máquina local:
   
```sh
cd trello-nextjs
```

### Instalar dependencias

1. Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```sh
npm install
```

2. O si prefieres usar yarn:

```sh
yarn install
```

## Configuración de las variables de entorno
1. Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno (reemplaza con tus propios valores):
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_tu_clave_publica
CLERK_SECRET_KEY=sk_test_tu_clave_secreta
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/tu_base_de_datos"
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=tu_clave_de_acceso_unsplash
STRIPE_API_KEY=sk_test_tu_clave_secreta_stripe
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=whsec_tu_secreto_webhook
```

### Migraciones de la base de datos

1. Ejecuta las migraciones para crear las tablas necesarias en la base de datos:

```sh
npx prisma migrate dev
```

### Ejecutar la aplicación

1. Una vez que hayas instalado todas las dependencias, puedes ejecutar la aplicación utilizando el siguiente comando:

```sh
npm run dev
```

## Capturas de pantalla de la aplicación

<div style="display:flex; flex-wrap:wrap; justify-content:space-between;">
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-1.jpeg" alt="Captura de pantalla 1" width="180"/>
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-2.jpeg" alt="Captura de pantalla 2" width="180"/>
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-3.jpeg" alt="Captura de pantalla 3" width="180"/>
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-4.jpeg" alt="Captura de pantalla 4" width="180"/>
</div>
<div style="display:flex; flex-wrap:wrap; justify-content:space-between;">
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-5.jpeg" alt="Captura de pantalla 5" width="180"/>
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-6.jpeg" alt="Captura de pantalla 6" width="180"/>
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-7.jpeg" alt="Captura de pantalla 7" width="180"/>
    <img src="https://github.com/JairGuzman1810/trello-nextjs/blob/master/resources/Web-8.jpeg" alt="Captura de pantalla 8" width="180"/>
</div>


