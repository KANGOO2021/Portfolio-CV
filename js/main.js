const lista = document.querySelector('#lista');

Sortable.create(lista, {
    animation: 200,
    chosenClass: 'seleccion'
   
});


const lista_skills = document.querySelector('#skills');

Sortable.create(lista_skills, {
    animation: 200,
    
onEnd: () => {
    console.log('Se insertó un elemento');
}, 

group: "habilities",
store:{
    set: (sortable) => {
        const orden = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, orden.join('-'));
    },
    
    get: (sortable) => {
        const orden = localStorage.getItem(sortable.options.group.name);
        return orden ? orden.split('-') : [];
    } 
  }   
});