var obj = {foo: 'bar'}

//Object.freeze(obj) //Al comentar esta opcion no permite realizar cambios a la variable anteriormente instanciada

new Vue({
    el: '#app',
    data: obj
})
 var data = {a:1}
 var vm = new VarDate({
     el: '#example',
     data: data
 })

 vm.$data === data
 vm.$el === document.getElementById('example')

 //vm.$watch('a', function(newValue,oldValue))

 new Vue({
     data: {
         a:1
     },
     created: function(){
         console.log('a es: '+this.a)
     }
 })