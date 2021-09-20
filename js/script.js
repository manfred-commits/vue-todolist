// Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array ok
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista






var app = new Vue({

    el: "#root",
    data:{
        todos:[
            {
                nome:"Fare la doccia",
                stato:false
            },
            {
                nome:"Fare la siesta",
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
        }
        
        
    }      
    


});