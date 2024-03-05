const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray) {
      this.field = fieldArray;
      this.playerPosition = { row: 0, col: 0 }; // Starting position in the upper-left corner
      this.gameOver = false;
    }
  
    print() {
      for (let row = 0; row < this.field.length; row++) {
        console.log(this.field[row].join(''));
      }
    }
  
    move(direction) {
      const { row, col } = this.playerPosition;
  
      switch (direction) {
        case 'up':
          this.playerPosition.row = row - 1;
          break;
        case 'down':
          this.playerPosition.row = row + 1;
          break;
        case 'left':
          this.playerPosition.col = col - 1;
          break;
        case 'right':
          this.playerPosition.col = col + 1;
          break;
        default:
          console.log('Invalid direction');
          break;
      }
  
      this.checkGameState();
    }
  
    checkGameState() {
      const { row, col } = this.playerPosition;
  
      if (row < 0 || row >= this.field.length || col < 0 || col >= this.field[0].length) {
        console.log('Game Over! You stepped outside the field.');
        this.gameOver = true;
      } else {
        const currentCell = this.field[row][col];
  
        if (currentCell === 'O') {
          console.log('Game Over! You fell into a hole.');
          this.gameOver = true;
        } else if (currentCell === '^') {
          console.log('Congratulations! You found your hat!');
          this.gameOver = true;
        } else {
          this.field[row][col] = '*'; // Update player's position on the field
          this.print();
          this.promptUser();
        }
      }
    }

    promptUser() {
      const readline = require('readline-sync');
      const direction = readline.question('Which direction would you like to move? (up, down, left, right): ');
      this.move(direction);
    }

    static generateField(height, width, holePercentage) {
      const fieldArray = [];
  
      // Initialize the field with neutral background characters
      for (let i = 0; i < height; i++) {
        const row = Array.from({ length: width }, () => '░');
        fieldArray.push(row);
      }
  
      // Randomly place the hat (^)
      const hatRow = Math.floor(Math.random() * height);
      const hatCol = Math.floor(Math.random() * width);
      fieldArray[hatRow][hatCol] = '^';
  
      // Calculate the number of holes based on the holePercentage
      const totalCells = height * width;
      const numHoles = Math.floor((holePercentage / 100) * totalCells);
  
      // Randomly place the holes (O)
      for (let i = 0; i < numHoles; i++) {
        let holeRow, holeCol;
  
        do {
          holeRow = Math.floor(Math.random() * height);
          holeCol = Math.floor(Math.random() * width);
        } while (fieldArray[holeRow][holeCol] !== '░'); // Ensure we don't overwrite the hat or place holes on top of each other
  
        fieldArray[holeRow][holeCol] = 'O';
      }
  
      return fieldArray;
    }
  }
  
const generatedField = Field.generateField(5, 5, 20); // Adjust the height, width, and holePercentage as needed
const myField = new Field(generatedField); 

  myField.print(); 
  myField.promptUser();

