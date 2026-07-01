# 🚀 Scrimba Solo Project Series 3: Password Generator

For the third solo project in the series, I built a random password generator. While the previous project was about basic click events, this one pushed me to work with actual logic, data arrays, and loops in **JavaScript**.

## What I Learned & Practiced

The goal here was to take a single user action (clicking a button) and use JavaScript to dynamically generate and display unique strings of text.

### Key Concepts Covered:
* **Arrays & Constants:** Storing all possible characters—uppercase letters, lowercase letters, numbers, and symbols—in a single `const` array.
* **For Loops:** Using loops to run through a piece of code multiple times based on the desired password length.
* **Math.random():** Combining `Math.random()` and `Math.floor()` to pick completely random indexes from my character array.
* **DOM Manipulation:** Utilizing `textContent` to instantly push the generated passwords into the UI boxes.

## How It Works

When you click the "Generate Passwords" button, a JavaScript function triggers a loop. In every iteration of that loop, `Math.random()` grabs a random character out of the master constant array and appends it to a string. Once the loop finishes building the password, the script updates the text on the screen. 

> 🎨 **Design Note:** Just like the previous projects, the visual layout was inspired by AI-generated UI concepts, allowing me to skip the brainstorming phase and focus entirely on mastering loops and array manipulation.

## Deployment

This project is deployed and ready to use on **Netlify**.

[🔗 Generate a Password Here](https://secret-seed.netlify.app/)
