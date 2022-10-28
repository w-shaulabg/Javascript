//domを取得して、エレメントを作成、また要素を追加するサンプルコードです。

//DOMの取得
const japaneseList = document.querySelector('.japanese-list');
//liのDOMを新規作成
const firstRow = document.createElement('li');
//作成したli要素に’あいうえお’を追加
firstRow.textContent = 'あいうえお';
//japaneseListの最初の要素にfirstRowを追加
japaneseList.insertBefore(firstRow, japaneseList.firstChild);
//liのDOMを新規作成
const lastRow = document.createElement('li');
//作成したli要素に’たちつてと’を追加
lastRow.textContent = 'たちつてと';
//japaneseList最後の要素にlastRowを追加
japaneseList.append(lastRow);
