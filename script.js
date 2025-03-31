// script.js

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
  
  // フェードインアニメーション
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-init");
    observer.observe(section);
  });
  
  // ヘッダーのスクロール時スタイル変更
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  // ナビクリック時にアクティブハイライト
  const navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
  