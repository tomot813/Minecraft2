let y = 1;

let array1 = document.getElementsByClassName('def-mob');

forward1();
function forward1() {

    if (y < array1.length) {
        y++
    } else {
        y = 1
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-50) + "vw");

    if(y == 1){
        document.getElementById("mob_dis").innerText = "Scelet Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde distinctio harum placeat ad ab repudiandae atque nulla voluptatum quasi consequuntur aspernatur enim officiis possimus dolor obcaecati accusantium et eos!";
    }else if(y == 2){
        document.getElementById("mob_dis").innerText = "Zombi Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde distinctio harum placeat ad ab repudiandae atque nulla voluptatum quasi consequuntur aspernatur enim officiis possimus dolor obcaecati accusantium et eos!";

    }
}



document.getElementById('btn_forward_mob').addEventListener('click', forward1);