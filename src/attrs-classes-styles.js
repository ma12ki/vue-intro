const attrsClassesStylesComponent = new Vue({
    el: '#attrs-classes-styles-component',
    data: {
        title: 'Attrs, classes and styles',
        isRounded: false,
        sizeToggle: false,
        disabled: false,
        backgroundColor: '#CCC',
        fontColor: '#000',
        range: 50
    },
    computed: {
        styles: function() {
            return {
                color: this.fontColor,
                background: this.backgroundColor,
                'margin-left': `${this.range}%`
            };
        }
    }
});