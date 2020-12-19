window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(0, 255, 76)",
        "rgb(210, 30, 114)",
        "rgb(24, 99, 99)",
        "rgb(204, 0, 255)",
        "rgb(171, 187, 25)",
        "rgb(255, 72, 0)"
    ];


    console.log(sounds);
    //sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //function that makes bubble
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        })
    }
});


