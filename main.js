

const navbar = document.querySelector(".nav2");
const btnclose = document.querySelector(".btn-close");
const btnOpen = document.querySelector("#btn-open")


window.addEventListener("DOMContentLoaded",function(){
    navbar.style.display = "none";
    btnclose.addEventListener("click",()=>{
        navbar.style.display = "none";
    })
    btnOpen.addEventListener("click",()=>{
        navbar.style.display = "flex";
        navbar.style.top = "0px";
        navbar.style.height= "400px";
        navbar.style.transition = "all 0.5s ease-in-out";
    })
})

let counter = 0;

function incrementCounter(){
    counter++;
    document.querySelector(".counter").innerHTML = counter;

    if (counter === 50) {
        clearInterval(counterInterval);
    }
}
const counterInterval = setInterval(incrementCounter, 100);


// about scroll
// document.getElementById("about-link").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default anchor click behavior
//     const aboutSection = document.getElementById("about");
    
//     // Smooth scroll to the About section
//     aboutSection.scrollIntoView({
//         behavior: "smooth"
//     });
// });


