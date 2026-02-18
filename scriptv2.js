WA.onInit().then(() => {
  console.log("Script ok / WA pronto");

  WA.room.area.onEnter("zona_reuniao").subscribe(() => {
    console.log("ENTROU na area");
    WA.room.showLayer("salas/dark_overlay");
  });

  WA.room.area.onLeave("zona_reuniao").subscribe(() => {
    console.log("SAIU da area");
    WA.room.hideLayer("salas/dark_overlay");
  });
});
