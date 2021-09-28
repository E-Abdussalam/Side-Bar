const sideBar = document.querySelector('.sidebar');
const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
console.log(closeBtn);
console.log(sideBarToggle.classList);
console.log(sideBarToggle);
sideBarToggle.addEventListener('click', function(){
    console.log(sideBar);
    sideBar.classList.toggle('show-sidebar');
    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar');
    // } else {
       
    //     sideBar.classList.add('show-sidebar');
    // }
    
})
closeBtn.addEventListener('click', function() {
    console.log(sideBar);
    sideBar.classList.remove('show-sidebar');
})