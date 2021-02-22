// let toggleIcon = document.querySelector(".toggle-icon");
let toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener("click", () => {
    let navigation = document.querySelector("nav");
    navigation.classList.toggle('active');
    toggleIcon.classList.toggle('active');
});