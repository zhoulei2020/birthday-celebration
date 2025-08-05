// Birthday Celebration JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Auto-generate confetti on page load
    setTimeout(() => {
        throwConfetti();
    }, 1000);
});

// Initialize page with default or saved values
function initializePage() {
    // Load saved data from localStorage if available
    const savedData = getSavedData();
    
    if (savedData.name) {
        document.getElementById('person-name').textContent = savedData.name;
        document.getElementById('name-input').value = savedData.name;
    }
    
    if (savedData.age) {
        document.getElementById('age-badge').textContent = savedData.age;
        document.getElementById('age-input').value = savedData.age;
    }
    
    if (savedData.message) {
        document.getElementById('main-message').textContent = savedData.message;
        document.getElementById('message-input').value = savedData.message;
    }
    
    if (savedData.avatar) {
        document.getElementById('avatar').src = savedData.avatar;
        document.getElementById('avatar-input').value = savedData.avatar;
    }
    
    // Initialize customize panel as closed
    const panel = document.getElementById('customize-panel');
    panel.classList.add('closed');
}

// Save data to localStorage
function saveData(key, value) {
    const data = getSavedData();
    data[key] = value;
    localStorage.setItem('birthdayData', JSON.stringify(data));
}

// Get saved data from localStorage
function getSavedData() {
    const saved = localStorage.getItem('birthdayData');
    return saved ? JSON.parse(saved) : {};
}

// Customization functions
function toggleCustomizePanel() {
    const panel = document.getElementById('customize-panel');
    panel.classList.toggle('closed');
}

function updateName() {
    const name = document.getElementById('name-input').value;
    if (name.trim()) {
        document.getElementById('person-name').textContent = name;
        saveData('name', name);
    }
}

function updateAge() {
    const age = document.getElementById('age-input').value;
    if (age) {
        document.getElementById('age-badge').textContent = age;
        saveData('age', age);
    }
}

function updateMessage() {
    const message = document.getElementById('message-input').value;
    if (message.trim()) {
        document.getElementById('main-message').textContent = message;
        saveData('message', message);
    }
}

function updateAvatar() {
    const avatarUrl = document.getElementById('avatar-input').value;
    if (avatarUrl.trim()) {
        document.getElementById('avatar').src = avatarUrl;
        saveData('avatar', avatarUrl);
    }
}

// Interactive activities
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.transform = 'scale(0)';
            
            // Re-light candles after 3 seconds
            setTimeout(() => {
                flame.style.opacity = '1';
                flame.style.transform = 'scale(1)';
            }, 3000);
        }, index * 200);
    });
    
    // Show celebration message
    showMessage("🎉 Wish came true! 🎉");
    throwConfetti();
}

function playBirthdaySong() {
    // Create audio context for playing birthday song
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Happy Birthday melody frequencies
    const notes = [
        { freq: 262, duration: 0.5 }, // C
        { freq: 262, duration: 0.5 }, // C
        { freq: 294, duration: 1 },   // D
        { freq: 262, duration: 1 },   // C
        { freq: 349, duration: 1 },   // F
        { freq: 330, duration: 2 },   // E
        { freq: 262, duration: 0.5 }, // C
        { freq: 262, duration: 0.5 }, // C
        { freq: 294, duration: 1 },   // D
        { freq: 262, duration: 1 },   // C
        { freq: 392, duration: 1 },   // G
        { freq: 349, duration: 2 }    // F
    ];
    
    let currentTime = audioContext.currentTime;
    
    notes.forEach(note => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(note.freq, currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, currentTime + note.duration);
        
        oscillator.start(currentTime);
        oscillator.stop(currentTime + note.duration);
        
        currentTime += note.duration;
    });
    
    showMessage("🎵 Happy Birthday to You! 🎵");
    
    // Add music animation
    const musicNote = document.querySelector('.music-note');
    musicNote.style.animation = 'none';
    setTimeout(() => {
        musicNote.style.animation = 'musicBounce 0.5s infinite';
    }, 100);
}

