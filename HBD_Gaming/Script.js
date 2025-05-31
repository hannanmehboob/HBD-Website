const messages = [
    "Mwah! My sweetest Pookie! 💖",
    "A special kiss for my cutest Madam Ji! 💝",
    "You're my everything, cutie pie! 💕",
    "Sending million kisses your way! 💋",
    "My heart beats only for my Pookie! 💗",
    "You make my world super duper special! 🌟",
    "Forever yours, my adorable Madam Ji! 💘",
    "Cuddles and kisses for you! 🤗💕",
    "You're the sweetest sugar plum! 🍯💝",
    "My heart goes boom boom for you! 💓"
];

function createHeart() {
    const heart = document.createElement('div');
    const symbols = ['💕', '💖', '💗', '💝', '💋', '✨', '🌸', '💘'];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];            
    heart.className = 'falling text-2xl';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}

function showMessage(text) {
    const messageDisplay = document.getElementById('message-display');
    const messageElement = document.createElement('div');
    messageElement.className = 'message-container rounded-full px-6 py-3 text-xl text-pink-600 font-["Bubblegum_Sans"] slide-up text-center';
    messageElement.textContent = text;
    
    // Clear previous message
    messageDisplay.innerHTML = '';
    messageDisplay.appendChild(messageElement);
    
    // Create floating hearts around the message
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.className = 'absolute text-xl kiss-animation';
        heart.style.left = `${10 + i * 80}%`;
        heart.style.top = '-20px';
        messageElement.appendChild(heart);
    }
}

function createKissEffect(e) {
    const kiss = document.createElement('div');
    kiss.innerHTML = '💋';
    kiss.className = 'fixed text-5xl kiss-animation';
    kiss.style.left = e.clientX + 'px';
    kiss.style.top = e.clientY + 'px';
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 3000);
}

document.getElementById('kiss-button').addEventListener('click', (e) => {
    const counter = document.getElementById('kiss-counter');
    counter.textContent = String(parseInt(counter.textContent) + 1).padStart(5, '0');
    createKissEffect(e);
    showMessage(messages[Math.floor(Math.random() * messages.length)]);
});

document.getElementById('play-button').addEventListener('click', () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'game.html';
    }, 1000);
});

// Create initial hearts
for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 400);
}

// Continue creating hearts
setInterval(createHeart, 800);