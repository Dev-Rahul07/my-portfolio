function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hambuger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}
// let cursor = document.getElementById('cursor');

// document.addEventListener("mousemove",(details)=>{
// cursor.style.left = details.pageX + "px";
// cursor.style.top = details.pageY + "px";
// });



// const cursor = document.getElementById('cursor');

//   let mouseX = 0, mouseY = 0;
//   let posX = 0, posY = 0;

//   window.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   function animate() {
//     // Move 10% closer to mouse position each frame (smooth follow)
//     posX += (mouseX - posX) * 0.1;
//     posY += (mouseY - posY) * 0.1;

//     cursor.style.left = posX + 'px';
//     cursor.style.top = posY + 'px';

//     requestAnimationFrame(animate);
//   }

//   animate();

const cursor = document.getElementById('cursor');
  const dot = document.getElementById('dot');

  // Dot movement area radius (distance dot moves from center)
  const moveRadius = 0;

  // Dot position (relative to mouse)
  let mouseX = 0, mouseY = 0;
  let angle = 0;

  // Cursor position (follows dot smoothly)
  let cursorX = 0, cursorY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Update angle to make dot move around the mouse pointer
    angle += 0.05; // speed of dot movement

    // Dot position moves in a circle around mouse pointer
    const dotX = mouseX + moveRadius * Math.cos(angle);
    const dotY = mouseY + moveRadius * Math.sin(angle);

    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';

    // Cursor follows dot slowly (smooth)
    cursorX += (dotX - cursorX) * 0.1;
    cursorY += (dotY - cursorY) * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animate);
  }

  animate();


const words = ["Software Engineer","Web Developer","Frontend Developer","Software Developer"];
let index = 0;
let letterIndex = 0;
let deleting = false;
const speed = 200;
const role = document.getElementById("role");

function type() {
  if (!deleting) {
    role.textContent += words[index][letterIndex];
    letterIndex++;
    if (letterIndex === words[index].length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    role.textContent = role.textContent.slice(0, -1);
    if (role.textContent.length === 0) {
      deleting = false;
      index = (index + 1) % words.length;
      letterIndex = 0;  // Reset here!
    }
  }
  setTimeout(type, speed);
}

type();






const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / centerX * 15;  // max 15px left/right
    const moveY = (y - centerY) / centerY * 15;  // max 15px up/down

    // Move background layer (more movement)
    card.querySelector('.layer-bg').style.transform = `translate(${moveX * 1.5}px, ${moveY * 1.5}px) translateZ(-30px)`;

    // Move content layer (less movement)
    card.querySelector('.layer-content').style.transform = `translate(${moveX}px, ${moveY}px) translateZ(0)`;
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.layer-bg').style.transform = 'translate(0, 0) translateZ(-30px)';
    card.querySelector('.layer-content').style.transform = 'translate(0, 0) translateZ(0)';
  });
});

