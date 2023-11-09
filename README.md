# appscript-toolbox
Useful functions for appscript.

### Get the data from a row as a object where the column names are the fields
```js
function getRowDataAsObject(sheet, rowNumber){
    `
    Takes a sheet and a row number and returns an object with the header values as keys and the corresponding row data as values.

    Args:
        sheet (Sheet): The sheet to get the data from.
        rowNumber (int): The row number to get the data from.

    Returns:
        dict: A dictionary with the header values as keys and the corresponding row data as values.
    `
  const header = sheet.getRange(1, 1, 1, 
    sheet.getLastColumn()).getValues()[0]

  const rowData = sheet.getRange(rowNumber, 1, 1, 
    sheet.getLastColumn()).getValues()[0];

  const outputObject = {}
  for (let i = 0; i < header.length; i++) {
    outputObject[header[i]] = rowData[i]
  }
  return outputObject
}
```
