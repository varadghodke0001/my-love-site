function showResponse() {
    const responseElement = document.getElementById('response');
    responseElement.style.display = 'block';
}

function recordResponse(question, answer) {
    alert(`Your response to "${question}" is: "${answer}"`);
}
