// DEV JOICE GOMES | 2022
// Text Encryptor/Decryptor 

const input = document.getElementById('text-input');
const output = document.getElementById('text-output');
const encryptButton = document.getElementById('encrypt-btn');
const decryptButton = document.getElementById('decrypt-btn');
const noMsgFound = document.getElementById('no-msg-found');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');

encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);

function encryptText() {
    let text = input.innerText.toLowerCase();
    let textArray = text.split('');
    let result;

    if (input.innerText === '') {
        modalText.textContent = 'Digite um texto primeiro!';
        showOrHideModal();
    } else {
        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i] === 'a') {
                textArray[i] = 'ai';
            } else if (textArray[i] === 'e') {
                textArray[i] = 'enter';
            } else if (textArray[i] === 'i') {
                textArray[i] = 'imes';
            } else if (textArray[i] === 'o') {
                textArray[i] = 'ober';
            } else if (textArray[i] === 'u') {
                textArray[i] = 'ufat';
            }
        }
        result = textArray.join('');
        showOutputText(result);
    }
}

function decryptText() {
    let text = input.innerText.toLowerCase();
    let result;

    if (input.innerText === '') {
        modalText.textContent = 'Digite um texto primeiro!';
        showOrHideModal();
    } else {
        result = text.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        showOutputText(result);
    }
}

function showOutputText(result) {
    noMsgFound.style.display = 'none';
    output.innerText = result;
    createCopyButton();
}

function createCopyButton() {
    const outputContainer = document.querySelector('.text-output-container');
    let hasCopyButton = outputContainer.contains(outputContainer.querySelector('button'));

    if (!hasCopyButton) {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = 'Copiar';
        outputContainer.appendChild(copyButton);
        copyButton.classList.add('light-btn');
        copyButton.setAttribute('onclick', 'copyToClipboard()');
    }
}

async function copyToClipboard() {
    await navigator.clipboard.writeText(output.innerText);
    modalText.textContent = 'Texto copiado para a área de transferência.';
    showOrHideModal();
}

const closeModalBtn = document.getElementById('close-btn');
closeModalBtn.addEventListener('click', showOrHideModal);

function showOrHideModal(){
    modal.classList.toggle('hidden');
}