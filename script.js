function launchMiniBot(name) {
    const iframe = document.getElementById('miniBotFrame');
    iframe.src = `mini/${name}.html`;
}
