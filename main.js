console.log ('todolist');

const {createApp} = Vue;

createApp({
    data() {
    return {

 
        title: 'To Do List',
        tasks: [1, 2, 3, 4],
        newTask: null,
    };
    },

    methods: {
        removeTask(indexRicevuto){
            console.log (indexRicevuto)
            console.log ('rimuovo il task')

            this.tasks = this.tasks.filter((task, index) =>   index !== indexRicevuto);
      
        
        },
        addTask (){
            console.log ('aggiungi il task')
            
            
            this.tasks.push(this.newTask);
            this.newTask = null;
        }
    },
}).mount(`#app`);