window.addEventListener('keydown', (e) => {
    //Gets the corresponding audio element when the key is pressed down
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);

    if (!audio) return; // This will stop the function from running all together

    audio.currentTime = 0; //rewinds to the start when the listener is invoked again
    audio.play();

    key.classList.add('playing');

});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it is not a transform

    this.classList.remove('playing');
}

//setTimeout() would cause a mismatch in timings between the JS and CSS

//instead we can listen for the transitioned end for all the keys by looping over the keys nodeList
const keys = document.querySelectorAll('.key');

//We listen for EACH key and we essentially CATCH the transitionEnd and then implement the removeTransition method.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));