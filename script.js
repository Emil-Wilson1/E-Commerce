
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    alert ("Shop Now!!! 30% off on all products");
  }


function ButtonAdd(button) {
    if (button.innerHTML === "Add to cart") {
        button.innerHTML = "Added to cart";
    } else {
        button.innerHTML = "Add to cart";
    }
}
