const japaneseList = document.querySelector('_____');

const firstRow = document.createElement('__');
firstRow.textContent = 'あいうえお';
japaneseList.insertBefore(firstRow, japaneseList.firstChild);

const lastRow = document.createElement('__');
lastRow.textContent = 'たちつてと';
japaneseList.append(lastRow);