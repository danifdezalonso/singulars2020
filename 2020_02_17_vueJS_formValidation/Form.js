new Vue({
    el: "#app",
    data: {
        isIncorrectName: true,
        isIncorrectEmail: true,
        name: "",
        email: "",
    },
    methods: {
        checkName: function () {
            let regularExName = /^([a-z ñáéíóúàèìòù]{2,60})$/i;
            if (this.name.match(regularExName)) {
                this.isIncorrectName = false;
            } else {
                this.isIncorrectName = true;
            }
        },
        checkEmail: function () {
            let regularExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (this.email.match(regularExEmail)) {
                this.isIncorrectEmail = false;
            } else {
                this.isIncorrectEmail = true;
            }
        }
    }
})