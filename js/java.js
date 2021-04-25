const el = document.querySelector("#module_outer"); //module_outer를 el로 정의
const inner = document.querySelector("#module");//  module를 inner로 정의

el.addEventListener("mousemove", e => {
inner.style.setProperty('--x', -e.offsetX + "px");
inner.style.setProperty('--y', -e.offsetY +"px");
});
