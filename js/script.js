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
                stato:false
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

        // verifica del push di un'oggetto in un array di oggetti: al push dell'oggetto sotto descritto, viene pushato SEMPRE l'oggetto vero e proprio, anche cambiando i valori delle proprietà. Anzi, cambiando questi valori, dentro l'array di oggetti, si riscontrerà il cambiamento delle proprietà all'esterno dell'array nell'oggetto di partenza.

        // test:{
        //     test:123,
        //     test:232
        // },
        newTodo: ""

    },
    mounted:function(){ 
    },
    methods: {
        // questo metodo aggiunge il todo dall'array todos

        todoAdd: function() {
            if(!this.newTodo==""){
                
                // effettuo il push creando un'oggetto manualmente, così da non incorrere nel bug causato dal v-model su una keyword di un'oggetto da passare
                this.todos.push({

                    nome:this.newTodo,
                    stato:false
                
                });
                this.newTodo="";

                // verifica del push di un'oggetto in un array di oggetti
                // this.todos.push(this.test);
            }
        },        
        // questo metodo rimuove un elemento di indice specifico dall'array todos

        removeTodo: function(todoIndex){
            this.todos.splice(todoIndex,1);
        },

        // questo metodo esegue un toogle sullo stato dell'elemento dell'array todos, di indice specifico, per farlo diventare da vero a falso e viceversa

        taskCompleter:function(todoIndex){

           if(this.todos[todoIndex].stato==false){
                this.todos[todoIndex].stato=true;
           }else{
            this.todos[todoIndex].stato=false;
           }
        }

    }      
    


});