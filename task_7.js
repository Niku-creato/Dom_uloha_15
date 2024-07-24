function drawSquareWithReverseDiagonal(size) {
    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || j === size - i - 1) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

let size = prompt("Введіть розмір квадрата:");
drawSquareWithReverseDiagonal(Number(size));
