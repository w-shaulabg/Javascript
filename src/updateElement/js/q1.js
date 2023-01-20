//domを更新して今日の日付と天気を正しく変更しよう！！
const today = document.querySelector('.today');

const nowDate = new Date();
today.innerHTML = `今日は${nowDate.getMonth() + 1}月${nowDate.getDate()}日`;

const weather = document.querySelector('.weather');
weather.innerHTML = '天気は雨です';

