// Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array ok
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista ok
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista ok



// Bonus:
// Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
// Prevedere inoltre un pulsante per modificare lo stato del singolo todo


var app = new Vue({

    el: "#root",
    data:{
        todos:[
            {
                nome:"Fare la doccia",
                stato:true
            },
            {
                nome:"Fare la siesta",
                stato:false
            },
            {
                nome:"Andare ad allenarsi",
                stato:false
            }
        ],
        newTodo: {
            nome:"",
            stato:false
        }

    },
    mounted:function(){ 
    },
    methods: {
        // questo metodo aggiunge il todo dall'array todos

        todoAdd: function() {
            if(!this.newTodo.nome==""){
                this.todos.push(this.newTodo);
            }
        },        
        // questo metodo rimuove un elemento di indice specifico dall'array todos

        removeTodo: function(todoIndex){
            this.todos.splice(todoIndex,1);
        },
        taskCompleter:function(todoIndex){
            console.log(this.todos[todoIndex].stato);
        }
    }      
    


});