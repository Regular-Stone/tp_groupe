let heart_button = document.querySelector('#heart');
let counter = 0;
let uwu = document.createElement('img');
uwu.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/193px-Stylized_uwu_emoticon.svg.png";
uwu.alt = "uwu";
uwu.style.height = "150px";
uwu.style.width = "300px";
uwu.style.position = "absolute";
uwu.style.top = "20%";
uwu.style.left = `20%`;
let uwu2 = document.createElement('img');
uwu2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/193px-Stylized_uwu_emoticon.svg.png";
uwu2.alt = "uwu";
uwu2.style.height = "150px";
uwu2.style.width = "300px";
uwu2.style.position = "absolute";
uwu2.style.top = "20%";
uwu2.style.right = `20%`;




heart_button.addEventListener("click", (e) => {
    if(counter == 0){
        uwu.style.display = "inline";
        uwu2.style.display = "inline";
        heart_button.style.transform = "rotate(90deg)";
        counter ++;
    } else if (counter == 1) {
        heart_button.style.transform = "rotate(180deg)";
        counter ++;
    } else if ( counter == 2 ){
        heart_button.style.transform = "rotate(-90deg)";
        counter ++;
    } else {
        heart_button.style.transform = "rotate(0deg)";
        counter = 0;
        uwu.style.display = "none";
        uwu2.style.display = "none";
    }
    if(window.innerHeight < window.innerWidth && counter != 0 && window.innerWidth >= 1000){
        document.body.prepend(uwu);
        document.body.prepend(uwu2);
    }
})