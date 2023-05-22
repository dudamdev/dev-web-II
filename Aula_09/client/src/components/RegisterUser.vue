<template >
    <h1>Cadastro Usuários</h1>
    <form @submit.prevent="registerUser">

        <input type="text" placeholder="Digite seu nome" v-model="nome">
        <input type="email" placeholder="Digite seu email" v-model="email">
        <input type="password" placeholder="Digite sua senha" v-model="senha">
        <button type="submit">Registrar</button>
    </form>
    <p>{{ message }}</p>
</template>
<script>
export default {
    data() {
        return {
            nome: '',
            email: '',
            senha: '',
            message: '',
        }
    },
    methods: {
        registerUser() {
            const data = {
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            }
            fetch("http://localhost:3000/api/registerUser", {
                method: "POST",
                headers:
                    { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(async (res) => {
                    this.message = await res.text();
                })
                .catch(async (err) => {
                    this.message = await err.text();
                })
        }
    }

}
</script>
<style scoped>
form {
    max-width: 60vw;
    width: 400px;
    display: grid;
    grid-gap: 5px;
    margin: 0 auto;
}

form input {
    padding: 10px 8px;
}
</style> 