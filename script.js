//wait for DOM  to load
document.addEventListener("DOMContentLoaded", function () {
    //Task 1: change text content dynamically
    const changeTextBtn = document.getElementById("change-txt-btn");
    const introText = document.getElementById("intro-text");

    changeTextBtn.addEventListener("click", function () {
        introText.textContent = "Text changed using javascript!";
    });

    //Task 2:Modify CSS styles via javascript
    const changecolorBtn = document.getElementById("change-color-btn");
    const heading = document.getElementById("main-heading");

    changecolorBtn.addEventListener("click", function () {
        heading.style.color =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        heading.style.backgroundColor = "black";
        heading.style.padding = "10px";
        heading.style.borderRadius = "5px";
    });

    //Task 3: Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById("toggled-element-btn");
    const elementContainer = document.getElementById("element-container");

    toggleElementBtn.addEventListener("click", function () {
        if (elementContainer.style.display === "none") {
            elementContainer.style.display = "block";
            toggleElementBtn.textContent = "Hide Element";
        } else {
            elementContainer.style.display = "none";
            toggleElementBtn.textContent = "Show Element";
        }
    });
    const addItemBtn = document.getElementById("add-item-btn");
    const list = document.getElementById("list");
    let itemCount = 2;

    addItemBtn.addEventListener("click", function () {
        itemCount++;
        const newItem = document.createElement("Li");
        newItem.textContent = `item ${itemCount} (added dynamically)`;
        list.appendChild(newItem);
    });
});
