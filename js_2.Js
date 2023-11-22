function uploadImage(inputId) {
    const input = document.getElementById(inputId);
    input.click();
  
    input.addEventListener('change', function() {
      alert('Image uploaded successfully!');
    });
  }