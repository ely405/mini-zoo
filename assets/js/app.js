var image = document.getElementsByClassName('animal');
var selectOption = document.getElementById('selectedImageEffect');

selectOption.addEventListener("change", function(){
  switch (selectOption.value) {
    case "sepia":
      for (var i = 0; i < image.length; i++) {
        image[i].classList.add("sepia");
        image[i].classList.remove("blanco-negro");
        image[i].classList.remove("invertir-colores");
      }
      break;
    case "blanco-negro":
      for (var i = 0; i < image.length; i++) {
        image[i].classList.remove("sepia");
        image[i].classList.add("blanco-negro");
        image[i].classList.remove("invertir-colores");
      }
      break;
    case "invertir-colores":
      for (var i = 0; i < image.length; i++) {
        image[i].classList.remove("sepia");
        image[i].classList.remove("blanco-negro");
        image[i].classList.add("invertir-colores");
      }
      break;
    default:
    for (var i = 0; i < image.length; i++) {
      image[i].classList.remove("sepia");
      image[i].classList.remove("blanco-negro");
      image[i].classList.remove("invertir-colores");
    }
  }
});
