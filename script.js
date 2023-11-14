// simply adding and removig  active class to panel it will expand\
// NodeList is similar to an array
const panels = document.querySelectorAll('.panel');
// console.log(panels);
panels.forEach((panel) => {
//    console.log(panel);

   panel.addEventListener('click', () =>{
    removeActiveClasses();
    panel.classList.add('active');
   
   })
 
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}