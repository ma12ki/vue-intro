const listComponent = new Vue({
    el: '#list-component',
    data: {
        title: 'List component',
        items: [
            { text: 'ka' },
            { text: 'me' },
            { text: 'ha' },
            { text: 'me' },
            { text: 'ha' }
        ]
    },
    methods: {
        addItem: function() {
            const input = document.getElementById('itemName');

            if (input.value !== '') {
                this.items.push({
                    text: input.value
                });

                input.value = '';
            }
        },
        deleteItem: function(index) {
            this.items = this.items.filter((item, i) => {
                return i !== index;
            });
        }
    }
});