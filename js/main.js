let inp = document.querySelector('.toDo__inp')
let inp2 = document.querySelector('.toDo__inp2')
let home = document.querySelector('.header__link')
let soooot = document.querySelector('.clock__card')

let clock = document.querySelector('.header__linkk')

let btn = document.querySelector('#toDo__btn')

let form = document.querySelector('.toDo__form')
let res = document.querySelector('.addTodo')
let resParent = document.querySelector('.toDo')

let sortSelect = document.querySelector('#sort-id')
/*home.addEventListener('click',()=>{
  resParent.classList.add('.none')
  soooot.classList.remove('.none')


})*/
/*clock.addEventListener('click',()=>{
  //console.log('ok');
  resParent.classList.remove('.none')
  soooot.classList.add('.none')
})*/
console.log(inp,btn);
console.log(form);
let toDos = JSON.parse(localStorage.getItem("toDos"))  || [];
const Todoss = function(todoname,todonarxi ,h,m,s){
this.name = todoname
this.narxi = todonarxi

this.hour = h
this.minute = m
this.second = s
this.isCompled = false

}

function addTodo(e){
    e.preventDefault();
   if(inp.value.trim() && inp2.value.trim() !== ''){

  let newTime = new Todoss(inp.value,inp2.value,new Date().getHours(),new Date().getMinutes(),new Date().getSeconds(),)
  console.log(newTime);
    toDos.push(newTime)
    console.log(toDos);
    localStorage.setItem('toDos',JSON.stringify(toDos))
    render();
    console.log(inp.value);
    inp.value = ''
    inp2.value = ''
   }else{
    alert('birnimlar yozing')
   }
}
//  const addThero = 
const render = function(){
    res.innerHTML = ""
  //const TodoRes =   JSON.parse(localStorage.getItem("toDos"))
  toDos?.forEach((item,index)=>{
    res.innerHTML += `
    <div class="res__div" class="${toDos.isCompled ? "":""}">
   
    <img class="res__img" src="https://img.razrisyika.ru/kart/34/1200/132496-poleznaya-eda-2.jpg" alt="">
    <h1  class="res__tit">${index +1}</h1>

    <h2  class="res__tit">${item.name}</h2>
    <h2  class="res__tit">${item.narxi}ming</h2>

   
    </div>

    `
  })
}
//console.log(e.target.getA);
const sortTodo =()=>{
console.log('changing');
let selectedType = sortSelect.value
switch(selectedType){
  case"arzon":
  toDos?.sort((a,b)=>{
    if(a.narxi > b.narxi){
      return 1
    }else{
      return - 1
    }
  })
  break;
  case"qimmat":
  toDos?.sort((a,b)=>{
    if(a.narxi > b.narxi){
      return -1
    }else{
      return 1
    }
  })
  break; 
  case"newst":
  toDos?.sort((a,b)=>{
    if(a.time > b.time){
      return 1
    }else{
      return -1
    }
  })
  break;
  case"oldest":
  toDos?.sort((a,b)=>{
    if(a.time < b.time){
      return 1
    }else{
      return -1
    }
  
  })  
 // console.log(toDos?);
  break;
  case"completed":
  break;
  case"inCompleted":
  break;
}
render()

}
render()
const itemDelete = (e)=>{
 // console.log(e);
 if(e.target.className === "dele__Span"){
   let attIndex = e.target.getAttribute("data-item-index")
   toDos[+attIndex].isCompled = !toDos[+attIndex].isCompled
 localStorage.setItem("toDos",JSON.stringify(toDos))
// console.log(toDos);
 }
  render()
}
const filterTodo = ()=>{
 // console.log(inp.value);
let resu = toDos.filter(todo=>todo.name ==inp.value)
 
 console.log(resu);
 if(resu.length > 0){
  toDos = resu
 }else{
  toDos = JSON.parse(localStorage.getItem("toDos"))
 }
 render()
}
const filterNarxTodo = ()=>{
  // console.log(inp.value);
 let resul = toDos.filter(todo=>todo.narxi ==inp2.value)
  
  console.log(resul);
  if(resul.length > 0){
   toDos = resul
  }else{
   toDos = JSON.parse(localStorage.getItem("toDos"))
  }
  render()
 }
setInterval(setAsos,1000)
const milSoat = document.querySelector("[bu-soat]")
const milMinut = document.querySelector("[bu-minut]")
const milSecond = document.querySelector("[bu-second]")
console.log();
function setAsos(){
  const currentDate = new Date();
  const seconds = currentDate.getSeconds()/60;
  const minuts = (seconds +currentDate.getMinutes())/60
  const hours = (minuts + currentDate.getHours())/12
setRotation(milSecond,seconds)
setRotation(milMinut,minuts)
setRotation(milSoat,hours)
function setRotation(element,rotationRatio){
{
  element.style.setProperty('--rotation',rotationRatio*360)
}
}

}
console.log(setAsos());
form.addEventListener('submit',addTodo);
inp.addEventListener('input',filterTodo);
inp2.addEventListener('input',filterNarxTodo);


resParent.addEventListener('dblclick',itemDelete);

sortSelect.addEventListener('change',sortTodo);

