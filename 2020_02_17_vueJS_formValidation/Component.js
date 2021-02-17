const ListRenderingApp = {
    data() {
        return {
            todos: [{
                    text: "Vue Test",
                },
                {
                    text: "Vue Test 2",
                },
                {
                    text: "Vue test 3",
                },
            ],
            isTrue: true,
        };
    },
};

Vue.createApp(ListRenderingApp).mount("#list-rendering");