console.log("Script da Bolha de Áudio carregado!");

// Quando o avatar PISAR no quadrado invisível
WA.room.onEnterZone('zona_reuniao', () => {
    // 1. Mostra a tela escura no resto do mapa
    WA.room.showLayer('dark_overlay');
    // 2. Trava a câmera na bolha (opcional, dá um efeito cinematográfico!)
    // WA.camera.followPlayer(false); 
});

// Quando o avatar SAIR do quadrado invisível
WA.room.onLeaveZone('zona_reuniao', () => {
    // 1. Esconde a tela escura (volta tudo ao normal)
    WA.room.hideLayer('dark_overlay');
});