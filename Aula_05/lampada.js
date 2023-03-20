const { createApp } = Vue;

createApp({
    data() {
        return {
            isLampActive: false,
        }
    },

    methods: {
        toggleLamp: function () {
            this.isLampActive = !this.isLampActive
        }
    }
}).mount("#app")