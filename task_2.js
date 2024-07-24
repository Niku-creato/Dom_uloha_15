function checkPassword() {
    const correctPassword = "1234"; 
    while (true) {
        let inputPassword = prompt("Введіть пароль:");
        if (inputPassword === correctPassword) {
            console.log("Ви успішно увійшли в систему");
            break;
        } else {
            console.log("Неправильний пароль, спробуйте ще раз");
        }
    }
}

checkPassword();