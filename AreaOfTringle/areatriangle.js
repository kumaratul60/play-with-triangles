var firstSideOfTriangle = document.querySelector("#first-side");
var secondSideOfTriangle = document.querySelector("#second-side");
var CheckBtn = document.querySelector("#calculate");
var outputDiv = document.querySelector("#output");

function calculateMultiply(firstSide, secondSide) {
  var multiply = firstSide * secondSide;
  return multiply;
}

function calculateArea() {
  var multiply = calculateMultiply(
    Number(firstSideOfTriangle.value),
    Number(secondSideOfTriangle.value)
  );

  var area = multiply / 2;
  outputDiv.innerText =
    "the area of  two sides of triangle  is  " + area + "cm²";
}

CheckBtn.addEventListener("click", calculateArea);
