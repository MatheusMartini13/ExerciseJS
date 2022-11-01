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
  mainLabel.innerText = "Ferramenta: "
  mainLabel.id = "label" + count 
  newSection.append(mainLabel)
  const mainInput = document.createElement("input")
  mainInput.name = "inputExp"
  mainInput.id = "input" + count
  newSection.append(mainInput)

// input radio

  const titleRadio = document.createElement("label")
  titleRadio.id = "title" + count
  titleRadio.innerText  = "Tempo de Experiência: "


  const radioInput1 = document.createElement("input")
  radioInput1.type = "radio"
  radioInput1.name = "inputRadio1" + count
  radioInput1.id = "radio1" + count
  radioInput1.value = "0-2 anos"
  radioInput1.checked = "true"

  const labelRadio1 = document.createElement("label")
  labelRadio1.id = "radio1" + count
  labelRadio1.innerText = "0-2 anos"

  const radioInput2 = document.createElement("input")
  radioInput2.type = "radio"
  radioInput2.name = "inputRadio1" + count
  radioInput2.id = "radio1" + count
  radioInput2.value = "2-5 anos"
  const labelRadio2 = document.createElement("label")
  labelRadio2.id = "radio1" + count
  labelRadio2.innerText = "2-5 anos"

  const radioInput3 = document.createElement("input")
  radioInput3.type = "radio"
  radioInput3.name = "inputRadio1" + count
  radioInput3.id = "radio1" + count
  radioInput3.value = "5+ anos"
  const labelRadio3 = document.createElement("label")
  labelRadio3.id = "radio1" + count
  labelRadio3.innerText = "5+ anos"


  const mainButton = document.createElement("button")
  mainButton.name = "button" + count
  mainButton.id = "button" + count
  mainButton.innerText = "Remove Experience"
  mainButton.value = count
  mainButton.addEventListener("click", removeExperience)

  newSection.append(document.createElement("br"))
  newSection.append(document.createElement("br"))
  newSection.append(titleRadio)
  newSection.append(document.createElement("br"))
  newSection.append(radioInput1)
  newSection.append(labelRadio1)
  newSection.append(document.createElement("br"))
  newSection.append(radioInput2)
  newSection.append(labelRadio2)
  newSection.append(document.createElement("br"))
  newSection.append(radioInput3)
  newSection.append(labelRadio3)
  newSection.append(document.createElement("br"))
  newSection.append(document.createElement("br"))
  newSection.append(mainButton)
  newSection.append(document.createElement("br"))
  newSection.append(document.createElement("br"))
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
  const totalExperienceTime = document.querySelectorAll("input[type='radio']:checked")

  const candidate = {}
  candidate.name = name
  candidate.experience = []
  candidate.experienceTime = []
  experiences.forEach(function (lis){
    candidate.experience.push(lis.value)
  })
  totalExperienceTime.forEach(function (lis){
    candidate.experienceTime.push(lis.value)
  })
  candidates.push(candidate)
  document.querySelectorAll("input").forEach(function (item){
    item.value = ""
  })
  document.getElementById("newArea").innerHTML = "<br>"
}

function showCandidates(ev){
  ev.preventDefault()
  candidates.forEach(function (candidate){
    let messageCandidate = candidate.name + "\n"
    let experiencesCount = 0;
    candidate.experience.forEach(function (item1){
    messageCandidate += "Ferramenta: " + item1
    messageCandidate += ".\nTempo de experiência com a ferramenta: " + candidate.experienceTime[experiencesCount] + "\n\n"
    experiencesCount +=1;
    })
    alert(messageCandidate)
  })
}

button01.addEventListener("click", createExperience)
button02.addEventListener("click", sendCandidate)
button03.addEventListener("click", showCandidates)
