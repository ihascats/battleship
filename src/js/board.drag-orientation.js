function dragOrientation(orientation, element, imgH, imgV) {
  const square = element;
  if (orientation) {
    square.ondragstart = (e) => {
      e.dataTransfer.setDragImage(imgH, 24, 24);
    };
  }
  if (!orientation) {
    square.ondragstart = (e) => {
      e.dataTransfer.setDragImage(imgV, 24, 24);
    };
  }
}

export default dragOrientation;
