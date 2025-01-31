let tl = gsap.timeline(),
  heroLeft = document.querySelector(".hero__left"),
  title = document.querySelector(".hero__title"),
  descr = document.querySelector(".hero__descr"),
  btn = document.querySelector(".hero__btn"),
  photo = document.querySelector(".photos-wrap"),
  img = photo.querySelectorAll("img"),
  author = document.querySelector(".photos__author"),
  menu = document.querySelector(".menu"),
  burgerBtn = document.querySelector(".burger"),
  closeBtn = document.querySelector(".close"),
  menuTop = document.querySelector(".menu__top"),
  menuNav = document.querySelector(".menu__nav"),
  social = document.querySelector(".social"),
  menuRight = document.querySelector(".menu__right");

tl.from(heroLeft, {
  opacity: 0,
  duration: 0.7,
});
tl.from(title, {
  opacity: 0,
  y: 100,
  duration: 0.7,
});
tl.from(
  btn,
  {
    opacity: 0,
    y: 100,
    duration: 0.7,
  },
  "-=0.7"
);
tl.from(descr, {
  opacity: 0,
  duration: 2,
});
img.forEach((img) => {
  tl.from(
    img,
    {
      opacity: 0,
      duration: 2,
    },
    "-=1.7"
  );
});
tl.from(
  author,
  {
    opacity: 0,
    duration: 2,
  },
  "-=1.7"
);

let menuAnimation = gsap.timeline({ paused: true });

menuAnimation
  .from(menu, { duration: 1.2, opacity: 0 })
  .from(menuTop, { duration: 0.6, y: -150, opacity: 0.2 }, "-=0.6")
  .from(closeBtn, { duration: 0.6, opacity: 1 }, "-=0.6")
  .from(menuNav, { duration: 0.6, opacity: 0, y: 100 }, "-=0.3")
  .from(social, { duration: 0.6, opacity: 0, y: 100 }, "-=0.3")
  .from(menuRight, { duration: 0.6, opacity: 0, y: 100 }, "-=0.6");

let isOpen = false;

burgerBtn.addEventListener("click", () => {
  if (!isOpen) {
    menu.classList.add("menu--open");
    menuAnimation.restart();
    isOpen = true;
  }
});

closeBtn.addEventListener("click", () => {
  if (isOpen) {
    menuAnimation.reverse().then(() => {
      menu.classList.remove("menu--open");
      isOpen = false;
    });
  }
});
