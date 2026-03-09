const grid = document.getElementById("grid")

const taskCount = 25

for(let i=0;i<taskCount;i++){

    const task = document.createElement("div")
    task.className = "task"

    const input = document.createElement("input")
    input.placeholder = "目標"

    const savedText = localStorage.getItem("text"+i)
    if(savedText) input.value = savedText

    input.oninput = () =>{
        localStorage.setItem("text"+i,input.value)
    }

    const circle = document.createElement("div")
    circle.className = "circle"

    const saved = localStorage.getItem("circle"+i)
    if(saved=="1") circle.classList.add("done")

    circle.onclick = () =>{

        circle.classList.toggle("done")

        if(circle.classList.contains("done")){
            localStorage.setItem("circle"+i,"1")
        }else{
            localStorage.setItem("circle"+i,"0")
        }

    }

    task.appendChild(input)
    task.appendChild(circle)

    grid.appendChild(task)

}

function clearAll(){

    if(confirm("全部リセットしますか？")){

        localStorage.clear()
        location.reload()

    }

}