function generateWish() {
    const wishes = [
        "May all your dreams come true! ✨",
        "Wishing you love, laughter, and happiness! 💖",
        "May this year bring you amazing adventures! 🌟",
        "Hope your special day is wonderful! 🎈",
        "May you be blessed with joy and success! 🌈",
        "Wishing you health, wealth, and happiness! 💫",
        "May your heart be filled with love and joy! ❤️",
        "Hope all your birthday wishes come true! 🎂",
        "May this new year of life be your best yet! 🎉",
        "Wishing you endless moments of joy! 🌸"
    ];
    
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    showMessage(randomWish);
    
    // Add sparkle effect
    createSparkles();
}

function throwConfetti() {
    const container = document.getElementById('confetti-container');
    
    // Clear existing confetti
    container.innerHTML = '';
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        createConfettiPiece(container);
    }
    
    showMessage("🎊 Celebration Time! 🎊");
}

function createConfettiPiece(container) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random position and animation
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    // Random colors
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
        }
    }, 5000);
}

function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.position = 'fixed';
    sparkleContainer.style.top = '0';
    sparkleContainer.style.left = '0';
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    sparkleContainer.style.zIndex = '999';
    
    document.body.appendChild(sparkleContainer);
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '20px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
        
        sparkleContainer.appendChild(sparkle);
    }
    
    // Add sparkle animation CSS
    if (!document.getElementById('sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            @keyframes sparkleFloat {
                0% { 
                    opacity: 0; 
                    transform: translateY(20px) scale(0); 
                }
                50% { 
                    opacity: 1; 
                    transform: translateY(0) scale(1); 
                }
                100% { 
                    opacity: 0; 
                    transform: translateY(-20px) scale(0); 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove sparkles after animation
    setTimeout(() => {
        document.body.removeChild(sparkleContainer);
    }, 2000);
}

function showMessage(message) {
    // Create message popup
    const messagePopup = document.createElement('div');
    messagePopup.textContent = message;
    messagePopup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 20px 40px;
        border-radius: 25px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #2d3436;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        animation: messagePopup 0.5s ease-out;
        text-align: center;
        border: 3px solid #ff6b6b;
    `;
    
    // Add popup animation CSS
    if (!document.getElementById('popup-style')) {
        const style = document.createElement('style');
        style.id = 'popup-style';
        style.textContent = `
            @keyframes messagePopup {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0); 
                }
                100% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1); 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(messagePopup);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messagePopup.style.animation = 'messagePopup 0.5s ease-out reverse';
        setTimeout(() => {
            if (messagePopup.parentNode) {
                document.body.removeChild(messagePopup);
            }
        }, 500);
    }, 2500);
}

// Add some random floating animations
function addFloatingElements() {
    const floatingEmojis = ['🎈', '🎂', '🎁', '🌟', '💫', '🎊', '🎉'];
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.textContent = floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)];
        emoji.style.cssText = `
            position: fixed;
            font-size: 30px;
            pointer-events: none;
            z-index: 0;
            opacity: 0.3;
            animation: floatUp 8s linear infinite;
        `;
        
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.bottom = '-50px';
        
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            if (emoji.parentNode) {
                document.body.removeChild(emoji);
            }
        }, 8000);
    }, 3000);
}

// Add floating animation CSS
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatUp {
        0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0; 
        }
        10% { 
            opacity: 0.3; 
        }
        90% { 
            opacity: 0.3; 
        }
        100% { 
            transform: translateY(-100vh) rotate(360deg); 
            opacity: 0; 
        }
    }
`;
document.head.appendChild(floatingStyle);

// Start floating elements
addFloatingElements();

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                blowCandles();
                break;
            case '2':
                e.preventDefault();
                playBirthdaySong();
                break;
            case '3':
                e.preventDefault();
                generateWish();
                break;
            case '4':
                e.preventDefault();
                throwConfetti();
                break;
        }
    }
});

// Add click-to-celebrate functionality
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') {
        // Create a small celebration at click position
        const celebration = document.createElement('div');
        celebration.innerHTML = '🎉';
        celebration.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 999;
            animation: clickCelebration 1s ease-out forwards;
        `;
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            if (celebration.parentNode) {
                document.body.removeChild(celebration);
            }
        }, 1000);
    }
});

// Add click celebration animation
const clickStyle = document.createElement('style');
clickStyle.textContent = `
    @keyframes clickCelebration {
        0% { 
            opacity: 1; 
            transform: scale(0) rotate(0deg); 
        }
        50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0) rotate(360deg); 
        }
    }
`;
document.head.appendChild(clickStyle);
