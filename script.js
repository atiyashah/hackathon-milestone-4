"use strict";
let myName = document.getElementById('name');
let designa = document.getElementById('desig');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let add = document.getElementById('add');
let pInfo = document.getElementById('pInfo');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('pass2');
let pass3 = document.getElementById('pass3');
let degree = document.getElementById('degree');
let degree2 = document.getElementById('degree2');
let degree3 = document.getElementById('degree3');
let uni = document.getElementById('uni');
let uni2 = document.getElementById('uni2');
let uni3 = document.getElementById('uni3');
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let styear = document.getElementById('styear');
let endyear = document.getElementById('endyear');
let comp = document.getElementById('comp');
let companylocation = document.getElementById('companylocation');
let jobtitle = document.getElementById('jobtitle');
let achv = document.getElementById('achv');
let pic = document.getElementById('pic');
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", designa.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("pInfo", pInfo.value);
    localStorage.setItem("degree", degree.value);
    localStorage.setItem("degree2", degree2.value);
    localStorage.setItem("degree3", degree3.value);
    localStorage.setItem("pass", pass.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("pass3", pass3.value);
    localStorage.setItem("uni", uni.value);
    localStorage.setItem("uni2", uni.value);
    localStorage.setItem("uni3", uni.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("comp", comp.value);
    localStorage.setItem("companylocation", companylocation.value);
    localStorage.setItem("jobtitle", jobtitle.value);
    localStorage.setItem("achv", achv.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./milstone-1/index.html";
});
