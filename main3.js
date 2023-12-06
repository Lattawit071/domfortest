// 1.select target html obj
const submit = document.querySelector("button");
console.log(submit);
submit;

//2.register
const click1 = (e) => {
  console.log("click"); //จะบอกว่าคลิกกี่ครั้ง

  console.log(e); //ปริ้นออกมาดู event ที่สามารถใช้ได้ ตัวอย่างข้างล่าง
  console.log(e.target.id);
  //console.log(e.type);
  //console.log(e.target);

  console.log(e.currentTarget);
  console.log(e.eventPhase);
};
submit.addEventListener("click", click1);
///////

const clickinner = (i) => {
  console.log(i.target.id);
  //console.log(e.type);
  //console.log(e.target);

  console.log(i.currentTarget);
  console.log(i.eventPhase);
};

const inner = document.getElementById("inner-div");
inner.addEventListener("click", clickinner);
////

const clickouter = (i) => {
  console.log(i.target.id);
  //console.log(e.type);
  //console.log(e.target);

  console.log(i.currentTarget);
  console.log(i.eventPhase);
};

const outer = document.getElementById("outer-div");
outer.addEventListener("click", clickouter);
//สรุปคือ ถ้ามีelement ข้างบน(ดูจาก html) เมื่อคลิกแล้วจะปริ้นไอข้างบนนั้นออกมาด้วย
//แต่ข้างบนของ outer ไม่มี element ตัวไหนเลย จึงไม่ได้ปริ้นอะไรเพิ่มออกมานอกจากตัวมัน
