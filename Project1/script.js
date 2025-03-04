document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".bucket-list li");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("completed");
        });
    });

    const addButton = document.getElementById("addButton");
    const newItemInput = document.getElementById("newItem");
    const bucketList = document.getElementById("bucketList");

    addButton.addEventListener("click", () => {
        const itemText = newItemInput.value.trim();
        if (itemText !== "") {
            const newLi = document.createElement("li");
            newLi.innerHTML = `<span class="icon">⭐</span> ${itemText}`;
            newLi.addEventListener("click", () => {
                newLi.classList.toggle("completed");
            });
            bucketList.appendChild(newLi);
            newItemInput.value = "";
        }
    });

    // Add "Enter" key functionality
    newItemInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
