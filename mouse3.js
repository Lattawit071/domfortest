const user = document.getElementById("input-user");
const password = document.getElementById("input-psw");

user.addEventListener("focus", () => {
  console.log("your focus is username");
});

user.addEventListener("blur", () => {
  console.log("your focus input textbox is blured");
});
