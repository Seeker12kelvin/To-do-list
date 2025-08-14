const addnotes = document.getElementById("add-notes")
const nameDiv = document.querySelector(".name-div")
const noteName = document.getElementById("name")
const doneBtn = document.getElementById("done")
const bloThree = document.querySelector(".aside-box")
const saveBtn = document.getElementById('save-Btn')
nameDiv.style.display = 'none'
let number = 0
const allTexts = []
let noteId = null

function add() {
  nameDiv.style.display = "flex"
}

doneBtn.addEventListener('click', function() {

  const btnId = "button" + number++
  const divId = "div" + number++
  const btn = document.createElement('button')
  btn.innerText = noteName.value
  btn.classList.add('mess')
  btn.id = btnId

  addnotes.appendChild(btn)
  nameDiv.style.display = 'none'
  noteName.value = ""
  allTexts.push({name: noteName.value, id: btnId, divId: divId, text: ""})

  btn.addEventListener('click', function() {
    noteId = btnId

    const get = allTexts.find(n => n.id === btnId)
      if(get){
        bloThree.innerHTML = `<div class="aside-3"><div class="write" contenteditable="true" id="${get.divId}">${get.text}</div> </div>`
      }
  })
})

saveBtn.addEventListener('click', function() {
  const update = allTexts.find(n => n.id === noteId)
  if (update){
    const cDiv = document.getElementById(update.divId)
    if(cDiv) {
      update.text = cDiv.innerText
    }
  }
})