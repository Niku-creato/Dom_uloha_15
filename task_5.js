function drawTriangle(size) {
    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(i));
    }
}

let size = prompt("Введіть розмір трикутника:");
drawTriangle(Number(size));
