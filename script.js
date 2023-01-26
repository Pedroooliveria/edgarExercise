// const buttons = document.getElementById("button");
// buttons.addEventListener("mouseout", () => {
//     if(buttons.style.backgrounColor = "black"){
//         buttons.style.backGroundColor = "green";
//         return
//     }
//     buttons.style.backgroundColor = "pink";

// });
// buttons.addEventListener("mouseup", () => {
// if(buttons.style.color = "black"){
//     buttons.style.color = "green";
//     return
// }
// buttons.style.color = "pink";
// });

const ranges = document.getElementById("range");
const age = document.getElementById("age");
ranges.addEventListener("change", () => {
  age.innerHTML = ranges.value;
});
