const addnotes = document.getElementById("add-notes")
const nameDiv = document.querySelector(".name-div")
const noteName = document.getElementById("name")
const doneBtn = document.getElementById("done")
const bloThree = document.querySelector(".aside-3")
const saveBtn = document.getElementById('save-btn')
nameDiv.style.display = 'none'
let number = 0
let unique = []

function add() {
  nameDiv.style.display = "flex"
}

doneBtn.addEventListener("click", function() {
  let uniqueClass = "note-btn" + number++
  if (noteName.value === ""){
    noteName.value = ""
  } else {
    let uniqueClass = "note-btn" + number++
    addnotes.innerHTML += `<button class="mess" id="${uniqueClass}">${noteName.value}</button>`
    const unname = document.getElementById(uniqueClass)
    unique.push({name: noteName.value, id: unname, texts: []})
    nameDiv.style.display = 'none'
    noteName.value = ""
  }

  document.getElementById(uniqueClass).addEventListener('click', function() {
    let uniqueId = "note-text" + number++
    document.querySelector('.aside-box').innerHTML = `<div class="aside-3">
                          <div contenteditable="true" class="write" id="${uniqueId}" style="color: white;">
                            
                          </div>
                        </div>`
    if (update){
      for (let nameText of unique.noteName.value) {
        let uniqueId = "note-text" + number++
        for (let textArray of nameText.texts){
          document.getElementById(uniqueId).innerHTML = textArray
        }
      }
    }
  })


})

saveBtn.addEventListener('click', function() {
  const uniquetext = document.getElementById(uniqueId).innerText
  unique.push(texts.push(uniquetext))
  const update = unique.find(n => n.name === noteName.value)
})