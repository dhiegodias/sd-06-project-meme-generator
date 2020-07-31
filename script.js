window.onload = function() {
  // Variables to interact with inputed text and image
  let userTextInput = document.getElementById("text-input");
  let memeTextInputed = document.getElementById("meme-text");

  // Variables to interact with inputed upload image
  let imageUploader = document.getElementById('meme-insert');
  let inputedImage = document.getElementById('meme-image');

  // Function to interact with inputed text and image
  userTextInput.addEventListener("keyup", function() {
    memeTextInputed.innerText = userTextInput.value;
  });

  // Function to change current image to uploaded image
  imageUploader.addEventListener("change", function(event) {
    inputedImage.src = URL.createObjectURL(event.target.files[0]);
  });
}
  window.onclick = function() {
    let memeImageContainer = document.querySelector('#meme-image-container');
    if (event.target.id === 'fire') {
      memeImageContainer.style.border = '3px dashed red';
    }
    if (event.target.id === 'water') {
      memeImageContainer.style.border = '5px double blue';
    }
    if (event.target.id === 'earth') {
      memeImageContainer.style.border = ' 6px groove green';
    }
  }

