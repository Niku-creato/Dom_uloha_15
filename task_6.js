function drawSquareWithDiagonal(size) {
    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

let size = prompt("Введіть розмір квадрата:");
drawSquareWithDiagonal(Number(size));
