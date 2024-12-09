let x = 6;
let array = document.getElementsByClassName('def');
let items =document.getElementsByClassName('item_name');
let itemsArray = Array.from(items);
let current_slide = x-1;


let craft_box_img_1 = document.getElementById('craft-box-img-1');
let craft_box_img_2 = document.getElementById('craft-box-img-2');
let craft_box_img_3 = document.getElementById('craft-box-img-3');
let craft_box_img_4 = document.getElementById('craft-box-img-4');
let craft_box_img_5 = document.getElementById('craft-box-img-5');
let craft_box_img_6 = document.getElementById('craft-box-img-6');
let craft_box_img_7 = document.getElementById('craft-box-img-7');
let craft_box_img_8 = document.getElementById('craft-box-img-8');
let craft_box_img_9 = document.getElementById('craft-box-img-9');






for(i =0; i<array.length; i++){
    if(i != current_slide){
        array[i].classList.add('hidden');
    }else{
        array[i].classList.add('active');
    }
}
forward();

function forward() {


    if (x < array.length) {
            
        array[current_slide].classList.remove('active');
        array[current_slide].classList.add('hidden');

        x++
        current_slide = x-2
            
        array[current_slide].classList.remove('hidden');
        array[current_slide].classList.add('active');
    } else {
        x = 1
        forward()
    }

    document.documentElement.style.setProperty("--el", (x - 1) * (-10) + "vw")

    crafting("", "", "", "", "", "", "", "", "");

}



function craft(){


    if(current_slide == 0){
        crafting("", "", "", "../img/item/plank.png", "../img/item/plank.png", "", "../img/item/plank.png", "../img/item/plank.png", "");
    }else if(current_slide == 1){
        crafting("", "", "", "", "../img/item/redstone.png", "", "", "../img/item/stick.png", "");
    }else if(current_slide == 2){
        crafting("../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "../img/item/diamond.png", "../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png");
        
    }else if(current_slide == 3){
        crafting("../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "", "../img/item/stick.png", "", "", "../img/item/stick.png", "");
        
    }else if(current_slide == 4){
        crafting("../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "", "../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png", "../img/item/plank.png");
    }else if(current_slide == 5){
        crafting("../img/item/milk_bucket.png", "../img/item/milk_bucket.png", "../img/item/milk_bucket.png", "../img/item/sugar.png", "../img/item/egg.png", "../img/item/sugar.png", "../img/item/wheat.png", "../img/item/wheat.png", "../img/item/wheat.png");
    
    }else if(current_slide == 6){
        crafting("../img/item/gunpowder.png", "../img/item/sand.png", "../img/item/gunpowder.png", "../img/item/sand.png", "../img/item/gunpowder.png", "../img/item/sand.png", "../img/item/gunpowder.png", "../img/item/sand.png", "../img/item/gunpowder.png");
    }else if(current_slide == 7){
        crafting("", "", "", "", "../img/item/oak_wood.png", "", "", "", "");
    }else if(current_slide == 8){
        crafting("", "../img/item/iron_ingot.png", "", "../img/item/iron_ingot.png", "../img/item/redstone.png", "../img/item/iron_ingot.png", "", "../img/item/iron_ingot.png", "");
        
    }
}

function crafting(b1, b2, b3, b4, b5, b6, b7, b8, b9){
            setTimeout(() => {
                craft_box_img_1.src = b1;
            }, 500);
            setTimeout(() => {
                craft_box_img_2.src = b2;
            }, 600);
            setTimeout(() => {
                craft_box_img_3.src = b3;
            }, 700);

            setTimeout(() => {
                craft_box_img_4.src = b4;
            }, 800);
            setTimeout(() => {
                craft_box_img_5.src = b5;
            }, 900);
            setTimeout(() => {
                craft_box_img_6.src = b6;
            }, 1000);

            setTimeout(() => {
                craft_box_img_7.src = b7;
            }, 1100);
            setTimeout(() => {
                craft_box_img_8.src = b8;
            }, 1200);
            setTimeout(() => {
                craft_box_img_9.src = b9;
            }, 1300);
}




function search(){
    let user_input = document.getElementById("input_search_item");
    
    document.getElementById('erorr_output').innerText = "";
    if(itemsArray.findIndex(item => item.textContent.trim().toLowerCase() == user_input.value.trim().toLowerCase()) != -1){
        x = itemsArray.findIndex(item => item.textContent.trim().toLowerCase() == user_input.value.trim().toLowerCase()) + 2;

        array[current_slide].classList.remove('active');
        array[current_slide].classList.add('hidden');

        current_slide = x-2


        array[current_slide].classList.remove('hidden');
        array[current_slide].classList.add('active');
        
        crafting("", "", "", "", "", "", "", "", "");
        document.documentElement.style.setProperty("--el", (x - 1) * (-10) + "vw")
        user_input.value = "";
    }else{
        document.getElementById('erorr_output').innerText = "not found";
    }

}



document.getElementById("btn_craft").addEventListener("click", craft);
document.getElementById("btn_search").addEventListener("click", search);
document.getElementById("btn_forward").addEventListener("click", forward);

