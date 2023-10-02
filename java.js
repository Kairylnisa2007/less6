const body = document.getElementsByName('body')
const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'меняй цвет фона'

btnModal.style.cssText = `
background-color: azure;
    color:black ;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    width: 150px;
    height: 50px;

`;
btnModal.addEventListener('mouseover', () => {
    btnModal.style.backgroundColor = '#00000070'
})

const modal = document.createElement('div')
const modalWindow = document.createElement('div') 
 modalWindow.style.backgroundColor = 'red';
 modalWindow.style.backgroundColor = 'green';
modal.style.cssText = `
position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vw;
   background-color: #00000060;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: unset;`


modalWindow.style.cssText = `

   width: 400px;
   height:200px;
   background-color: #fff;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   padding: 20px;
   font-size: 18px;
   color: black;
   border-radius:8px;
   border-color:gray;
   `
modalWindow.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe omnis, impedit aliquid enim fugit dicta natus provident aut incidunt optio, facilis dolor pariatur aspernatur maxime consequatur neque voluptatum obcaecati nemo!
`
modal.append(modalWindow)

btnModal.addEventListener('click', () =>{
    ROOT.append(modal)
})

const btnClose = document.createElement('button')
btnClose.textContent = 'x'
modalWindow.append(btnClose)

btnClose.style.cssText = `
   position: absolute;
   right: 9px;
   top: 9px;
   background-color: white;
   border: none;
   width: 30px;
   height: 30px;
   font-size: 30px;
   cursor: pointer;`
modalWindow.append(btnClose)

btnClose.addEventListener('click', () =>{
    modal.remove(modal)
})
modal.addEventListener('click', (event) => {
if(event.target === modal){
    modal.remove
}
})

const btnOpen = document.createElement('button')
btnOpen.textContent = 'красный'
modalWindow.append(btnOpen)

btnOpen.style.cssText = `
   position: absolute;
   left: 24px;
   top:156px;
   background-color: green;
   color:white;
   border-radius:8px;
   width: 72px;
   height: 27px;
   font-size: 12px;
   cursor: pointer;`

   const btnOpen11 = document.createElement('button')
btnOpen11.textContent = 'зеленый'
modalWindow.append(btnOpen11)

btnOpen11.style.cssText = `
position: absolute;
   left:100px;
   top:156px;
   background-color: red;
   color:white;
   border-radius:8px;
   width: 72px;
   height: 27px;
   font-size: 12px;
   cursor: pointer;`

   const btnOpen12 = document.createElement('button')
btnOpen12.textContent = 'синий'
modalWindow.append(btnOpen12)

btnOpen12.style.cssText = `
position: absolute;
   left:178px;
   top:156px;
   background-color:blue;
   color:white;
   border-radius:8px;
   width: 72px;
   height: 27px;
   font-size: 12px;
   cursor: pointer;`

   btnOpen.addEventListener('click', () =>{
    modalWindow.style.backgroundColor = 'green';
    btnClose.style.backgroundColor = 'green';
    btnModal.style.backgroundColor = 'green';

})
btnOpen11.addEventListener('click', () =>{
    modalWindow.style.backgroundColor = 'red';
    btnClose.style.backgroundColor = 'red';
    btnModal.style.backgroundColor = 'red';
})
btnOpen12.addEventListener('click', () =>{
    modalWindow.style.backgroundColor = 'blue';
    btnClose.style.backgroundColor = 'blue';
    btnModal.style.backgroundColor = 'blue';
  
})