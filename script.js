const messages = [
    "¿Estás seguro?",
    "¿Realmente estás seguro?",
    "Enseri.. ¿Realmente estás seguro..?",
    "Frijolito pofavooo...",
    "Oiee piensaloo..!!",
    "Si ices que no me pondre muy tiste...",
    "Enserio, estaré muy pero muy triste...",
    "Wa llora si dice que no...",
    "Está bien... ya no insisto más...",
    "Es broma jiji, di que SI pofavoo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
