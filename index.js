const { create } = require('@open-wa/wa-automate');

create({
  headless: true,
  executablePath: 'chromium-browser', // Ruta típica para entornos ligeros
  useChrome: false,
  qrTimeout: 0,
  authTimeout: 0,
  killProcessOnBrowserClose: true,
  multiDevice: true
}).then(client => start(client)).catch(err => console.log("❌ Error al iniciar el bot:", err));

function start(client) {
  console.log("✅ Bot iniciado. Esperando QR...");
}