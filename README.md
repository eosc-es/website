# website
Repositorio para la página del nodo EOSC-ES: https://eosc-es.github.io/website/index.html

Creado por @jgonzale y Claude.

## Actualizar el estado

Editar `data.js`:

- `meta.updated`: fecha de la última actualización (AAAA-MM-DD).
- `status` de cada elemento: `done`, `progress`, `review`, `planned` o `pending`.
- `phases.current`: fase activa del camino hacia Nodo (0 = proyecto preparatorio … 4 = Nodo de la Federación).
- `roles`: al designar a una persona, rellenar `name` y cambiar `status` a `done`; el contador «roles designados» se actualiza solo. Lo mismo con `owner` en cada Federating Capability.
- `meta.contact` y `meta.repo`: si se rellenan, aparecen en el pie.

Los contadores del resumen (entregables cerrados, criterios cumplidos, hitos completados) se calculan solos a partir de los estados.

El idioma se elige con el selector ES/EN, se recuerda en el navegador y puede forzarse con `?lang=en` o `?lang=es` en la URL.

## Fuentes del contenido

Project Charter R1 con reducción de entregables e hitos (`..._R1.D_and_M_reduction.docx`: secciones 3, 4, 5, 7, 9 y 10), feedback de stage 2 de EOSC Gravity y calendario de reuniones del proyecto EOSC-ES-Prep, a 25/09/2026.

## Identidad visual

Tipografías y colores del *Corporate Design Manual* de la EOSC Association (v.1, 2022-09): Quicksand Light para titulares, Roboto Light para texto (#646363), Lively Green #008691 como color principal, Mild Pink #ff5b7f como color de señal, Light Grey #e4e4e3 y Warm Black #040204. Las fuentes se sirven desde `assets/fonts/` (sin llamadas a Google Fonts); sus licencias están en la misma carpeta. El logotipo es `assets/eosc-es-prep-logo.png`, recortado del original EOSC-ES-Prep.