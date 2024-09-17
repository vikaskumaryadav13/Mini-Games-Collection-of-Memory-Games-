In this project let's build a **Mini Games** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your React skills by building a gaming application, focusing on **routing** concepts, **state management**, and **conditional rendering**. Your task includes integrating third party libraries, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You can request for the feedback after your project submission in the discussions.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">website</a>
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a free Figma account. Watch the video upto **00:50**
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in a Figma screen. Watch the video upto **02:45**.
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from a Figma screen.
  - Click on the Export button to get Export options as shown in the below image.

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://learning.ccbp.in/projects/course?c_id=fe4c935d-3ad5-4bb8-a1a5-9b045ae70010&s_id=2f72d6fe-09a7-4c0a-b0db-196740c853a0&t_id=6535e48d-fb4e-45c4-9654-3da423c79e26" target="_blank">this</a> session for better understanding.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/5z2LvEk3PiUNy0SnqaiPBA/Mini-Games?type=design&node-id=452-44695&mode=design" target="_blank">here</a>

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Home Route**

  - Users should be able to see the list of all games.
  - Users should access and play any of the games by simply clicking on their respective game card.

- When the user clicks on the `Back` button in any of the four games, then the page should be navigated to the Home Route.

- **Emoji Game Route**
  - When the user clicks on the **Emoji Game** card in **Home Route**, then the user should be navigated to the Game Rules View of the game.
  - On the Game Rules View, users should be able to see the Rules of Emoji Game.
  - When the user clicks on the `Start playing` button, the Game Playing View will be displayed, enabling the user to engage in the Emoji Game.
  - Initially, the score displayed should be 0.
  - On the Game Playing View, the user should be able to see the `Rules` button.
  - When the user clicks on the `Rules` button, then the `Rules` pop up should be displayed.
  - Click here to view the detailed <a href="https://assets.ccbp.in/frontend/content/react-js/emoji-game-rules-v2.jpg" target="_blank">Emoji Game Rules</a>
  - In the Game Results View, when the `Play Again` button is clicked, then the user should be navigated to the Game Playing View where the user should be able to play the Emoji game.
  - Below is the example of **Emoji Game**

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif" alt="emoji game output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

- **Rock Paper Scissors Route**
  - When the user clicks on the **Rock Paper Scissors** card in **Home Route**, then the user should be navigated to the Game Rules View of the game.
  - On the Game Rules View, users should be able to see the Rules of Rock Paper Scissors Game.
  - When the user clicks on the `Start playing` button, the Game Playing View will be displayed, enabling the user to engage in the Rock Paper Scissors game.
  - Initially, the score displayed should be 0.
  - On the Game Playing View, the user should be able to see the `Rules` button.
  - When the user clicks on the `Rules` button, then the `Rules` pop up should be displayed.
  - When the user clicks on any of the three buttons (rock/paper/scissors), then the Game Results View should be displayed by comparing with computer choice.
  - In the Game Results View, the computer choice should be generated randomly.
  - Click here to view the detailed <a href="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissor-rules-v2.jpg" target="_blank" >Rock Paper Scissor Game Rules</a>
  - In the Game Results View, when the `Play Again` button is clicked, then the user should be navigated to the Game Playing View where the user should be able to play the Rock Paper Scissor game.
  - Below is the example of **Rock Paper Scissors Game**

 <br/>
 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif" alt="emoji game output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>
 
- **Memory Matrix Route**
  - When the user clicks on the **Memory Matrix** card in **Home Route**, then the user should be navigated to the Game Rules View of the game.
  - On the Game Rules View, users should be able to see the Rules of Memory Matrix game.
  - When the user clicks on the `Start playing` button, the Game Playing View will be displayed, enabling the user to engage in the Memory Matrix game.
  - Initially, the level displayed should be 1.
  - On the Game Playing View, the user should be able to see the `Rules` button.
  - When the user clicks on the `Rules` button, then the `Rules` pop up should be displayed.
  - Click here to view the detailed <a href="https://assets.ccbp.in/frontend/content/react-js/memory-matrix-rules.jpg" target="_blank" >Memory Matrix Game Rules</a>.
  - <a href="https://www.npmjs.com/package/rc-progress" target="_blank">Progress bar</a> should be displayed in the Game Results View based on the user completion level
  - In the Game Results View, when the `Play Again` button is clicked, then the user should be navigated to the Game Playing View where the user should be able to play the Memory Matrix game.
  - Below is the example of **Memory Matrix Game**
  
 <br/>
 <div style="text-align: center;">
     <img src="https://new-assets.ccbp.in/frontend/content/react-js/minigames-miniproject/memory-matrix-output.png" alt="memory matrix game output" style="max-width:70%;max-height:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>
  
