let burger = document.querySelector('.icon-burger')
let menue = document.querySelector('.menu-respon')
let closee = document.querySelector('.close')

burger.addEventListener('click',function(){
         menue.style.display = 'block'
         menue.style.left = '0'
         burger.style.display = 'none'
         closee.style.display = 'block'
})

closee.addEventListener('click',function(){
    menue.style.display = 'none'
    menue.style.left = '-250px'
    burger.style.display = 'block'
    closee.style.display = 'none'
})