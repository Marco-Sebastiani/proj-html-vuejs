var app = new Vue({
    el:'#app',
    data:{
        listItem: [
            'home',
            'about',
            'service',
            'work',
            'articles'
        ],
        counter: 0
    },
    methods:{
        statusActive(i){
            this.counter= i;
        }
    }
    
});



