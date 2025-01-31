// ページが読み込まれた時の処理
document.addEventListener('DOMContentLoaded', () => {
  console.log('ガレット・デ・ロワページが読み込まれました。');

  // すべてのfade-in要素を取得
  const fadeInElements = document.querySelectorAll('.fade-in');

  // スクロール時に要素を表示する関数
  const showElementsOnScroll = () => {
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect(); // 要素の位置を取得
      if (rect.top < window.innerHeight * 0.9) {
        element.classList.add('show'); // 表示するクラスを追加
      }
    });
  };

  // 初回実行
  showElementsOnScroll();

  // スクロール時に関数を実行
  window.addEventListener('scroll', showElementsOnScroll);
});
// ページが読み込まれた時の処理
document.addEventListener('DOMContentLoaded', () => {
  console.log('ガレット・デ・ロワページが読み込まれました。');

  // クロージングセクションを取得
  const closingSection = document.getElementById('closingSection');

  // スクロールイベントを監視
  window.addEventListener('scroll', () => {
    // クロージングセクションが画面に表示されたら
    const sectionPosition = closingSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition <= screenHeight * 0.8) {  // 画面の80%に到達したら
      closingSection.classList.add('show'); // クラスを追加して表示
    }
  });
});
