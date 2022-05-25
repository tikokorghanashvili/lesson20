let accordion=document.getElementsByClassName('container');
// let accordion=document.querySelectorAll('.container');

for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
};


let navigation=document.getElementById('navbarlinks');
let toggleButton=document.getElementById('burger');

toggleButton.addEventListener('click',function(){
    navigation.classList.toggle('activeNavigation');
});


let burger=document.querySelectorAll('.burger');
let burgerbar1=document.querySelectorAll('.ul');

burger.addEventListener('click',()=> {
    burger.classList.toggle('active');
    burgerbar1.classList.toggle('active');
});

