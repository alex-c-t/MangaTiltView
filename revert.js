function revertRotation() {
  const body = document.body;

  // Remove the 'scrollContainer' ID from the body element
  body.id = "";

  // Reset styles to their default values

  body.style.transform = "";
  body.style.transformOrigin = "";
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.width = "";
  body.style.height = "";
  body.style.overflowX = "";

  // Remove the event listener for the scroll event
  const clonedBody = body.cloneNode(true);
  body.parentNode.replaceChild(clonedBody, body);
}

// Call the function to revert rotation and custom scroll behavior
revertRotation();