// Lấy đối tượng canvas
var canvas = document.getElementById("myCanvas");

// Tạo đối tượng 2D context
var ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let eye = {
  currentX: 420,
  currentY: 320,
  targerX: 420,
  targerY: 300,
};
console.log(width, height);

document.addEventListener("mousemove", (e) => {
  eye.targerX = e.clientX;
  eye.targerY = e.clientY;
});

let fps = 60;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let eyeHeight = 80;
let alpha = 0.1;
let vt = 2;
let gt = 2;
let isOn = false
document.addEventListener("click",()=>{
  const audio = document.getElementById("myAudio");
  audio.play();
  if(isOn){
    isOn=false;
  }
  else{
    isOn=true;
    setTimeout(()=>{
      isOn = false
    },1700);
  }
  console.log(isOn)


})


function draw() {
  setInterval(() => {
    if (vt == 2) {
      vt = -2;
      gt = -2
    } else {
      vt = 2;
      gt =2
    }
    delta = Date.now() - then;
    let fps = 1000 / delta;
    then = Date.now();
    // console.log(vt);

    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);
    //body
    ctx.roundRect(300, 200, 250, 450, 120);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    //miệng
    ctx.beginPath();
    ctx.moveTo(390, 420); // Điểm bắt đầu (50, 50)
    ctx.quadraticCurveTo(420, 440, 450, 420); // Đoạn đường cong từ (50, 50) đến (450, 420) với điểm điều khiển (420, 440)
    ctx.stroke(); // Vẽ đoạn đường cong
    ctx.closePath();

    // tóc
    ctx.beginPath();
    ctx.moveTo(350 - vt, 150);
    ctx.lineTo(350, 222);
    //1
    ctx.moveTo(360 - vt, 150);
    ctx.lineTo(360, 219);
    //2
    ctx.moveTo(370 - vt, 150);
    ctx.lineTo(370, 211);
    //3
    ctx.moveTo(380 - vt, 150);
    ctx.lineTo(380, 207);
    //4
    ctx.moveTo(390 - vt, 150);
    ctx.lineTo(390, 205);
    //5
    ctx.moveTo(400 - vt, 150);
    ctx.lineTo(400, 203);
    //6
    ctx.moveTo(410 - vt, 150);
    ctx.lineTo(410, 202);
    //7
    ctx.moveTo(420 - vt, 150);
    ctx.lineTo(420, 200);
    //8
    ctx.moveTo(430 - vt, 150);
    ctx.lineTo(430, 200);
    //9

    ctx.moveTo(440 - vt, 150);
    ctx.lineTo(440, 202);
    //10
    ctx.moveTo(450 - vt, 150);
    ctx.lineTo(450, 203);
    //11
    ctx.moveTo(460 - vt, 150);
    ctx.lineTo(460, 205);
    //12
    ctx.moveTo(470 - vt, 150);
    ctx.lineTo(470, 207);
    //13
    ctx.moveTo(480 - vt, 150);
    ctx.lineTo(480, 212);
    //14
    ctx.moveTo(490 - vt, 150);
    ctx.lineTo(490, 217);
    //15
    ctx.moveTo(500 - vt, 150);
    ctx.lineTo(500, 222);

    // ctx.quadraticCurveTo(49, 75, 200, 94);
    // ctx.quadraticCurveTo(50, 75, 25, 50);
    // ctx.quadraticCurveTo(0, 25, 0, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(420, 320, 70, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
    //quai kính
    ctx.beginPath();
    ctx.rect(300, 320, 52, 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(480, 320, 72, 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();

    //mắt
    ctx.beginPath();
    ctx.arc(420, 320, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    //mắt trong
    ctx.beginPath();
    ctx.arc(eye.currentX, eye.currentY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //đít quần
    ctx.beginPath();
    ctx.roundRect(300, 590, 250, 60, 70);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();
    if(isOn)
    {
      ctx.beginPath();
      ctx.arc(420, 425, 30, 0, 2* Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }

    //thân quần
    ctx.beginPath();
    ctx.rect(300, 550, 250, 70);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();


    //áo che dú
    ctx.beginPath();
    ctx.rect(335, 450, 180, 150);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();

    //chân trái
    ctx.beginPath();
    ctx.rect(345, 600, 40, 100);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();

    //chân phải
    ctx.beginPath();
    ctx.rect(460, 600, 40, 100);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();
    //bàn chân trái
    ctx.beginPath();
    ctx.roundRect(335, 700, 60, 30, 10);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //bàn chân phải
    ctx.beginPath();
    ctx.roundRect(450, 700, 60, 30, 10);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //vai áo
    ctx.beginPath();
    ctx.rect(300, 450, 50, 30);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();
    //vai áo

    ctx.beginPath();
    ctx.rect(500, 450, 50, 30);
    ctx.fillStyle = "#174997";
    ctx.fill();
    ctx.closePath();
    //tay
    ctx.beginPath();
    ctx.rect(220, 500, 100, 30);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    //tay
    ctx.beginPath();
    ctx.rect(520, 500, 100, 30);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    // bàn tay
    ctx.beginPath();
    ctx.arc(640, 515, 23, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(220, 515, 23, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    
    //túi quần
    ctx.beginPath();
    ctx.arc(420,500, 50, 0, Math.PI ); (100, 100) 
    ctx.fillStyle = "#79AAD2";
    ctx.fill();
    ctx.closePath();

    //2 cái nút
    ctx.beginPath();
    ctx.arc(330,465, 10, 0,2* Math.PI ); (100, 100) 
    ctx.arc(520,465, 10, 0,2* Math.PI ); (100, 100) 
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.font = "20px Arial";
    ctx.strokeText("Gió thổi tóc bay bồng bềnh...... ", 10 - gt, 200);  



    // console.log(eye.currentY, eye.targetY);

    if (eye.currentX < eye.targerX) {
      eye.currentX += 1;
    } else if (eye.currentX > eye.targerX) {
      eye.currentX -= 1;
    }
    if (eye.currentX > 430) {
      eye.currentX -= 1;
    }
    if (eye.currentX < 410) {
      eye.currentX += 1;
    }
    if (eye.currentY < eye.targerY) {
      eye.currentY += 1;
    } else if (eye.currentY > eye.targerY) {
      eye.currentY -= 1;
    }
    if (eye.currentY > 340) {
      eye.currentY -= 1;
    }
    if (eye.currentY < 300) {
      eye.currentY += 1;
    }
  }, fpsInterval);
}

draw();
