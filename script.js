const [login,senha] = document.querySelectorAll(".InpLogin")
const btn = document.querySelector(".BtnSeta")

function Log(){
    if(login.value && senha.value.length>= 8){
        btn.removeAttribute("disabled")
        btn.classList.add("ativo")
    }
    else{
        btn.setAttribute("disabled","disabled")
        btn.classList.remove("ativo")
    }
}
login.addEventListener("input",Log)
senha.addEventListener("input",Log)
