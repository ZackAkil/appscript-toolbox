function onOpen(e) {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Do a thing ✨')
    .addItem('run on row ▶️', 'buttonClicked')
    .addToUi();
}

function buttonClicked(){
  const ui = SpreadsheetApp.getUi();
  ui.alert("hello")
}
