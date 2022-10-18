const button01 = document.getElementById('addExperience')
const button02 = document.getElementById('sendCandidate')
const button03 = document.getElementById('showCandidates')
let count = 0
let candidates = []

function removeExperience(ev){
  ev.preventDefault()
  const sectionDelete = ev.currentTarget.parentNode
  const btnvalue = ev.currentTarget.value
  // const inputDelete = document.getElementById('input' + btnvalue)
  // const btnDelete = document.getElementById('button' + btnvalue)
  // const labelDelete = document.getElementById('label' + btnvalue)
  document.getElementById(btnvalue).remove()
}

function createExperience(ev) {
  ev.preventDefault()
  count += 1
  const changesToDo = document.getElementById("newArea")
  console.log(changesToDo)
  const newSection = document.createElement("section")
  newSection.id = count
  changesToDo.append(newSection)
  const mainLabel = document.createElement("label")
  mainLabel.innerText = "Experiência: "
  mainLabel.id = "label" + count 
  newSection.append(mainLabel)
  const mainInput = document.createElement("input")
  mainInput.name = "inputExp"
  mainInput.id = "input" + count
  newSection.append(mainInput)
  const mainButton = document.createElement("button")
  mainButton.name = "button" + count
  mainButton.id = "button" + count
  mainButton.innerText = "Remove Experience"
  mainButton.value = count
  mainButton.addEventListener("click", removeExperience)
  newSection.append(mainButton)
  const breakLine = document.createElement("br")
  newSection.append(breakLine)
  const breakLine2 = document.createElement("br")
  newSection.append(breakLine2)
  if (count === 1) {
    document.getElementById("breakLine01").remove()    
  }
}

function sendCandidate(ev){
  ev.preventDefault()
  const name = document.querySelector("input[name='name']").value
  if (name === "") {
    alert("The name is empty!")
    return
  }
  const experiences = document.querySelectorAll("input[name='inputExp']")
  const candidate = {}
  candidate.name = name
  candidate.experience = []
  experiences.forEach(function (lis){
    candidate.experience.push(lis.value)
  })
  candidates.push(candidate)
}

function showCandidates(ev){
  ev.preventDefault()
  candidates.forEach(function (lis){
    
  })
  alert(candidates)
}

button01.addEventListener("click", createExperience)
button02.addEventListener("click", sendCandidate)
button03.addEventListener("click", showCandidates)
