function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        input.style.borderColor = "red";
        return;
    }
    input.style.borderColor = "#ddd";

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <div class="task-btns">
            <button class="done" onclick="markDone(this)">✔</button>
            <button class="delete" onclick="removeTask(this)">✖</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function markDone(btn) {
    btn.parentElement.parentElement.classList.toggle("completed");
}

function removeTask(btn) {
    btn.parentElement.parentElement.remove();
}
