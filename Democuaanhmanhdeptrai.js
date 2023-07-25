// Lấy đối tượng canvas
var canvas = document.getElementById("myCanvas");

// Tạo đối tượng 2D context
var ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let smile = {
  currentX: 100,
  currentY: 120,
  targerX: 100,
  targetY: 120,
};

// // document.addEventListener("click", (e) => {
// //   logo.targetX = e.clientX;
// //   logo.targetY = e.clientY;
// //   console.log(logo);
// // });

document.addEventListener("mousemove", (e) => {
  smile.targerX = e.clientX;
  smile.targetY = e.clientY;
  console.log(smile);
});

let fps = 30;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let eyeHeight = 80;
let alpha = 0.1;

function draw() {
  setInterval(() => {
    delta = Date.now() - then;
    let fps = 1000 / delta;
    then = Date.now();
    alpha += 0.5;
    eyeHeight += Math.sin(alpha) * 10;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);
    // Đặt màu sắc cho fill là màu vàng
    ctx.fillStyle = "yellow";

    // Vẽ một hình tròn cho mặt của emoji
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    // Vẽ hai hình tròn nhỏ hơn cho mắt
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(80, eyeHeight, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(120, eyeHeight, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Vẽ một hình tròn nhỏ cho mũi
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(100, 100, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Vẽ một nụ cười
    ctx.beginPath();
    ctx.arc(smile.currentX, smile.currentY, 30, 0, Math.PI);
    ctx.stroke();

    // Vẽ chữ "XD" trên emoji
    ctx.font = "bold 20px Arial";
    ctx.fillText("XD", 80, 160);
    //vẽ nụ cười

    if (smile.currentX < smile.targerX) {
      smile.currentX += 1;
    } else if (smile.currentX > smile.targerX) {
      smile.currentX -= 1;
    }
  }, fpsInterval);
}

draw();