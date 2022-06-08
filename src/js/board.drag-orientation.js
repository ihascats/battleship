function dragOrientation(orientation, element, imgH, imgV) {
  const shipSquare = element;
  if (orientation) {
    shipSquare.ondragstart = (e) => {
      e.dataTransfer.setDragImage(imgH, 24, 24);
    };
  }
  if (!orientation) {
    shipSquare.ondragstart = (e) => {
      e.dataTransfer.setDragImage(imgV, 24, 24);
    };
  }
}

export default dragOrientation;
