document.addEventListener('DOMContentLoaded', function() {
  // Your existing JavaScript code here

  const correctPassword = "2501"; // You can change this password
  const passwordInput = document.getElementById('password-input');
  const unlockButton = document.getElementById('unlock-btn');
  const passwordContainer = document.getElementById('password-container');
  const imageGallery = document.getElementById('image-gallery');
  const errorMessage = document.getElementById('error-message');

  // Unlock the image gallery
  unlockButton.addEventListener('click', function() {
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {
      passwordContainer.style.display = 'none'; // Hide password entry
      imageGallery.style.display = 'block'; // Show image gallery
    } else {
      errorMessage.textContent = 'Incorrect password. Please try again.';
    }
  });

  // Optionally, handle pressing Enter to unlock
  passwordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      unlockButton.click();
    }
  });
});
