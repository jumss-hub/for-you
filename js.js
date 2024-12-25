const message = `I feel so lucky to meet you, thank you for everything you did for me when life does not always go as planned for me, thank you for making me laugh in the middle of the night, you really made my year so special and alive again, thank you so much to the point that I don't know how to describe you. You are the person who's there when I needed a shoulder to lean on to, a hand to caress when my day says otherwise, you are the person who actually cared for me, cried for me, cried with me, laughed with me, laughed at me, and I hope I can finally say, love a person, like me. You are one of the best things that happened to me. It wasn't until I found you that I discovered it the empty space in my life, that you fit in so perfectly, because in my eyes, all your imperfections are perfect just the way they are, sabi nga sa Lover ni Taylor swift, "Can i go, where you go, can we always, be this close" this lyric portrays how much of a person I can be when I'm with you, the dream of being with you anywhere is far for now, pero love does things unimaginable, and listen to Laufey's song "While you were sleeping" it perfectly explained how I fell for you,listen to it from start to finish, and you'll undestand me more. I still have something waiting for you, just wait and it will patiently come, I hope you'll find this message nothing but as an appreciation, as Christmas ends and new year comes, I will still be here, adios! muaaa`;

const messageBox = document.getElementById('messageBox');
const readButton = document.getElementById('readButton');

let currentIndex = 0;
const typingSpeed = 60; // milliseconds per character

function typeMessage() {
    if (currentIndex < message.length) {
        messageBox.innerHTML += message.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeMessage, typingSpeed);
    }
}

readButton.addEventListener('click', () => {
    messageBox.style.display = 'block'; // Show the message box
    typeMessage(); // Start the typing effect
    readButton.style.display = 'none'; // Hide the button after it's clicked
});
