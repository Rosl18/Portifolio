
function HoverContaNumber(){
    const contaWppNumber = document.querySelector(".conta-wpp-number")


    contaWppNumber.addEventListener("mouseover", ()=>{
        contaWppNumber.setAttribute('style','text-decoration: underline;')
    })
    contaWppNumber.addEventListener("mouseout", ()=>{
        contaWppNumber.setAttribute('style','text-decoration: none;')
    })
    contaWppNumber.addEventListener("click", ()=>{
        window.location.replace("https://wa.me/+5571993023852")
    })
}
HoverContaNumber()

function HoverLinkL(){
    const contaLinkeLink = document.querySelector(".conta-linke-link")

    contaLinkeLink.addEventListener("mouseover", ()=>{
        contaLinkeLink.setAttribute('style','text-decoration: underline;')
    })
    contaLinkeLink.addEventListener("mouseout", ()=>{
        contaLinkeLink.setAttribute('style','text-decoration: none;')
    })
    contaLinkeLink.addEventListener("click", ()=>{
        window.location.replace("https://www.linkedin.com/in/ronald-oliveira-2a72a1240/")
    })
}
HoverLinkL()

var arrowUP = document.querySelector("#arrowUp")
arrowUP.addEventListener("click",() =>{
    window.scrollTo({top:0,behavior:"smooth"})
})
