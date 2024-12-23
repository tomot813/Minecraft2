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

    selectMob();

    
    document.getElementById("mob-num").innerText = y + "/" + array1.length;
}

function backward1(){

    if (y > 1) {
        y--;
    } else {
        y = array1.length;
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-50) + "vw");


    selectMob();
    
    document.getElementById("mob-num").innerText = y + "/" + array1.length;
}


function selectMob(){
    if(y == 1){
        document.getElementById("mob_dis").innerText = "The skeleton is a hostile mob known for its ranged attacks using a bow and arrows. Found primarily in dark areas or during the night, it poses a significant threat with its accurate shots. Skeletons drop bones and arrows when defeated, which are valuable for crafting and farming.";
    }else if(y == 2){
        document.getElementById("mob_dis").innerText = "The zombie is a classic hostile mob that roams at night or in dark areas, attacking players and villagers on sight. Slow-moving but persistent, zombies can spawn in groups and are dangerous in numbers. When defeated, they drop rotten flesh, which can be used as a resource in certain situations.";

    }else if(y == 3){
        document.getElementById("mob_dis").innerText = "The Creeper is an iconic hostile mob known for its ability to silently approach players before exploding. It moves slowly but unpredictably, making it difficult to anticipate when it will strike. Creepers often sneak up on players, detonating with a loud blast that can cause significant damage to both players and the environment.";
    }else if(y == 4){
        document.getElementById("mob_dis").innerText = "The Frog is a passive mob that can be found in swamp biomes. It hops around and occasionally catches and eats small insects like fireflies. Frogs are known for their unique jumping ability, which allows them to navigate both land and water with ease.";
    }else if(y == 5){
        document.getElementById("mob_dis").innerText = "he Bee is a neutral mob that thrives in flower-rich biomes. They play a crucial role in pollination, helping flowers grow and contributing to the production of honey. Bees are typically peaceful but will become aggressive if provoked, stinging the player in defense.";
    }
}



document.getElementById('btn_forward_mob').addEventListener('click', forward1);
document.getElementById('btn_backward_mob').addEventListener('click', backward1);