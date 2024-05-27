const logo = document.getElementById("logo");

let prevX = 0;
let prevY = 0;
let direction = "left";

function updateLogoPosition(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (mouseX > prevX) {
    direction = "right";
  } else {
    direction = "left";
  }

  // Update logo position smoothly
  setTimeout(() => {
    logo.style.left = `${mouseX}px`;
    logo.style.top = `${mouseY}px`;

    // Flip logo if direction changes
    if (direction === "right") {
      logo.style.transform = "scaleX(-1)";
    } else {
      logo.style.transform = "scaleX(1)";
    }
  }, 1000);

  prevX = mouseX;
  prevY = mouseY;
}

document.addEventListener("mousemove", updateLogoPosition);
