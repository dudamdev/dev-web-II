<template lang="html">
    <div>
        <h1>Cadastro de Usuários</h1>
        <form @submit.prevent="registroUsuario">
            <div>
                <label>Nome</label>
                <input type="text" v-model="nome">
            </div>
            <div>
                <label>Email</label>
                <input type="email" v-model="email">
            </div>
            <div>
                <label>Senha</label>
                <input type="password" v-model="senha">
            </div>
            <button type="submit">Registrar</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nome:'',
            email:'',
            senha:'',
            message:''
        }
    },
    methods: {
        registroUsuario() {
            const data = {
                nome: this.nome,
                email: this.email,
                senha: this.senha
            }
            console.log(data);
            this.message = "Deu certo"
        }
    }
}
</script>
<style lang="css">
    
</style>