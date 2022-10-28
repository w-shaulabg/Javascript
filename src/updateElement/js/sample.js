//domを取得して、エレメントを更新するサンプルコードです。
//「今日の日付」と「天気」を変更しています

//DOMの取得
const today = document.querySelector('.today');
//本日の日付を取得
const nowDate = new Date();
//nowDateを上書き
today.innerHTML = `今日は${nowDate.getMonth() + 1}月${nowDate.getDate()}日`;
//本日の天気を取得
const weather = document.querySelector('.weather');
//weatherを上書き
weather.innerHTML = '天気は雨です';

