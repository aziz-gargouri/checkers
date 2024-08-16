let board = document.querySelector(".board")
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let box = document.createElement("div");
        (i + j) % 2 ? box.classList.add("blueBox") : box.classList.add("whiteBox")
        board.appendChild(box)
    }
}