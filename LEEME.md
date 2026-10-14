# Viajes con Alquimia — proyecto completo

Este paquete contiene el código original de la versión 3 de la web, sus imágenes y la configuración necesaria para instalarla, ejecutarla y continuar editándola.

Web de referencia: https://viajes-con-alquimia.aleledieguez70.chatgpt.site/

## Cómo abrirla en tu computadora

1. Extraé todo el ZIP en una carpeta. No ejecutes los archivos desde dentro del ZIP.
2. Instalá Node.js 24, o una versión compatible de Node.js igual o superior a 22.13.0.
3. Abrí una terminal dentro de la carpeta `viajes-con-alquimia`, donde está `package.json`.
4. Instalá las dependencias con este comando; la primera instalación necesita Internet:

```sh
npx --yes pnpm@11.25.0 install --frozen-lockfile
```

5. Iniciá la web:

```sh
npm run dev
```

6. Abrí http://localhost:5173 en el navegador. Si la terminal muestra otro puerto, usá la dirección que indique.

Dejá la terminal abierta mientras trabajás. Los cambios en el código se reflejan en el navegador. Para detener el servidor, presioná `Ctrl+C`.

En Windows podés usar la terminal Símbolo del sistema (CMD). No hace falta Bash para estos comandos. También podés abrir la carpeta completa en Visual Studio Code y usar su terminal integrada.

Esta web es una aplicación React/TypeScript: se ejecuta con los comandos anteriores y no abriendo un archivo HTML con doble clic.

## Dónde editar cada cosa

| Archivo o carpeta | Contenido |
| --- | --- |
| `app/page.tsx` | Textos, experiencias, secciones, filtros, ventanas de detalle y enlaces de contacto. |
| `app/globals.css` | Colores, tipografías, tamaños, espacios y adaptación a celulares. |
| `app/layout.tsx` | Idioma, título, descripción y metadatos. |
| `public/images/` | Logo, retrato de Alejandra y dos fotografías de paisaje conservadas en el proyecto. |
| `public/favicon.svg` | Ícono de la pestaña del navegador. |
| `components/`, `hooks/`, `lib/` | Componentes y utilidades del proyecto. |
| `package.json` | Dependencias y comandos. |
| `pnpm-lock.yaml`, `pnpm-workspace.yaml` | Versiones y configuración de instalación. |
| `vite.config.ts`, `build/`, `scripts/` | Configuración de ejecución y compilación con Vinext/Vite. |
| `.openai/hosting.json` | Identidad y configuración del proyecto original en Sites. |
| `README.md` | Documentación técnica original de la plantilla, en inglés. |

Las imágenes están incluidas como archivos locales. La tipografía usa fuentes del sistema con alternativas; no requiere descargar archivos de Google Fonts. Su apariencia puede variar según las fuentes instaladas en cada equipo.

## Generar y ejecutar la versión compilada

Después de instalar las dependencias:

```sh
npm run build
npm start
```

La compilación genera la carpeta `dist/`. Para ver esa versión, usá la dirección local que muestre la terminal. `npm start` ejecuta el Worker localmente mediante Wrangler y no publica la web.

Si cambiás el código, ejecutá otra vez `npm run build` para actualizar esa versión. Para trabajar día a día, usá `npm run dev`.

## Datos de esta entrega

- Fecha de exportación: 14 de octubre de 2026.
- Versión de Sites: 3, publicada correctamente el 6 de octubre de 2026.
- Commit original: `de8d55ec09dd9684a07bf31fd1c8b58db91f67d3`.
- Proyecto: `appgprj_6abfe521cdb48191a235efb5d2a155dd`.
- Código fuente: repositorio Git administrado por Sites. El repositorio asociado no está alojado en GitHub.
- Tecnologías: React, TypeScript, Vinext/Vite, Tailwind CSS y componentes de interfaz incluidos en el proyecto.
- Verificación realizada: instalación de las dependencias fijadas y compilación completa exitosa en Linux con Node.js 24.19.0. No se repitieron pruebas visuales o de interacción en navegador para esta exportación.

Se conservaron los 119 archivos versionados del proyecto sin modificar su contenido. Este archivo `LEEME.md` se agregó para acompañar la entrega. Se incluyen todos los recursos visuales presentes en el repositorio, aunque algunas fotos no se muestran en el diseño actual.

No se incluyen `node_modules`, cachés, historial `.git`, credenciales ni archivos temporales. Las dependencias se reconstruyen con el comando de instalación y el archivo de versiones incluido. La carpeta `dist/` se genera al compilar.

La página actual no utiliza una base de datos, almacenamiento remoto ni claves API. Los botones de contacto abren WhatsApp, Instagram o el correo; esos servicios necesitan conexión a Internet. El proyecto conserva archivos de ejemplo de la plantilla, pero no son necesarios para la página actual.

## Continuar trabajando y publicar cambios

Podés entregar este ZIP a una persona desarrolladora o abrirlo en tu editor. Los cambios locales no actualizan automáticamente la web publicada.

El proyecto conserva la configuración original para Sites/Cloudflare Workers. Para otro servicio de alojamiento puede ser necesario adaptar el proceso de compilación y publicación; subir únicamente `app/page.tsx` a un hosting no ejecuta la aplicación.

Si querés guardarlo en GitHub, podés crear un repositorio propio e incorporar esta carpeta. La entrega no crea un repositorio ni modifica la web existente.
