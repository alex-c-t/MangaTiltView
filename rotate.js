function rotateWebsite() {
  const body = document.body;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Dynamically add the 'scrollContainer' ID to the body element
  body.id = "scrollContainer"; // Add the ID 'scrollContainer' to the body element

  // Apply rotation and layout styles to the body
  body.style.margin = "0 !important";
  body.style.transform = "rotate(90deg)"; // Rotate body by 90 degrees
  body.style.transformOrigin = "top right"; // Origin at top-right for correct rotation
  body.style.position = "absolute";
  body.style.top = "100%"; // Set top to the full height of the viewport
  body.style.left = "46%"; // Center horizontally after rotation
  body.style.width = "100vh"; // Set width to the height of the viewport
  body.style.height = "100vw"; // Set height to the width of the viewport
  body.style.overflowX = "scroll"; // Enable horizontal scrolling

  // Handle the scroll event to adjust the scroll position (for the body)
  body.addEventListener('wheel', function (e) {
    e.preventDefault(); // Prevent the default scroll behavior

    // Remap vertical scroll (deltaY) to horizontal and vertical scroll positions
    body.scrollBottom += e.deltaX; // Scroll horizontally
    body.scrollTop -= e.deltaX;  // Scroll vertically
  }, { passive: false });
}

// Call the function to apply rotation and custom scroll behavior
rotateWebsite();



// margin: 0 !important;
// transform: rotate(90deg);
// transform-origin: top right;
// position: absolute;
// top: 100%;
// left: 46%;
// width: 100vh;
// height: 100vw;
// overflow-x: hidden;