var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app-2', 
    data: {
        message: 'Cargaste esta página el ' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text:"Aprenda JavaScript"},
            {text:"Aprenda Vue"},
            {text:"Construye algo Asombroso"}
        ]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data:{
        message: "Hola Vue"
    },
    methods: {
        mensajeInverso: function(){
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello Vue"
    }
})
// Define una nueva llamada a componente todo-item
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id:0,text:'Vegetales'},
            {id:1,text:'Queso'},
            {id:2,text:'Cualquier cosa que se supone que los humanos pueden comer'}
        ]
    }
})