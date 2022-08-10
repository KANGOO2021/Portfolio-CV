const skills = document.querySelectorAll('.skills');

const skill = document.querySelector('.skills');

const contenedor_skills = document.querySelector('.container_skills');


/* document.addEventListener('click', (e) => {
    

   let value = e.target.classList.contains('skills')
   
   
    
    if(value){
        e.target.remove();
    }    
    
})
 */



/* const skills = document.querySelectorAll('.skills');

const contenedor_skills = document.querySelector('.container_skills');


contenedor_skills.addEventListener('click', (e) => {

    const skills = document.querySelector('.skills');
    

    skills.remove();

    e.stopPropagation();


}) */

/* contenedor_skills.addEventListener('click', (e) => {


    let value = e.target.classList.contains('skills')
    

    if (value) {
        e.target.remove();
    }
  
    e.stopPropagation();
    
    
}) */

function eliminar_hskill(){

    contenedor_skills.addEventListener('click', (e) => {


        let value = e.target.classList.contains('skills')


        if (value) {
            e.target.remove();
        }

        e.stopPropagation();


    })




}



