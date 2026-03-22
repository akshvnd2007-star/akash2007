// menu
function toggleMenu(){
document.querySelector("nav").classList.toggle("active");
}

// theme
function toggleTheme(){
document.body.classList.toggle("light");
}

// typing
const text="Aspiring Developer | Tech Enthusiast";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}}
typing();

// modal
function openModal(img){
document.getElementById("modal").style.display="block";
document.getElementById("modalImg").src=img.src;
}
function closeModal(){
document.getElementById("modal").style.display="none";
}

function openTab(tabName) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
}
