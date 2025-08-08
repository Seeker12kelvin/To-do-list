const addnotes = document.getElementById("add-notes")
const nameDiv = document.querySelector(".name-div")
const noteName = document.getElementById("name")
const doneBtn = document.getElementById("done")
const bloThree = document.querySelector(".aside-3")
nameDiv.style.display = 'none'

let texts = []

function add() {
  nameDiv.style.display = "flex"
}

doneBtn.addEventListener("click", function() {
  if (noteName.value === ""){
    nameDiv.style.display = 'none'
  } else {
    addnotes.innerHTML += `<button id="mess-note" onclick="create()">${noteName.value}</button>`
    nameDiv.style.display = 'none'
    noteName.value = " "
  }
})

function create() {
  const noteBoard = `<div class="aside-3">
                        <div>
                          <input id="message" type="text">
                        </div>
                      </div>`
  texts.push(noteBoard)
  for (let i = 0; i < texts.length; i++) {
    document.querySelector(".aside-box").innerHTML = texts[i]
  }
}