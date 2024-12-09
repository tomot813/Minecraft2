let test  = document.forms.test_form;

test.addEventListener('submit', (event)=>{
    event.preventDefault();
    let count = 0;
    let answer = document.getElementsByClassName('true');
    let answer2 = document.getElementsByClassName('true_text');

    if(test.elements.q4.validity.valid){
        count++;
    }
    if(test.elements.q5.validity.valid){
        count++;
    }
    if(test.elements.q6.validity.valid){
        count++;
    }

    if(test.elements.q1.value == "true"){
        count++;
    }
    if(test.elements.q2.value == "true"){
        count++;

    }
    if(test.elements.q3.value == "true"){
        count++;

    }

    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = "#b4b4b4";
    }

    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.opacity = 1;
    }

    sessionStorage.setItem("result", count);

    alert("Поздравляю ваш результат " + count);
})



function reset(){
    let answer = document.getElementsByClassName('true');
    let answer2 = document.getElementsByClassName('true_text');
    sessionStorage.setItem("result", 0);


    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = "";
    }

    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.opacity = 0;
    }
}


document.getElementById("reset").addEventListener('click', reset)