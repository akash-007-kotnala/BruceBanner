var x = new Audio('Audio.mpeg');


new Vue(
    { 
        el:'#vue-app',

        data:{
            angery:false,
            angerlevel:0
        },
        methods:{
            makeAngery:function(){
                    this.angerlevel+=10;
                    if(this.angerlevel == 100)
                    {
                        this.angery= true;
                        x.play();

                    }
            },

            restart:function () {
                this.angerlevel=0;
                this.angery=false;
            }
        }
    
    
    
    
    }
)