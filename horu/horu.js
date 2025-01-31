function togglePrice(id) {
  var priceList = document.getElementById(id);
  if (priceList.classList.contains("show")) {
      priceList.classList.remove("show");
  } else {
      priceList.classList.add("show");
  }
}
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

function togglePrice(id, element) {
    const priceList = document.getElementById(id);

    if (priceList.classList.contains('show')) {
        priceList.style.maxHeight = "0px";
        priceList.classList.remove('show');
        setTimeout(() => priceList.style.display = "none", 500); // アニメーション後に非表示
        element.innerHTML = element.innerHTML.replace("▴", "▾");
    } else {
        priceList.style.display = "block";
        setTimeout(() => {
            priceList.classList.add('show');
            priceList.style.maxHeight = "500px"; // 必要に応じて調整
        }, 10);
        element.innerHTML = element.innerHTML.replace("▾", "▴");
    }
}

function updateSlidePosition() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}
const slider = document.querySelector('.slider');

let isDown = false;
let startX;
let moveX;
let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlidePosition() {
    slider.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}
const indicatorContainer = document.querySelector('.indicator-container');
indicatorContainer.innerHTML = ""; // 既存のインジケーターをクリア

for (let i = 0; i < totalSlides; i++) {
    const span = document.createElement("span");
    span.classList.add("indicator");
    if (i === 0) span.classList.add("active"); // 最初のインジケーターをアクティブに
    indicatorContainer.appendChild(span);
}

  
const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    moveX = e.touches[0].clientX - startX;
});

slider.addEventListener('touchend', () => {
    if (!isDown) return;
    isDown = false;
    if (moveX > 50 && index > 0) {
        index--;
    } else if (moveX < -50 && index < totalSlides - 1) {
        index++;
    }
    updateSlidePosition();
});

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.clientX;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    moveX = e.clientX - startX;
});

slider.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    if (moveX > 50 && index > 0) {
        index--;
    } else if (moveX < -50 && index < totalSlides - 1) {
        index++;
    }
    updateSlidePosition();
});

updateIndicators();

function togglePrice(id, element) {
    const priceList = document.getElementById(id);
    
    if (priceList.classList.contains('show')) {
        priceList.classList.remove('show');
        element.innerHTML = element.innerHTML.replace("▴", "▾"); // 三角を下向きに戻す
    } else {
        priceList.classList.add('show');
        element.innerHTML = element.innerHTML.replace("▾", "▴"); // 三角を上向きに変更
    }
}
