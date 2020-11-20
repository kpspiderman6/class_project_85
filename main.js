canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 50;
car1_height = 40;

backgroung_image = "racing.jpg";
car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

function add(){
    background_img1 = new Image ();
    background_img1.onload = uploadimage;
    background_img1.src = backgroung_image;
    car1_img1 = new Image ();
    car1_img1.onload = uploadimage1;
    car1_img1.src = rover_image;
}
function uploadimage(){
    ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);
}
function uploadimage1(){
    ctx.drawImage(car1_img1,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener ("keydown",mykeydown);
function mykeydown(e){
    KeyPressed = e.keyCode;
    console.log("entered into keydown");
    if (KeyPressed == '40'){
        down();
        console.log("entered into down");
    }
    if (KeyPressed == '38'){
        up();
        console.log("entered into up");
    }
    if (KeyPressed == '39'){
        left();
        console.log("entered into left");
    }
    if (KeyPressed == '37'){
        right();
        console.log("entered into right");
    }
}
function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow pressed, x = "+car1_x+" y = "+car1_y);
        uploadimage();
        uploadimage1();
    }
}
function down(){
    if (car1_y<=600){
        car1_y=car1_y+10;
        console.log("When up arrow pressed, x = "+car1_x+" y = "+car1_y);
        uploadimage();
        uploadimage1();
    }
}
function left(){
    if (car1_x>=0){
        car1_x=car1_x+10;
        console.log("When up arrow pressed, x = "+car1_x+" y = "+car1_y);
        uploadimage();
        uploadimage1();
    }
}
function right(){
    if (car1_x<=800){
        car1_x=car1_x-10;
        console.log("When up arrow pressed, x = "+car1_x+" y = "+car1_y);
        uploadimage();
        uploadimage1();
    }
}
car2_width = 50;
car2_height = 40;

car2_image = "car2.png";

car2_x = 30;
car2_y = 30;

function add(){
    car2_img1 = new Image ();
    car2_img1.onload = uploadimage3;
    car2_img1.src = rover_image;
}
function uploadimage2(){
    ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);
}
function uploadimage3(){
    ctx.drawImage(car2_img1,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener ("keydown",mykeydown);
function mykeydown(e){
    KeyPressed = e.keyCode;
    console.log("entered into keydown");
    if (KeyPressed == '65'){
        down1();
        console.log("entered into down");
    }
    if (KeyPressed == '66'){
        up1();
        console.log("entered into up");
    }
    if (KeyPressed == '67'){
        left1();
        console.log("entered into left");
    }
    if (KeyPressed == '68'){
        right1();
        console.log("entered into right");
    }
}
function up1(){
    if (car2_y>=0){
        car2_y=car2_y-10;
        console.log("When up arrow pressed, x = "+car2_x+" y = "+car2_y);
        uploadimage2();
        uploadimage3();
    }
}
function down1(){
    if (car2_y<=600){
        car2_y=car2_y+10;
        console.log("When up arrow pressed, x = "+car2_x+" y = "+car2_y);
        uploadimage2();
        uploadimage3();
    }
}
function left1(){
    if (car2_x>=0){
        car2_x=car2_x+10;
        console.log("When up arrow pressed, x = "+car2_x+" y = "+car2_y);
        uploadimage2();
        uploadimage3();
    }
}
function right1(){
    if (car2_x<=800){
        car2_x=car2_x-10;
        console.log("When up arrow pressed, x = "+car2_x+" y = "+car2_y);
        uploadimage2();
        uploadimage3();
    }
}
