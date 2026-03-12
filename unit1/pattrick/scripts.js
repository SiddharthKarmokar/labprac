document.getElementById("changeText").addEventListener("click", function(){
    document.getElementById("heading").innerText = "Hello from Siddharth";
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top();
        const screen = window.innerHeight;

        if(position < screen - 100){
            section.classList.add("show")
        }
    });
});


const carousel = document.querySelector(".carousel");

let index = 0;

document.getElementById("next").addEventListener("click", function() {
    index++;
    carousel.style.transform = `translateX(-${index * 600}px)`;
});


document.getElementById("prev").addEventListener("click", function() {
    if(index>0)index--;
    carousel.style.transform = `translateX(-${index * 600}px)`;
});

