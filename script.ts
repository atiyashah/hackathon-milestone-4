let myName:any = document.getElementById('name')
let designa:any = document.getElementById('desig')
let phone:any = document.getElementById('phone')
let email:any = document.getElementById('email')
let add:any = document.getElementById('add')
let pInfo:any = document.getElementById('pInfo')
let pass:any = document.getElementById('pass')
let pass2:any = document.getElementById('pass2')
let pass3:any = document.getElementById('pass3')
let degree:any = document.getElementById('degree')
let degree2:any = document.getElementById('degree2')
let degree3:any = document.getElementById('degree3')
let uni:any = document.getElementById('uni')
let uni2:any = document.getElementById('uni2')
let uni3:any = document.getElementById('uni3')
let skill1:any = document.getElementById('skill1')
let skill2:any = document.getElementById('skill2')
let skill3:any = document.getElementById('skill3')
let styear:any = document.getElementById('styear')
let endyear:any = document.getElementById('endyear')
let comp:any = document.getElementById('comp')
let companylocation:any = document.getElementById('companylocation')
let jobtitle:any = document.getElementById('jobtitle')
let achv:any = document.getElementById('achv')
let pic:any = document.getElementById('pic')


let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('form')








form?.addEventListener("submit", (e) =>{
    e.preventDefault();


    localStorage.setItem("name", myName.value)
    localStorage.setItem("desig",designa.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("add", add.value)
    localStorage.setItem("pInfo", pInfo.value)
    localStorage.setItem("degree", degree.value)
    localStorage.setItem("degree2", degree2.value)
    localStorage.setItem("degree3", degree3.value)
    localStorage.setItem("pass", pass.value)
    localStorage.setItem("pass2", pass2.value)
    localStorage.setItem("pass3", pass3.value)
    localStorage.setItem("uni", uni.value)
    localStorage.setItem("uni2", uni.value)
    localStorage.setItem("uni3", uni.value)
    localStorage.setItem("skill1", skill1.value)
    localStorage.setItem("skill2", skill2.value)
    localStorage.setItem("skill3", skill3.value)
    localStorage.setItem("styear", styear.value)
    localStorage.setItem("endyear", endyear.value)
    localStorage.setItem("comp", comp.value)
    localStorage.setItem("companylocation", companylocation.value)
    localStorage.setItem("jobtitle",  jobtitle.value)
    localStorage.setItem("achv", achv.value)
   


    if(pic.files && pic.files[0]){
   let reader =  new FileReader()
   reader.addEventListener("load", ()=>{
    let textImg:any = reader.result
    localStorage.setItem("profile_pic", textImg)
    
   })
   reader.readAsDataURL(pic.files[0])

    }
    
    window.location.href = "./milstone-1/index.html";
    
})











