- **Card-Flip Memory Game Route**
  - When the user clicks on the **Card-Flip Memory Game** card in **Home Route**, then the user should be navigated to the Game Rules View of the game.
  - On the Game Rules View, users should be able to see the Rules of Card-Flip Memory Game.
  - When the user clicks on the `Start playing` button, the Game Playing View will be displayed, enabling the user to engage in the Card-Flip Memory Game.
  - Initially, the score displayed should be 0.
  - On the Game Playing View, the user should be able to see the `Rules` button.
  - When the user clicks on the `Rules` button, then the `Rules` pop up should be displayed.  
  - Click here to view the detailed <a href="https://assets.ccbp.in/frontend/content/react-js/card-flip-rules.jpg" target="_blank" >Card-Flip Memory Game Rules</a>.  
  - In the Game Results View, when the `Play Again` button is clicked, then the user should be navigated to the Game Playing View where the user should be able to play the Card-Flip Memory game.
  - Below is the example of **Card-Flip Memory Game**

 <br/>
 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/card-flip-memory-game-output.gif" alt="memory matrix game output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>
  
- Users should be able to view and use the website responsively on a mobile, tablet, desktop devices.

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- You can use React Modal third party library to display modal.
  - react-modal <a href="https://www.npmjs.com/package/react-modal" target="_blank">Documentation</a>
- You can use RC Progress third party library for showing the progress bar.
  - rc-progress <a href="https://www.npmjs.com/package/rc-progress" target="_blank">Documentation</a>
- You can use Math.floor() function that returns the largest integer less than or equal to a given number

```js
console.log(Math.floor(5.95)) // output: 5
```

</details>

### Important Note

<details>
<summary>Click to view</summary>
<br/>

**The following instructions are required for the tests to pass.**

- **Note:**

  - For Mini Projects, you have to use HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled-components.

  - Refer to the below Example for the usage of data-testid in the HTML elements.
    - Example: `<p data-testid="timer"></p>`.

- **Routes**

  - The `Home` route should consist of `/` in the URL path

  - The `Emoji Game` route should consist of `/emoji-game` in the URL path

  - The `Memory Matrix` route should consist of `/memory-matrix` in the URL path

  - The `Rock Paper Scissor` route should consist of `/rock-paper-scissor` in the URL path

  - The `Card-Flip Memory Game` route should consist of `/card-flip-memory-game` in the URL path

- **Home Route**

  - The Emoji Game image should consist of alt attribute value as `emoji game`

  - The Memory Matrix image should consist of alt attribute value as `memory matrix`

  - The Rock Paper Scissor image should consist of alt attribute value as `rock paper scissor`

  - The Card-Flip Memory Game image should consist of alt attribute value as `card flip memory game`

- **Emoji Game Route**

  - The Emoji image in Navbar should consist of alt attribute value as `emoji logo`.

  - The Emoji Game image in the Game Rules View should consist of alt attribute value as `emoji game`.

  - The `BiArrowBack` icon from react-icons should be used for the **Back Icon** button.

  - The Close button in the modal should consist of the data-testid attribute value as `close`.

  - The `CgClose` icon from react-icons should be used for the **Close Icon** button.

  - The Emoji images in the game should consist of alt attribute value as shown in the given below image with appropriate text in the `emojisArray`.

  - <img src="https://new-assets.ccbp.in/frontend/content/react-js/minigames-miniproject/emoji-game-emojis.png" alt="emoji names" style="width:400px, height:400px" />

    ```js
    const emojisArray = ['face with laughing', 'face with stuck out tongue', 'face with hugs', 'face with silence', 'grinning face', 'smiling face with heart eyes', 'grinning face with sweat', 'face with head bandage', 'face with stuck out tongue and winked eye', 'face with mask', 'smiling face with star eyes', 'laughing face with hand in front of mouth']
    ```

  - Won state in the Game Result View should consist of a HTML image element with alt attribute value as `won`.

  - Loss state in the Game Result View should consist of a HTML image element with alt attribute value as `lose`.

