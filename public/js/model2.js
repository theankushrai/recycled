
const image_input = document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener('change', function() {
  document.getElementById("display_image").style.setProperty("visibility","visible");
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").setAttribute("src",uploaded_image);
  });
  reader.readAsDataURL(this.files[0]);
});

