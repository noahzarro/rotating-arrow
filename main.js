rotation = 0

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(name)
    if (name=="ArrowLeft") {
        rotation+=1
    }
    if (name=="ArrowRight") {
        rotation-=1
    }
    const element = document.querySelector('#arrow')
    console.log(element)
    element.style.transform = "rotateZ("+rotation+"deg)"
    console.log(rotation)
  }, false);