- **Rock Paper Scissor Route**

  - The `BiArrowBack` icon from react-icons should be used for the **Back Icon** button.

  - The Rock Paper Scissor image in the Game Rules View should consist of alt attribute value as `rock paper scissor`.

  - The game playing state should consist of three HTML button elements with the data-testid attribute values as `rockButton`, `scissorButton`, and `paperButton` respectively.

  - The game playing state should consist of three HTML image elements with alt attribute values as `rock`, `scissor`, and `paper` respectively.

  - The Close button in the modal should consist of the data-testid attribute value as `close`.

  - The `CgClose` icon from react-icons should be used for the **Close Icon** button.

  - Won state in the Game Result View should consist of two HTML image elements with alt attribute values as `won emoji` and `Smiling face with star eyes` respectively.

  - Draw state in the Game Result View should consist of two HTML image elements with alt attribute values as `draw emoji` and `Face without mouth` respectively.

  - Loss state in the Game Result View should consist of two HTML image elements with alt attribute values as `lose emoji` and `Frowning face` respectively.

  - The Game Result View should consist of two HTML image elements with any of the two alt attribute values of `rock`, `paper` and `scissor` with appropriate `You` and `Opponent` choice.

- **Memory Matrix Route**

  - The `BiArrowBack` icon from react-icons should be used for the **Back Icon** button.

  - The `N` highlighted buttons in each level of the Memory Matrix should consist of the data-testid attribute value as `highlighted`, where N starts from 3.

  - The `N * N - N` not highlighted buttons in each level of the Memory Matrix should consist of the data-testid attribute value as `notHighlighted`, where N starts from 3.

  - The Close button in the modal should consist of the data-testid attribute value as `close`.

  - The `CgClose` icon from react-icons should be used for the **Close Icon** button.

  - The Emoji images in the Game Result View should consist of alt attribute value as shown in the given below image with appropriate text in the `emojisArray`.

  - <img src="https://new-assets.ccbp.in/frontend/content/react-js/minigames-miniproject/memory-matrix-emojis.png" alt="emoji names" style="width:400px, height:400px" />

  ```js
  const emojisArray = ['neutral face', 'grimacing face', 'slightly smiling face', 'grinning face with big eyes', 'grinning face with smiling eyes', 'beaming face with smiling eyes', 'grinning face', 'smiling face with sunglasses']
  ```

- **Card-Flip Memory Game Route**

  - The `BiArrowBack` icon from react-icons should be used for the **Back Icon** button.

  - The animals and birds images in the game should consist of alt attribute values from the `cardsData` given in the `App.js` file.

  - The data-testid attribute value of each button in the game is the alt attribute value of the image in the button which is given in the `App.js` file.

  - The Close button in the modal should consist of the data-testid attribute value as `close`.

  - The `CgClose` icon from react-icons should be used for the **Close Icon** button.

  - Won state in the Game Result View should consist of a HTML image element with alt attribute value as `grinning face with big eyes`.

  - Loss state in the Game Result View should consist of a HTML image element with alt attribute value as `neutral face`.

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Click to view the additional functionality that can be added</summary>

- **Emoji Game Route**

  - Add `Top Score` to the game.
  - Initially, the `Top Score` displayed should be 0.
  - When the game is over, If the user has scored 9 then the `Top Score` should be displayed as 9.
  - This process should be repeated whenever the user score crosses the `Top Score`.
  - Maintain the `Top Score` in Local Storage.

- **Rock Paper Scissor Route**

  - In the result view of the game, the winner should be highlighted.

- **Memory Matrix Route**

  - Add `Max Level` to the game.
  - Initially, the `Max Level` displayed should be 0.
  - When the game is over, If the user level is 3 then the `Max Level` should be displayed as 3.
  - This process should be repeated whenever the user level is crossed the `Max Level`.
  - Maintain the `Max Level` in Local Storage.

- **Card-Flip Memory Game Route**

  - Add `Lowest Flip Count` to the game.
  - Initially, the `Lowest Flip Count` displayed should be 0.
  - When the game is over, if the user Card Flips count is 15 then the `Lowest Flip Count` should be displayed as 15.
  - This process should be repeated whenever the user card flips are lesser than the `Lowest Flip Count`.
  - Maintain the `Lowest Flip Count` in Local Storage.

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
