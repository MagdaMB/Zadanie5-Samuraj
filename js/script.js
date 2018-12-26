const input = document.querySelector(".pass");
const password = "hellomoto";
const mess = document.querySelector(".message");

input.addEventListener('input', (event) => {
    if (password === event.target.value) {
        mess.textContent = "you're the best hero!!!";
    } else {
        mess.textContent = ""
    }
});

input.addEventListener('focus', () => {
    input.style.backgroundColor = "black";
    input.style.color = "white";
})

input.addEventListener('blur', () => {
    input.style.backgroundColor = "white";
    input.style.color = "black";
})