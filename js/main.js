let inp = document.querySelector('.toDo__inp')
let inp2 = document.querySelector('.toDo__inp2')
let home = document.querySelector('.clock__tit')
let soooot = document.querySelector('.clock__card')
let clock = document.querySelector('.header__linkk')
let sot_head = document.querySelector('.clock')
let sot = document.querySelector('.clock__card')
let utsenkaCard = document.querySelector('.utsenka___wrap')
let utsenkaH1 = document.querySelector('.utsenka__tit')
let utsenkaParem = document.querySelector('.addUtsenk')
console.log(utsenkaParem);
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
  //  console.log(toDos);
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
    <div class="res__div"  class="${toDos.isCompled ? "":""}">
   
    <img class="res__img" src="https://img.razrisyika.ru/kart/34/1200/132496-poleznaya-eda-2.jpg" alt="">
    <h1  class="res__tit">${index +1}</h1>

    <h2  class="res__tit">${item.name}</h2>
    <h2  class="res__tit">${item.narxi},000</h2>
    <span data-item-i="${index}" class='health'>❤️</span>

   
    </div>

    `
  })
}
let utsenka = document.querySelector('.aksiya')
let utsenkaBtn = document.querySelector('.aksia__btn')


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
let future = new Date("30 May 2024").getTime()

setInterval (()=>{
  let nov = new Date().getTime()
  const Differance = future - nov
  let day = Math.floor(Differance / (1000*60*60*24))
  let soat = Math.floor(Differance / (1000*60*60))
  let minut = Math.floor(Differance / (1000*60)%60)
  let second = Math.floor((Differance % (1000*60)/1000))
//console.log(second);
utsenka.innerText = `${day.toString().padStart(2,"0")}:${soat.toString().padStart(2,"0")}:${minut.toString().padStart(2,"0")}:${soat.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`
},1000)

function setRotation(element,rotationRatio){
{
  element.style.setProperty('--rotation',rotationRatio*360)
}
}

}
form.addEventListener('submit',addTodo);
inp.addEventListener('input',filterTodo);
inp2.addEventListener('input',filterNarxTodo);
utsenkaBtn.addEventListener("click",(e)=>{
  e.preventDefault()
 console.log('ok');
 utsenkaCard.classList.remove('hiden')
 utsenkaH1.classList.remove('hiden')
 const aksiyaItem = [
  {
    id:'1',
    img:'https://static.insales-cdn.com/images/articles/1/4526/3912110/3aa1f62988e5381923469ac134e37568.jpg',
    name:'osh',
    narxi:"30000"
  },
  {
    id:'2',
    img:'https://img.razrisyika.ru/kart/142/1200/564275-shashlyk-1.jpg',
    name:'shashlik',
    narxi:"15000"
  },
  {
    id:'3',
    img:'https://i.artfile.ru/2200x1450_1054692_[www.ArtFile.ru].jpg',
    name:'manti',
    narxi:"5000"
  },
  {
    id:'4',
    img:'https://avatars.dzeninfra.ru/get-zen_doc/1781567/pub_5e6a3ad1b4e3014f4849a858_5e6a75a71fed487b1f85564a/scale_1200',
    name:'honim',
    narxi:"6000"
  },
]
aksiyaItem.forEach((item,index)=>{
  const $div = document.createElement('p')
 $div.innerHTML = `
 <div  class="res__divc">
   
    <img class="res__img" src="https://img.razrisyika.ru/kart/34/1200/132496-poleznaya-eda-2.jpg" alt="">

    <h2  class="res__tit">${item.name}</h2>
    <h2  class="res__tit">${item.narxi}</h2>
    <span data-item-i="${index}" class="health2">❤️</span>
    </div>
 `
 
 utsenkaParem.appendChild($div)

})
})
function heall(e){
  console.log(e.target);
  if(e.target.className === 'health'){
  // const like= localStorage.setItem('toDos',JSON.stringify(toDos))
   console.log(e.target.getAttribute("data-item-i"));
    

  }
  }
res.addEventListener('click',heall);
clock.addEventListener("click",(e)=>{
  e.preventDefault()
 
  sot_head.classList.remove('hiden')
  sot.classList.remove('hiden')
})
home.addEventListener("click",(e)=>{
  e.preventDefault()
  sot_head.classList.add('hiden')
  sot.classList.add('hiden')
 
  
})
sortSelect.addEventListener('change',sortTodo);

