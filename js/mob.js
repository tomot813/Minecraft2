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
        document.getElementById("mob_dis").innerText = "The skeleton is a hostile mob known for its ranged attacks using a bow and arrows. Found primarily in dark areas or during the night, it poses a significant threat with its accurate shots. Skeletons drop bones and arrows when defeated, which are valuable for crafting and farming.";
    }else if(y == 2){
        document.getElementById("mob_dis").innerText = "The zombie is a classic hostile mob that roams at night or in dark areas, attacking players and villagers on sight. Slow-moving but persistent, zombies can spawn in groups and are dangerous in numbers. When defeated, they drop rotten flesh, which can be used as a resource in certain situations.";

    }
}



document.getElementById('btn_forward_mob').addEventListener('click', forward1);