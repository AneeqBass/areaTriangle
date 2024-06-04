let base = document.querySelector('#base')
let height = document.querySelector('#height')
let area = document.querySelector('#area')
let convertBtn = document.querySelector('#convert')

convertBtn.addEventListener('click', ()=>{
    area.innerHTML = "A = " + (base.value * height.value)/2
})