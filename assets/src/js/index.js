// Version : 1.0
// Developer : @HAMEDPYN
// Date : 08 / 16 / 2023 | Wed 10:03 P.M

// Selecting DOM Elements

// user selected Image
let usersField = document.querySelector('#usersField img');
// computer random selected Image
let computerField = document.querySelector('#computerField img');
// result text
let resultText = document.querySelector('#resultText');
// Game options elements
let gamesOption = document.querySelectorAll('.options');
// Array of available images 
let imagesArray = ['assets/Images/rock.png', 'assets/Images/paper.png', 'assets/Images/scissors.png'];
// CPU score element
let cpuResult = document.querySelector('#computerField span span');
// User score element
let userResult = document.querySelector('#usersField span span');

// Adding click event listeners to game options
gamesOption.forEach(item => {
    item.addEventListener('click', (e) => {
        // Adding 'active' class to the clicked option
        item.classList.add('active');
        // Getting the image src of the clicked option
        let ImagesSrc = e.target.src;
        // Setting the user's selection field with the clicked image
        usersField.src = ImagesSrc;
        // Displaying "Wait..." as the result text
        resultText.textContent = 'Wait...';
        // Resetting the result text color
        resultText.style.color = '';

        setTimeout(() => {
            // Generating a random index to select a random image from the array
            let randomImg = Math.floor(Math.random() * 3);
            // Setting the computer's selection field with the randomly selected image
            computerField.src = imagesArray[randomImg];
            // Calling the game status function to determine the result
            gamesStatus(computerField.src, usersField.src, resultText);
        }, 1000);
    });
});

let cpuCounter = 0; // Counter for CPU's wins
let userCounter = 0; // Counter for user's wins

function gamesStatus(cpu, user, text) {
    // ro = Rock
    // pa = Paper
    // sc = Scissors
    if (cpu === user) {
        text.textContent = ' DRAW!!';
        text.style.color = 'Black';

    } else if (user.includes('ro') && cpu.includes('pa')) {
        text.textContent = 'Computer Won!';
        text.style.color = 'red';
        cpuCounter++;
        cpuResult.innerHTML = cpuCounter;

    } else if (user.includes('ro') && cpu.includes('sc')) {
        text.textContent = 'User Won!';
        text.style.color = '#1ee21e';
        userCounter++;
        userResult.innerHTML = userCounter;

    } else if (user.includes('pa') && cpu.includes('ro')) {
        text.textContent = 'User Won!';
        text.style.color = '#1ee21e';
        userCounter++;
        userResult.innerHTML = userCounter;

    } else if (user.includes('pa') && cpu.includes('sc')) {
        text.textContent = 'Computer Won!';
        text.style.color = 'red';
        cpuCounter++;
        cpuResult.innerHTML = cpuCounter;

    } else if (user.includes('sc') && cpu.includes('ro')) {
        text.textContent = 'Computer Won!';
        text.style.color = 'red';
        cpuCounter++;
        cpuResult.innerHTML = cpuCounter;

    } else if (user.includes('sc') && cpu.includes('pa')) {
        text.textContent = 'User Won!';
        text.style.color = '#1ee21e';
        userCounter++;
        userResult.innerHTML = userCounter;
    }
}