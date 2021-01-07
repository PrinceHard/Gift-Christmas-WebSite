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

/*  Scroll Section Active Link  */
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
    
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })   
}
window.addEventListener('scroll', scrollActive)

/*  Change Background Header  */
function scrollHeader(){
    const nav = document.getElementById('header')
    //quando o scroll for maior que 200 viewport height, adiciona a classe scroll-header
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)