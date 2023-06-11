<template>
    <div class="crud-container">
        <h1>CRUD Usuários</h1>

        <form @submit.prevent="editOrCreateUser">
            <input type="text" v-model="nome" placeholder="Digite seu nome">
            <input type="email" v-model="email" placeholder="Digite seu email">
            <input type="password" v-model="senha" placeholder="Digite sua senha">
            <button type="submit">{{ editUserId ? 'Atualizar' : 'Registrar' }}</button>
        </form>

        <p>{{ message }}</p>

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td id="td-name">{{ user.nome }}</td>
                    <td id="td-email">{{ user.email }}</td>
                    <td>
                        <button @click="editUser(user)">
                            <span class="material-icons edit">edit</span>
                        </button>
                    </td>
                    <td>
                        <button @click="deleteUser(user)">
                            <span class="material-icons delete">delete</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: "",
            email: "",
            senha: "",
            message: "",
            users: [],
            editUserId: null,
        }
    },

    mounted() {
        this.getUsers();
    },

    methods: {
        async getUsers() {
            try {
                const response = await fetch("http://localhost:3000/api/getUsers");
                const data = await response.json();
                this.users = data;
            } catch (error) {
                this.message = error.message;
            }
        },

        async deleteUser(user) {
            const userId = user.id;
            try {
                const response = await fetch(`http://localhost:3000/api/deleteUser/${userId}`,
                    {
                        method: "DELETE",
                    });
                this.message = await response.text();
                this.getUsers();
            } catch (error) {
                this.message = error.message;
            }
        },

        editUser(user) {
            this.editUserId = user.id;
            this.nome = user.nome;
            this.email = user.email;
        },
        async editOrCreateUser() {
            const data = {
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            };

            try {
                let response;
                if (this.editUserId) {
                    response = await fetch(`http://localhost:3000/api/updateUser/${this.editUserId}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                    });
                } else {
                    response = await fetch("http://localhost:3000/api/registerUser", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                    });
                }
                this.message = await response.text();
            } catch (error) {
                this.message = error.message;
            }

            this.resetForm();
            this.getUsers();
        },
        resetForm() {
            this.editUserId = null;
            this.nome = "";
            this.email = "";
            this.senha = "";
        }
    }
}
</script>

<style scoped>
.crud-container {
    width: 100%;
    max-width: 420px;
    margin: 24vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
}

h1 {
    text-align: center;
}

form {
    display: grid;
    gap: 8px;
    width: 100%;
}

form input {
    border: none;
    outline: none;
    padding: 12px 8px;
    border-radius: 8px;
    background-color: #9ed6d7;
    color: #025959;
    font-size: .9em;
    font-weight: 600;
}

form input::placeholder {
    color: #025959;
    font-weight: 400;
}

button[type="submit"] {
    background-color: #d1645d;
    border: none;
    padding: 8px;
    border-radius: 8px;
    text-transform: uppercase;
    color: #def0ee;
    font-weight: 600;
    cursor: pointer;
}

p {
    text-align: center;
    font-size: .8em;
    font-style: italic;
}

table {
    width: 100%;
    text-align: center;
}

table td,
th {
    padding: 8px;
}

table button {
    background-color: #9ed6d7;
    border: 1px solid #9ed6d7;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.411);
}

table button .edit {
    color: #025959;
}

table button .delete {
    color: brown;
}
</style>
