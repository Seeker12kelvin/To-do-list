const addnotes = document.getElementById("add-notes")
const nameDiv = document.querySelector(".name-div")
const namFiv = document.querySelector(".name-FG")
const noteName = document.getElementById("name")
const notNam = document.getElementById("nam")
const doneBtn = document.getElementById("done")
const doneFileBtn = document.getElementById("done-file")
const bloThree = document.querySelector(".aside-box")
const saveBtn = document.getElementById('save-Btn')
nameDiv.style.display = 'none'
namFiv.style.display = 'none'
let number = 0
const allNotes = []

function add() {
  nameDiv.style.display = 'flex'
}

doneBtn.addEventListener('click', function() {
  //incrementing the id so as to not have the same Id
  const btnId = "button" + number++
  const divId = "div" + number++

  //creating the note button
  const btn = document.createElement('button')
  btn.innerText = noteName.value
  btn.classList.add('mess')
  btn.id = btnId

  allNotes.push({name: noteName.value, button: btnId, div: divId, text: ""})

  //adding the note button to the div
  addnotes.appendChild(btn)
  noteName.value = ""
  nameDiv.style.display = 'none'

  //what happens when you click the note button
  btn.addEventListener('click', function() {
    const put = allNotes.find(j => j.button === btnId)
    if(put){
      bloThree.innerHTML = `<div class="aside-3">
                            <div class="write" contenteditable="true" id="${put.div}"> ${put.text}</div>
                          </div>`
    }
    //to connect this button Id to the save button
    noteId = btnId
  })
  
})

saveBtn.addEventListener('click', function() {
  //checking if we can find the button and div Id 
  const update = allNotes.find(r => r.button === noteId)
  if (update){
    const cvd = document.getElementById(update.div)
    if(cvd){
      //if we do find it, update the text in the array with the text written in the div
      update.text = cvd.innerText
    }
  }
})