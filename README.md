# Find Your Hat Game

This is an interactive terminal game built with JavaScript classes. In this game, the player has lost their hat in a field full of holes and must navigate back to it without falling down one of the holes or stepping outside of the field.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Gameplay](#gameplay)
- [License](#license)

## Features

- **Dynamic field generation:** The game can generate a random field with a hat and holes, providing a different challenge in each playthrough.
- **User input for navigation:** Players can make moves by entering 'up', 'down', 'left', or 'right' when prompted.
- **Winning and losing conditions:** The game ends when the player finds the hat, falls into a hole, or steps outside the field.
- **Printed field map:** After each move, the current state of the field is printed with the player's path marked with '*'.
- **Easy to run:** The game can be run with Node.js using the command `node main.js`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FeliceParrino/FindYourHat.git
   
## Usage

Run the game with the following command:

node main.js


## Gameplay

The player is represented by '*'.
The hat is represented by '^'.
Holes are represented by 'O'.
The field is represented by '░'.
Navigate through the field by entering 'up', 'down', 'left', or 'right' when prompted.

## Game Over Conditions
Stepping outside the field: "Game Over! You stepped outside the field."
Falling into a hole: "Game Over! You fell into a hole."
Finding the hat: "Congratulations! You found your hat!"

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
