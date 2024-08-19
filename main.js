let board = document.querySelector(".board")
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let box = document.createElement("div");
        (i + j) % 2 ? box.classList.add("blueBox") : box.classList.add("whiteBox")
        board.appendChild(box)
        let square=document.createElement("div")
        if ((i+j)%2===0 && i>4){
            square.classList.add("p-black")
        }
        else if ((i+j)%2===1 && i<3){
            square.classList.add("p-white")
        }
        box.appendChild(square)
        
    
    }
}
