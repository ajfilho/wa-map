console.log("Script versão 2.0 carregado!");

// Quando o avatar PISAR no quadrado invisível
WA.room.onEnterZone('zona_reuniao', () => {
    console.log("PISOU NO TAPETE! Apagando as luzes...");
    // Adicionamos a pasta 'Sala 01' antes do nome da camada
    WA.room.showLayer('Sala 01/dark_overlay');
});

// Quando o avatar SAIR do quadrado invisível
WA.room.onLeaveZone('zona_reuniao', () => {
    console.log("SAIU DO TAPETE! Acendendo as luzes...");
    WA.room.hideLayer('Sala 01/dark_overlay');
});
