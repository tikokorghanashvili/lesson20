let accordion=document.getElementsByClassName('container');
// let accordion=document.querySelectorAll('.container');

for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
};


let navigation=document.getElementById('navbarlinks');
let toggleButton=document.getElementById('burg');

toggleButton.addEventListener('click',function(){
    navigation.classList.toggle('activeNavigation');
    toggleButton.classList.toggle('toggle');
});


let burger=document.getElementById('burg');
let burgerbar1=document.getElementById('');

burger.addEventListener('click',()=> {
    burger.classList.toggle('active');
    burgerbar1.classList.toggle('active');
});

