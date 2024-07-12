
 function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "images/closed.png"){
        document.getElementById("imgClickAndChange").src = "images/open2.png";
    } else {
        document.getElementById("imgClickAndChange").src = "images/open2.png";
    }
}

function delay (URL) {
    setTimeout( function() { window.location = "Portfolio.html" }, 1000 );
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
