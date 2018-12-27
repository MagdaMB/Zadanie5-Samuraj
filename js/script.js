const input = document.querySelector(".pass");
const passwords = ["jeDen", "dWa"];
const mess = ["extra", "super"];
let result = document.querySelector(".message");

const showMessage = (event) => {
    let text = event.target.value.toLowerCase();
    result.textContent = ""

    passwords.forEach((password, index) => {
        if (text === password.toLowerCase()) {
            result.textContent = mess[index];
        }
    })
    // let text = input.value.toLowerCase();

    // for (let i = 0; i < passwords.length; i++) {
    //     if (text === passwords[i]) {
    //         console.log(mess[i]);
    //     } else {
    //         console.log("bad")
    //     }
    // }
}
input.addEventListener('input', showMessage);