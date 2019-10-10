document.addEventListener("click", afterclick);
function afterclick(){
    let randomImg = document.createElement("img");
    let min = 100;
    let max = 500;
    let randomizer = Math.floor(Math.random() * max) + min;
    randomImg.src = "https://picsum.photos/id/" + randomizer + "/200/300";
    randomImg.addEventListener("error", clickAlert);
    randomImg.addEventListener("load", change);   
    randomImg.alt = "Alternative image";
}
function clickAlert(){
    alert("No image could be loaded. Please click again.");
}
function change(appender){
    main.appendChild(appender.target);
}  