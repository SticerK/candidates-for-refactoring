enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  let area = 0;

  switch (shape) {
    case ShapeType.Circle:
      area = Math.PI * Math.pow(radiusOrSide, 2);
      break;
    case ShapeType.Square:
      area = Math.pow(radiusOrSide, 2);
      break;
    
    default:
      area = 0
  }

  return area;
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54

// нет default в switch. Будет срабатывать default, если никакой кейс не сработал 
