// ページが読み込まれたときに背景画像を動かすなどの追加機能を設定
window.addEventListener('load', function() {
  const background = document.querySelector('.background-animation');
  background.style.animation = 'moveBackground 10s linear infinite';
});
