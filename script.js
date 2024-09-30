const explore = document.querySelector('.explore')
const dropdown = document.querySelector('.dropdown')
const like = document.querySelectorAll('.like')
const image = document.querySelectorAll('img')
const search = document.getElementById('search')

explore.addEventListener('mouseover',()=>{
    dropdown.style.display = 'block'
})

document.addEventListener('click',()=>{
    dropdown.style.display = 'none' 
})

// explore.addEventListener('mouseleave',()=>{
//     dropdown.style.display = 'none'
// })

const spans = document.querySelectorAll('span')
spans.forEach((span)=>{
    span.addEventListener('click', ()=>{
        span.innerHTML='💖'
        
        
    })
})



