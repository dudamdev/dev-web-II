<template>
    <div>
        <form @submit.prevent="getUsers">
            <button type="submit">Mostrar todos</button>
            <p>{{ msg }}</p>
        </form>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{ user.nome }} - {{ user.email }}

                <button @click="deleteUser(user)"><span class="material-icons">delete</span></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
            users: []
        }
    },
    methods: {
        async getUsers() {
            try {
                const response = await fetch('http://localhost:3000/api/getUsers');
                const data = await response.json();
                this.users = data;
            } catch (error) {
                this.msg = error.message;
            }
        },
        async deleteUser(user) {
            const { id } = user
            try {
                const response = await fetch(`http://localhost:3000/api/deleteUser/${id}`, {
                    method: "DELETE",
                    headers:
                        { 'Content-Type': 'application/json' },
                });
                this.msg = 'Usuario deletado com sucesso'
                let index = this.users.indexOf(this.user)
                this.users.splice(index, 1)
            } catch (error) {
                this.msg = error.message;
            }
        }
    },
}
</script>
<style scoped>
li {
    list-style: none;
    padding: none;
    text-align: start;
}
</style>