// 1

// document.getElementById("username").addEventListener("input", function(event) {
//     var input = event.target.value;
//     var filteredInput = "";
    
//     for (var i = 0; i < input.length; i++) {
//         if (isNaN(input[i])) {
//         filteredInput += input[i];
//         }
//     }
    
//     event.target.value = filteredInput;
// });

// 2


// var modal = document.getElementById("myModal");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");


// openBtn.addEventListener("click", function() {
//     modal.style.display = "block";
// });


// closeBtn.addEventListener("click", function() {
//     modal.style.display = "none";
// });


// window.addEventListener("click", function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });

// 3

// document.addEventListener("DOMContentLoaded", function() {
//     var field = document.querySelector("#field");
//     var ball = document.querySelector("#ball");
//     var ballRadius = ball.offsetWidth / 2;
//     var fieldRect = field.getBoundingClientRect();
  
//     field.addEventListener("click", function(event) {
//       var clickX = event.clientX - fieldRect.left;
//       var clickY = event.clientY - fieldRect.top;
  
//       var maxX = fieldRect.width - ballRadius;
//       var maxY = fieldRect.height - ballRadius;
  
//       var targetX = Math.max(ballRadius, Math.min(maxX, clickX));
//       var targetY = Math.max(ballRadius, Math.min(maxY, clickY));
  
//       ball.style.transform = `translate(${targetX - ballRadius}px, ${targetY - ballRadius}px)`;
//     });
// });

// 4

// var lights = document.getElementsByClassName("light");
// var currentLightIndex = 0;
        
// function changeLight() {
//     lights[currentLightIndex].style.backgroundColor = "gray";
//     currentLightIndex = (currentLightIndex + 1) % lights.length;
//     lights[currentLightIndex].style.backgroundColor = getColor(currentLightIndex);
// }

// function getColor(index) {
//     if (index === 0) {
//         return "red";
//     } else if (index === 1) {
//         return "yellow";
//     } else if (index === 2) {
//         return "green";
//     }
// }

// 5

// var previousBook = null;

// function changeColor(book) {
//     if (previousBook) {
//         previousBook.style.backgroundColor = '';
//     }
//     book.style.backgroundColor = 'orange';
//     previousBook = book;
// }

// 6

// function checkTooltipPosition(tooltipElement) {
//     const tooltipRect = tooltipElement.getBoundingClientRect();
//     const windowTop = 0;
    
//     if (tooltipRect.top < windowTop) {
//         tooltipElement.querySelector(".tooltiptext").style.top = "40px";
//     }
// }

// const tooltips = document.querySelectorAll(".tooltip");
// tooltips.forEach((tooltip) => {
//     checkTooltipPosition(tooltip);
// });