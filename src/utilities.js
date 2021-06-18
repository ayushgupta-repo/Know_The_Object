export const drawRect = (detections, ctx) => {
  detections.forEach(prediction => {
    // Get preditction results
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // Set styling

    const color = 'red';
    ctx.strokeStyle = color;
    ctx.font = '30px Arial'
    ctx.fillstyle = color;

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  })
}