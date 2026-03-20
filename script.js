const compliments = [
    "You are doing better than you think.",
    "Your kindness makes a real difference.",
    "You bring great energy to the people around you.",
    "You are capable of amazing things.",
    "Your effort matters, even when it feels small.",
    "You have a wonderful way of making people feel seen.",
    "You are stronger than the challenges in front of you.",
    "Your creativity is a gift.",
    "You deserve all the good things coming your way.",
    "You are enough, exactly as you are.",
    "You're beautiful just the way you are!" , 
    "Your smile brighten ups the room.", 
    "Your beauty goes deeper than the surface",
    "You will find hope waiting for you in the dark.",
];

function showCompliment() {
    const complimentElement = document.getElementById("compliment");
    const complimentsTextareaElement = document.querySelector("textarea");
    const randomIndex = Math.floor(Math.random() * compliments.length);

    complimentElement.classList.remove("sparkle");
    void complimentElement.offsetWidth;

    complimentElement.textContent = complimentsTextareaElement
        .value
        .split('\n')
        .concat(compliments)[randomIndex];
    complimentElement.classList.add("sparkle");
}
