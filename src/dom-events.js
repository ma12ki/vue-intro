const domEventsComponent = new Vue({
    el: '#dom-events-component',
    data: {
        title: 'DOM events',
        iq: '',
        totalIq: 0
    },
    methods: {
        addIq: function() {
            if (this.iq !== '' && !isNaN(this.iq)) {
                this.totalIq += parseInt(this.iq);

                this.iq = '';
            }
        }
    }
});