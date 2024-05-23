

new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Quarterly Newsletter', done: true },
            { text: 'Recruiting blog post', done: true },
            { text: 'Mobile app launch', done: true },
            // Aggiungi altri todo qui
        ],
        newTodoText: '' // Testo del nuovo todo che l'utente inserisce nell'input
    },
    methods: {
        addTodo: function() {
            if (this.newTodoText.trim() === '') {
                return;
            }
            this.todos.push({ text: this.newTodoText, done: false });
            this.newTodoText = ''; // Resetta il campo di input dopo aver aggiunto il todo
        },
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        }
    }
});