const container = document.querySelector(".container");

for (let i = 0; i <= 100; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

function animateBlocks() {
  anime({
    targets: ".block",
    translateX: () => anime.random(-700, 700),
    translateY: () => anime.random(-500, 500),
    scale: () => anime.random(-1, 5),
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  });
}

animateBlocks();
