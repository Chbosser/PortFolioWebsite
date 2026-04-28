function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function draw1() {

  const canvas=document.getElementById("canvas-1");
  const ctx=canvas.getContext("2d");
  const rect =canvas.getBoundingClientRect();

  horz=rect.width;
  vert=rect.height;

  console.log(horz);
  console.log(vert);

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;



  for (let i=0; i<60;i++){

    ctx.fillStyle="rgb(255, 255, 255)";

    ctx.beginPath();
    const x = getRandomInt(0,horz);
    const y= getRandomInt(0,vert);
    const radius=getRandomInt(1,4)/2;

    ctx.arc(x,y,radius,0,Math.PI * 2, true);

    ctx.fill();
  }
}

function draw2() {

  const canvas=document.getElementById("canvas-2");
  const ctx=canvas.getContext("2d");
  const rect =canvas.getBoundingClientRect();

  horz=rect.width;
  vert=rect.height;

  console.log(horz);
  console.log(vert);

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;



  for (let i=0; i<60;i++){

    ctx.fillStyle="rgb(255, 255, 255)";

    ctx.beginPath();
    const x = getRandomInt(0,horz);
    const y= getRandomInt(0,vert);
    const radius=getRandomInt(1,4)/2;

    ctx.arc(x,y,radius,0,Math.PI * 2, true);

    ctx.fill();
  }
}

draw1();
draw2();

// Project Stardust
// No for loops I'll have to use setInterval() timeout and Animation Frames
// 
//
//
//
//
//
//
//
//
//
//
