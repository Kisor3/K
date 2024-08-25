function response(answer) {
    document.getElementById('message').classList.add('hidden');
    const additionalMessage = document.getElementById('additional-message');
    const messageText = document.getElementById('message-text');

    if (answer === 'no') {
        messageText.innerHTML = `
            I have a crush on you.<br>
            I will love you forever.<br>
            I will take care of you.<br>
            You can't blame gravity for falling in love.<br>
            I would not wish any companion in the world but you.
        `;
    } else {
        messageText.innerHTML = `
            You can't blame gravity for falling in love.<br>
            I would not wish any companion in the world but you.
        `;
    }

    additionalMessage.classList.remove('hidden');
}

function continueLink() {
    window.location.href = 'https://youtu.be/7SaM24Cjzj0?feature=shared';
}