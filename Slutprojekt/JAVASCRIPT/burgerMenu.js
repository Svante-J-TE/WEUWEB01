function toggleButton(x) {
  x.classList.toggle("change");
}

function showContent(x) {
  var x = document.getElementById("burgerContent");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}