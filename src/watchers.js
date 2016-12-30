const watchersComponent = new Vue({
    el: '#watchers-component',
    data: {
        title: 'Watchers',
        input: '',
        inputLabel: ''
    },
    watch: {
        input: _.debounce(function() {
            this.inputLabel = this.input !== '' ? this.input : '';
        }, 250)
    },
    computed: {
        buttonDisabled: function() {
            return this.input === '';
        }
    }
});