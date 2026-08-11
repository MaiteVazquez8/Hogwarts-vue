<template>
    <div>
        <form @submit.prevent="guardarUsuario">
            <input type="text" v-model="form.nombre" required />
            <button type="submit">Enviar</button>
        </form>
        <ul>
            <li v-for="(usuario,index) in usuarios":key="index">
            {{  usuario.nombre}}
            </li>
        </ul>
    </div>

   
</template>


<script>
export default{
    data(){
        return{
            form:{
                nombre:''
            },
        usuarios:[]    
        }
       
            },
        methods: {
            guardarUsuario(){
                this.usuarios.push({nombre:this.form.nombre});
                this.form.nombre='';
         }
    }
}
</script>