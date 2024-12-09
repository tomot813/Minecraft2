


let login = sessionStorage.getItem("login");
let date = sessionStorage.getItem("date");
let sex = sessionStorage.getItem("sex");
let result = sessionStorage.getItem("result");




if(!login || !date){
    window.location.href = "./html/singin.html"

}else{
    document.getElementById("username").innerText = login;
    document.getElementById("username2").innerText = login;
    document.getElementById("date").innerText = date;
    document.getElementById("sex").innerText = sex;
    document.getElementById("result").innerText = result;
}


function clearDate(){
    sessionStorage.removeItem("login"); //localStorage || sessionStorage
    sessionStorage.removeItem("date"); //localStorage || sessionStorage

    window.location.href = "./html/singin.html"
}

document.getElementById("logout").addEventListener('click', clearDate);


