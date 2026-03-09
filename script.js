const prevButton = document.querySelector(".prevButton")
const nextButton = document.querySelector(".nextButton")
const arraySlides = document.querySelectorAll(".slide")
const ul = document.querySelector("ul")

let index = 0

function changeSlide() {
    
    let activeSlide = document.querySelector(".slide.active")

    activeSlide.classList.remove("active")
    arraySlides[index].classList.add("active")

    let activeBullet = document.querySelector("li.active")
    activeBullet.classList.remove("active")
    arrayBullets[index].classList.add("active")

}

nextButton.onclick = () =>{

    if(index < arraySlides.length - 1){

        index = index + 1
        
        changeSlide()

    }else{

        index = 0
        changeSlide()

    }
}

prevButton.onclick = () =>{

    if (index > 0) {
        
        index = index - 1

        changeSlide()

    }else{

        index = arraySlides.length - 1

        changeSlide()

    }
}

const li = document.createElement("li")

ul.appendChild(li)

for (let i = 0; i < arraySlides.length - 1; i++) {
    
    const li = document.createElement("li")

    ul.appendChild(li)
}

const arrayBullets = document.querySelectorAll("li")
document.querySelector("li").classList.add("active")

arrayBullets.forEach((bullet, id) =>{

    bullet.onclick = () => {

        index = id
        changeSlide()

    }
})