document.addEventListener("keyup", function(){
  let textImputed = document.getElementById("text-input").value;
  let memeText = document.getElementById("meme-text");
  memeText.style.textShadow = '5px 5px 5px black';
  memeText.style.fontSize = "30px";
  memeText.style.color = "white";
  memeText.innerHTML = textImputed;
})

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

// document.getElementById('meme-insert').addEventListener('change', function(){
//   let uploadedImage = document.getElementById('meme-insert').value;
//   let reader = new FileReader();
//   reader.onload = 
// })