const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(`kuy1,${e.target.id}`);
});

button.addEventListener("click", (e) => {
  console.log(`kuy2,${e.target.id}`);
});
