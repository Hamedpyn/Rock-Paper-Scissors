
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
    });
});