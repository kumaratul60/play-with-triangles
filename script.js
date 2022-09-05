const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(input[0].value),
    Number(input[1].value),
    Number(input[2].value)
  );
  if (sumOfAngles === 180) {
    outputElement.innerText = "yes, The angles form Triangle";
  } else {
    outputElement.innerText = "Oh no, The angles don't form a triangles";
    alert("Make sure sum of angles is equal to 180 degree");
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
