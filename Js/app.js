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
    //quando o scroll for maio que 200vh, adicionamos a classe scroll-header
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*  Show Scroll Top  */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //quando o scroll for maior que 560vh, adicione a class show-scroll a tag com a classe scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollTop)


/*  DARK LIGHT THEME  */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Tópico selecionado anteriormente (se o usuário selecionou)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// Validamos se o usuário previamente escolheu um tópico
if (selectedTheme) {
    // Se a validação for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Ativa e Desativa o tema manualmente com o botão 
themeButton.addEventListener('click', () => {
    // Adiciona ou remove o dark/ icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o icone atual que o usuário escolher
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
