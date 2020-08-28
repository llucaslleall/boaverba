 
 
const popUp = ()=> {
    const modal = document.querySelector('#modal-pop-up')
    modal.classList.remove('container-pop-up')
    modal.classList.add('container-pop-up-active')
}

/*Botão que fecha a janela pop-up*/
const closePopUp = ()=>{
    const btnClose = document.querySelector('.close')
    btnClose.addEventListener('click',()=>{
        const modal = document.querySelector('#modal-pop-up')
        modal.classList.add('container-pop-up')
        modal.classList.remove('container-pop-up-active')
    } )
}

const modalPopUp = document.querySelector('body')
modalPopUp.addEventListener('mouseleave',()=>{
    popUp()
    closePopUp()
})