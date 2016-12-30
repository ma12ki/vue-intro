const reusableComponentsComponent = new Vue({
    el: '#reusable-components-component',
    data: {
        title: 'Reusable components',
        totalVotes: 0,
        movies: [
            {
                title: 'Alien',
                votes: 123
            },
            {
                title: 'Terminator',
                votes: 55
            },
            {
                title: 'Matrix',
                votes: 12
            },
            {
                title: 'Blade Runner',
                votes: 6
            }
        ],
    },
    methods: {
        incrementTotalVotes: function(amount) {
            this.totalVotes += amount;
        }
    },
    components: {
        'movie-voter': {
            template: '#movie-voter',
            props: ['title', 'initialVotes'],
            data: function() {
                this.$emit('increment', this.initialVotes);
                return {
                    votes: this.initialVotes
                };
            },
            methods: {
                increment: function() {
                    this.votes += 1;
                    this.$emit('increment', 1);
                }
            }
        }
    }
});