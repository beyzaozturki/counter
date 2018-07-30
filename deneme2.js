const state={
  current: 0,
}
function increament(){
  state.current++;
}
function reset(){
  state.current=0;
}
function yazdir(){
  var sayi=document.querySelector(".sayi");
  sayi.innerText=state.current;
}
document.querySelector(".resetButton").addEventListener(
  "click",
 function(){
  reset();
  yazdir();
});
document.querySelector(".incbutton").addEventListener(
  "click",
function(){
  increament();
  yazdir();
});
