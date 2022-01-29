const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      //invoke getGuess and add new guess to prevGuesses array
      do {
        this.prevGuesses.push(this.getGuess());
        this.render(); //call render function (I hadn't done this and that was why game would not run)
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
  },

  getGuess: function(){ //function for user's guess with return messages
    let guess
    
    do { //do...while loop with parseInt prompt while the guess is not a number or less than 1 or greater than 100
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    
    return guess;
  },
  
  
  setRange: function() {
    do {
      this.smallestNum = parseInt(prompt(`Enter a number-this will be the low end of the range.`));
  } while (isNaN(this.smallestNum))

    do {
      this.biggestNum = parseInt(prompt(`Enter a number that is ${this.smallestNum +2} or more. This will be the high end of the range.`));
    } while (isNan(this.biggestNum) || this.biggestNum < this.smallestNum + 2)

  },
  
  
//this is Task 5
  render: function() {
    let message

    //if...the player guesses correctly 
    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
      message = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? 'guesses' : 'guess'}!` //returns 'guesses' or 'guess' depending on prevGuesses.length
    } else {
      message = `Your guess is too ${this.prevGuesses[this.prevGuesses.length -1] > this.secretNum ? "high" : "low"} \nPrevious guesses: ${this.prevGuesses.join(', ')}`;
    }

    return message;
  },

  }

  game.play();