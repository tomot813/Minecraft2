

function singIn(){
    let login = document.getElementById("login_input").value;
    let date = document.getElementById("date_input").value;
    let sex = document.getElementById("sex").value;

    document.getElementById("erorr_output").innerText = "";

    if(login != "" && date != ""){
        sessionStorage.setItem("login", login);
        sessionStorage.setItem("date",date);
        sessionStorage.setItem("sex", sex);
        sessionStorage.setItem("result", 0);
    
        window.location.href = "../index.html"
    }else{
        document.getElementById("erorr_output").innerText = "You're not finished";
    }


}

document.getElementById("btn_singIn").addEventListener('click', singIn);