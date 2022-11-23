const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            tasksList:[
                {
                    text:"(esempio di funzionamento tasks)se hai capito premi qui -->",
                    done:false
                }
            ],
            newTask:[
                {
                    text:""
                }
            ]
        }
    },
    methods:{
        onFormSubmit(){
            this.tasksList.push({
                text:this.newTask.text,
                done:false
            })

            this.newTask.text = ""

        },
        /**
         * @param {number} indexToDelete
         */
        deleteEl(indexToDelete){
            const confirmes = confirm("belin ma lo stai eliminando")
            this.tasksList.splice(indexToDelete, 1)
        }
    }
}).mount('#app')