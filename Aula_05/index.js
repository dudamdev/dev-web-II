const { createApp } = Vue;

createApp({
    data() {
        return {
            testeSpan: false,
            isLampadaLigada: false
        }
    },
    methods: {
        handleTest: function () {
            this.testeSpan = !this.testeSpan;
        },

        toggleLampada: function () {
            this.isLampadaLigada = !this.isLampadaLigada
        }
    }
}).mount("#app");