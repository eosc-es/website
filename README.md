# website

Repositorio para la página del nodo EOSC-ES: https://eosc-es.github.io/website/index.html

Creado por @jgonzale y Claude.

## Contenido

Página estática (sin dependencias ni compilación) que muestra el estado de desarrollo del Nodo español de la EOSC Federation, en español e inglés.

## Publicar en GitHub Pages

Repositorio: `eosc-es/website`. En *Settings → Pages*, *Deploy from a branch*, rama `main`, carpeta `/ (root)`. La página queda en `https://eosc-es.github.io/website/` (o en el dominio propio, ver abajo).

Ficheros: `index.html` (estado del Nodo), `votacion.html` (votación del caso de uso ejemplar), `data.js` (contenido), `assets/style.css` (estilos compartidos), `assets/` (logo y fuentes), `docs/` (PDF de los entregables del proyecto preparatorio) y `.nojekyll`.

## Actualizar el estado

Solo hay que editar `data.js` (se puede hacer desde la interfaz web de GitHub):

- `meta.updated`: fecha de la última actualización (AAAA-MM-DD).
- `status` de cada elemento: `done`, `progress`, `review`, `planned` o `pending`.
- `phases.current`: fase activa del camino hacia Nodo (0 = proyecto preparatorio … 4 = Nodo de la Federación).
- `roles`: al designar a una persona, rellenar `name` y cambiar `status` a `done`; el contador «roles designados» se actualiza solo. Lo mismo con `owner` en cada Federating Capability.
- `deliverables[].pdf`: ruta al PDF dentro de `docs/`; si se rellena, aparece el enlace «PDF» junto al entregable.
- `vote.open`: `true` muestra el aviso y el enlace a la votación; `false` los oculta y `votacion.html` indica que está cerrada. `vote.url` es la URL `/exec` de la aplicación web de Apps Script.
- `meta.contact` y `meta.repo`: si se rellenan, aparecen en el pie.

Los contadores del resumen (entregables cerrados, criterios cumplidos, hitos completados) se calculan solos a partir de los estados.

El idioma se elige con el selector ES/EN, se recuerda en el navegador y puede forzarse con `?lang=en` o `?lang=es` en la URL.

## Fuentes del contenido

Project Charter R1 con reducción de entregables e hitos (`..._R1.D_and_M_reduction.docx`: secciones 3, 4, 5, 7, 9 y 10), feedback de stage 2 de EOSC Gravity y calendario de reuniones del proyecto EOSC-ES-Prep, actualizado el 23/10/2026 con el acta del encuentro tripartito del 2/10/2026.

## Identidad visual

Tipografías y colores del *Corporate Design Manual* de la EOSC Association (v.1, 2022-09): Quicksand Light para titulares, Roboto Light para texto (#646363), Lively Green #008691 como color principal, Mild Pink #ff5b7f como color de señal, Light Grey #e4e4e3 y Warm Black #040204. Las fuentes se sirven desde `assets/fonts/` (sin llamadas a Google Fonts); sus licencias están en la misma carpeta. El logotipo es `assets/eosc-es-prep-logo.png`, recortado del original EOSC-ES-Prep.

## Votación

`votacion.html` incrusta en un `iframe` la aplicación web de Google Apps Script (`[EOSC-ES-Prep] Votación Casos de Uso`). Funciona porque `doGet()` usa `setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)`; si se crea una implementación nueva con otra URL, hay que actualizar `vote.url` en `data.js`. Debajo del marco hay un enlace para abrir el formulario en una pestaña nueva por si el navegador bloquea el contenido incrustado.

## Dominio propio (eosc.es)

1. Verificar el dominio en la organización: *eosc-es (organización) → Settings → Pages → Add a domain*, y crear en el DNS de eosc.es el registro TXT que indique GitHub (`_github-pages-challenge-eosc-es.eosc.es`).
2. En el DNS de eosc.es: registros A del dominio raíz a 185.199.108.153, 185.199.109.153, 185.199.110.153 y 185.199.111.153 (opcional AAAA a 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153 y 2606:50c0:8003::153), y `www` como CNAME a `eosc-es.github.io`.
3. En el repositorio: *Settings → Pages → Custom domain* = `eosc.es`. GitHub crea el fichero `CNAME` en la rama `main`. Activar *Enforce HTTPS* cuando esté disponible (puede tardar hasta 24 h).

Todas las rutas son relativas, así que la página funciona igual en `eosc-es.github.io/website/` y en la raíz de `eosc.es`.
