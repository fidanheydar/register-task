const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPassword = document.getElementById("rePassword");
const tableBody = document.querySelector("tbody");
const registerButton = document.querySelector("#register");
const arrList = [];
const loginInfo = document.querySelector("div");



registerButton.addEventListener("click", ()=>{
    const user = {
        mail:emailInput.value,
        password: passwordInput.value
    }
    arrList.push(user)
    if(!emailInput.value.trim() || !passwordInput.value.trim() || !rePassword.value.trim() || passwordInput.value.trim()!=confirmPassword.value.trim()){
        alert("Duzgun daxil  edin")
        return
    }else{
        const newTrItem = document.createElement("tr");
        newTrItem.innerHTML=`
        <td>${emailInput.value}</td>
        <td>${passwordInput.value}</td>
        `;
        tableBody.append(newTrItem);

    }
    emailInput.value = "";
    passwordInput.value = "";
    rePassword.value = "";


})
const emailLoginInput = document.getElementById("emailCheck");
const passwordLoginInput = document.getElementById("passCheck");
const loginBtn = document.getElementById("loginBtn");





loginBtn.addEventListener("click", ()=>{
    
    for (let i = 0; i < arrList.length; i++) {
        if(arrList[i].mail==emailCheck.value && passCheck.value == arrList[i].password){
            const newH3Item = document.createElement("h3");
            newH3Item.innerHTML=`
            <h3>Logged in</h3>
            `
            loginInfo.append(newH3Item);
            emailCheck.value = '';
            passCheck.value = '';
            return
        }
        
    }
    alert("Duzgun daxil edin")
})