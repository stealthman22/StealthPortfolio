function init() {
    // Grab the Dom elements
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Initialize the constructor function
    new TypeWriter(txtElement, words, wait);
}

// Building class

class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
        // Selecting poperties
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.isDeleting = false;
        // method
        this.type();
    }

    // Define the type
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get text of current
        const fullTxt = this.words[current];

        // Check if text is deleting
        if (this.isDeleting) {
            // Remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt value into html
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial typing speed
        let typeSpeed = 120;

        // Deleting typespeed
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // Building core fucntionality for switching words
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause/wait at the end
            typeSpeed = this.wait;
            // Turn on deleting
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            // Turn off deleting
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex++;
            // Pause before typing
            typeSpeed = 120;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

// init on DOM load
document.addEventListener('DOMContentLoaded', init);