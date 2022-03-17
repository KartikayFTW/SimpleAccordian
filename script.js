"use strict";

const open = document.querySelectorAll(".item");

open.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("clicked");
    // this.classList.toggle("open");
    item.classList.toggle("open");
  });
});
