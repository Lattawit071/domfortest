document.addEventListener("DOMContentLoaded", () => {
  console.log("your DOM tree built");
});

window.addEventListener("load", () => {
  console.log("your application load");
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("mycat", "Tom");
});

window.addEventListener("mousemove", (e) => {
  console.log(`x:${e.screenX},y:${e.screenY}`);
});
