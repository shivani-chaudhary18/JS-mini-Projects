// Select all white and black keys
const pianoKeys = document.querySelectorAll(".keyWhite, .keyBlack");

// Function to play sound
function playSound(key) {

    // Create a new audio object
    const audio = new Audio("sound.mp3");

    // Restart sound if another key is pressed quickly
    audio.currentTime = 0;

    // Play sound
    audio.play();

    // Add pressed animation
    key.classList.add("active");

    // Remove animation after 150ms
    setTimeout(() => {
        key.classList.remove("active");
    }, 150);
}

// Mouse click support
pianoKeys.forEach((key) => {

    key.addEventListener("click", () => {
        playSound(key);
    });

});

// Keyboard support
document.addEventListener("keydown", (event) => {

    const pressedKey = event.key.toLowerCase();

    pianoKeys.forEach((key) => {

        const keyNote = key.getAttribute("key-note");

        if (keyNote && keyNote.toLowerCase() === pressedKey) {
            playSound(key);
        }

    });

});