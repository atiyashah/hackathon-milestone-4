




window.addEventListener("load", ()=>{


 let name = localStorage.getItem("name")
 let desig = localStorage.getItem("desig")
let phone = localStorage.getItem("phone")
 let email = localStorage.getItem("email")
let add = localStorage.getItem("add")
 let pInfo = localStorage.getItem("pInfo")
let degree = localStorage.getItem("degree")
let degree2 = localStorage.getItem("degree2")
let degree3 = localStorage.getItem("degree3")
 let pass = localStorage.getItem("pass")
 let pass2 = localStorage.getItem("pass2")
 let pass3 = localStorage.getItem("pass3")
let uni = localStorage.getItem("uni")
let uni2 = localStorage.getItem("uni2")
let uni3 = localStorage.getItem("uni3")
let skill1 = localStorage.getItem("skill1")
let skill2  =  localStorage.getItem("skill2")
 let skill3 =  localStorage.getItem("skill3")
 let styear =  localStorage.getItem("styear")
 let endyear = localStorage.getItem("endyear")
 let comp = localStorage.getItem("comp")
 let companylocation = localStorage.getItem("companylocation")
let jobtitle  = localStorage.getItem("jobtitle")
 let achv = localStorage.getItem("achv")
 let picture = localStorage.getItem("profile_pic")


let resName:any = document.getElementById("resName")
resName.textContent = name
let resDesig:any = document.getElementById("resDesig")
resDesig.textContent = desig
let resPhone:any = document.getElementById("resPhone")
resPhone.textContent = phone
let resEmail:any = document.getElementById("resEmail")
resEmail.textContent = email
let resAdd:any = document.getElementById("resAdd")
resAdd.textContent = add
let resPinfo:any = document.getElementById("resPinfo")
resPinfo.textContent = pInfo
let resPass:any = document.getElementById("resPass")
resPass.textContent = pass
let resDegree:any = document.getElementById("resDegree")
resDegree.textContent = degree
let resIns:any = document.getElementById("resIns")
resIns.textContent = uni
let resPass2:any = document.getElementById("resPass2")
resPass2.textContent = pass2
let resDegree2:any = document.getElementById("resDegree2")
resDegree2.textContent = degree2
let resIns2:any = document.getElementById("resIns2")
resIns2.textContent = uni2
let resPass3:any = document.getElementById("resPass3")
resPass3.textContent = pass3
let resDegree3:any = document.getElementById("resDegree3")
resDegree3.textContent = degree3
let resIns3:any = document.getElementById("resIns3")
resIns3.textContent = uni3
let resS1:any = document.getElementById("resS1")
resS1.textContent = skill1
let resS2:any = document.getElementById("resS2")
resS2.textContent = skill2
let resS3:any = document.getElementById("resS3")
resS3.textContent = skill3

let resStartYear:any = document.getElementById("resStartYear")
resStartYear.textContent = styear
let resEndyear:any = document.getElementById("resEndyear")
resEndyear.textContent = endyear
let resTitle:any = document.getElementById("resTitle")
resTitle.textContent = jobtitle
let resComp:any = document.getElementById("resComp")
resComp.textContent = comp

let resLocation:any = document.getElementById("resLocation")
resLocation.textContent = companylocation



let resJobTitle:any = document.getElementById("resJobTitle")
resJobTitle.textContent = jobtitle


let resAch:any = document.getElementById("resAch")
resAch.textContent = achv
let resImg:any = document.getElementById("resImg")
resImg.src = picture

})









let print_btn = document.getElementById("print_btn")
print_btn?.addEventListener("click", ()=>{
    window.print()
})

//////////////////////////edit button//////////////////////////
let edit_btn = document.getElementById("edit_btn")
edit_btn?.addEventListener("click", ()=>{
    window.history.back()
})

