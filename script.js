let accordion=document.getElementsByClassName('container');
// let accordion=document.querySelectorAll('.container');

for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}