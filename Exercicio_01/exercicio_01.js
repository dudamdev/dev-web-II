const { createApp } = Vue;

createApp({
    data() {
        return {
            url: "https://thumbs.dreamstime.com/b/you-rock-red-rubber-stamp-over-white-background-88099742.jpg",
            classeCSS: "you-rock",
            isMostrar: false,
            mostrar: false
        }
    },
    methods: {
        showAlert: function () {
            alert("You Rock!🤘")
        },

        toggleMostrar: function () {
            this.isMostrar = !this.isMostrar,
                this.mostrar = !this.mostrar
        }
    }
}).mount("#app");