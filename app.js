const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
  });
});
const hiddenElementkanan = document.querySelectorAll('.animasi-kanan')
const hiddenElement = document.querySelectorAll('.animasi')

hiddenElementkanan.forEach((el) => observer.observe(el));
hiddenElement.forEach((el) => observer.observe(el));