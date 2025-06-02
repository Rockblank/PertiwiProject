<script>
  const wrapper = document.getElementById('heroWrapper');
  const totalSlides = 3;
  let currentIndex = 0;

  function updateSlide() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  }
  

  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);

  // Auto slide tiap 3 detik
  setInterval(nextSlide, 3000);
</script>
