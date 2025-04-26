document.addEventListener('DOMContentLoaded', function() {
    // Handle present card click
    const presentCard = document.getElementById('present-card');
    const morningCard = document.getElementById('morning-card');
    
    presentCard.addEventListener('click', function() {
        presentCard.style.display = 'none';
        morningCard.style.display = 'flex';
    });
    
    // Create falling hearts
    createHearts();
    setInterval(createHearts, 300);
    
    function createHearts() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random heart symbols
        const hearts = ['❤', '💕', '💖', '💗', '💓', '💘', '💝'];
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random starting position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Random size
        const size = Math.random() * 1 + 0.5;
        heart.style.fontSize = size + 'rem';
        
        // Random drift (horizontal movement)
        const drift = Math.random() * 2 - 1;
        heart.style.setProperty('--drift', drift);
        
        // Random animation duration
        const animationDuration = Math.random() * 5 + 5;
        heart.style.animationDuration = animationDuration + 's';
        
        // Append heart to body
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }
});