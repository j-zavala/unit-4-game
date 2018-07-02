# unit-4-game

In this game, the application will randomly pick a number between 19-120, and the user (you) has to click on the crystals in a combination that sums up to that random number. To note, each crystal represents a number which when you click it will be added to the total sum you currently have.

Here's how the app works:

1. There will be four crystals displayed as buttons on the page.
2. The player will be shown a random number at the start of the game.

3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    • Your game will hide this amount until the player clicks a crystal.
    • When they do click one, update the player's score counter.


4. The player wins if their total score matches the random number from the beginning of the game.
5. The player loses if their score goes above the random number.

6. The game restarts whenever the player wins or loses.
    • When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


7. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.