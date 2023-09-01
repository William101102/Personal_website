document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  let currentImageIndex = 0;

  // Show the first image
  images[currentImageIndex].style.opacity = 1;

  function changeImage() {
      // Hide the current image
      images[currentImageIndex].style.opacity = 0;

      // Move to the next image (looping to the first when at the end)
      currentImageIndex = (currentImageIndex + 1) % images.length;

      // Show the next image
      images[currentImageIndex].style.opacity = 1;
  }

  // Change image every 4 seconds
  setInterval(changeImage, 4000);
});
