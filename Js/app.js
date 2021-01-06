/*  Show Menu*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validar se as variáveis existem
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            //adicionamos a classe show-menu à tag div com a classe nav__menu
            nav.classList.toggle('show-menu')
        })
    }
} 
showMenu('nav-toggle', 'nav-menu')

/*  Remove Menu Mobile  */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Quando nós clicamos em cada nav__link, nós removemos a class show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))