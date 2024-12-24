function mostrarCertificado(rutaImagen) {
    const ventanaCertificado = window.open("", "Certificado", "width=800,height=600");
    ventanaCertificado.document.write(`
        <html>
            <head>
                <title>Certificado</title>
            </head>
            <body style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 10;">
                <img src="${rutaImagen}" alt="Certificado" style="max-width: 200%; max-height: 100%;">
            </body>
        </html>
    `);
}
