function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function draw() {

  const canvas=document.getElementById("canvas-1");
  const ctx=canvas.getContext("2d");


  for (let i=0; i<40;i++){

    ctx.fillStyle="rgb(209, 19, 19)";

    ctx.beginPath();
    const x = getRandomInt(0,300);
    const y= getRandomInt(0,150);
    const radius=getRandomInt(0,3);

    ctx.arc(x,y,radius,0,Math.PI * 2, true);

    ctx.fill();
  }
}

draw();
