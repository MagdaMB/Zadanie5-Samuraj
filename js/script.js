const input = document.querySelector(".pass");
const passwords = ["hi", "wiosna", "lato"];
const mess = ["wyjechalam na dlugo", "wroce kiedys", "tak tak"];
const result = document.querySelector("#me");

input.addEventListener('input', (event) => {
    result.textContent = "";
    const text = event.target.value;

    passwords.forEach((password, index) => {
        if (text === password) {
            result.textContent = mess[index];
            event.target.value = ""; //czysci wpisane haslo
        }
    })
});

input.addEventListener('focus', () => {
    input.style.backgroundColor = "black";
    input.style.color = "white";
})

input.addEventListener('blur', () => {
    input.style.backgroundColor = "white";
    input.style.color = "black";
})