# stremio-addon-es

Archivos listos para desplegar en Render. Pasos:

1. Crear un nuevo repositorio en GitHub llamado `stremio-addon-es`.
2. Subir estos archivos (`manifest.json`, `server.js`, `package.json`, `README.md`).
3. Ir a https://render.com → New → Web Service → conectar con tu repo.
   - Build Command: (puede quedar vacío)
   - Start Command: `npm start`
4. Deploy. Render te dará una URL del tipo `https://stremio-addon-es.onrender.com`.
5. En Stremio: `Complementos` → `Instalar desde URL` → pegar `https://TU_URL/manifest.json` (ej: `https://stremio-addon-es.onrender.com/manifest.json`).

Importante: este add-on sirve **solo el manifest**. Si el add-on original requiere endpoints `/catalog`, `/meta` y `/stream` para funcionar con contenido real, entonces Stremio seguirá requiriendo esas rutas y deberás implementar la lógica correspondiente o replicar las rutas del add-on original.
