function togglePrice(id) {
  var priceList = document.getElementById(id);
  if (priceList.classList.contains("show")) {
      priceList.classList.remove("show");
  } else {
      priceList.classList.add("show");
  }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const indicators = document.querySelectorAll('.indicator');

// インジケーターの更新
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// スライドを変更する関数
function changeSlide() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
}

let startX = 0;
let endX = 0;

// スワイプイベントの処理
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // スワイプ開始位置
});

slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX; // スワイプ終了位置
    if (startX - endX > 50) {
        // 右から左にスワイプ（次の画像へ）
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        }
    } else if (endX - startX > 50) {
        // 左から右にスワイプ（前の画像へ）
        if (currentSlide > 0) {
            currentSlide--;
        }
    }
    changeSlide();
});

// インジケータークリック時の処理
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        changeSlide();
    });
});

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
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
  
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
  
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSliderPosition();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSliderPosition();
    }
  
    // タッチイベントの追加
    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
  
    slider.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      let diff = startX - e.touches[0].clientX;
  
      if (diff > 50) {
        nextSlide();
        isDragging = false;
      } else if (diff < -50) {
        prevSlide();
        isDragging = false;
      }
    });
  
    slider.addEventListener("touchend", () => {
      isDragging = false;
    });
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
document.querySelector('.go').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  
