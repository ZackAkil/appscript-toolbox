function currentRowNumber(){
  const range = SpreadsheetApp.getActiveRange();
  return range.getRow();
}
