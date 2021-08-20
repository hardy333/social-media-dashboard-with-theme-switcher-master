const themeSwither = document.querySelector(".theme-switcher");
const themeName = document.querySelector(".theme-name");
const togglerBall = document.querySelector(".theme-switcher .ball");

console.log(togglerBall);
console.log(themeName);


themeSwither.addEventListener("click", () => {
    if(document.body.classList.contains("light-theme")){
        themeName.textContent = "Light Mode";
    }else{
        themeName.textContent = "Dark Mode";
    }
    document.body.classList.toggle("light-theme");
    togglerBall.classList.toggle("on");

})