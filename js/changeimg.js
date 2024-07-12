// Define the changeImage function outside the DOMContentLoaded event listener
function changeImage() {
  // Get the image element by its ID
  var img = document.getElementById('aboutimg2');

  // Change the src attribute to the new image file
  img.src = 'images/skrivbordsbild.gif';
}

document.addEventListener('DOMContentLoaded', function() {
  // Your other code if any...
});
