const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    // 現在の画像を非表示にする
    images[currentIndex].classList.remove('active');
    
    // 次の画像のインデックスを計算
    currentIndex = (currentIndex + 1) % images.length;

    // 次の画像を表示する
    images[currentIndex].classList.add('active');
}

// 初期化：最初の画像を表示
images[currentIndex].classList.add('active');

// 3秒ごとに画像を切り替える
setInterval(showNextImage, 4000);
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        // スクロール量が300pxを超えたら表示
        if (scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // ボタンをクリックしたらトップに戻る
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズにスクロール
        });
    });
});
