/**
 * Created by user on 25.2.2016 ã..
 */

module.exports = Ractive.extend({
    template: require('../../tpl/home'),
    components: {
        navigation: require('../views/Navigation'),
        appfooter: require('../views/Footer')
    },
    onrender: function () {
        console.log('Home page rendered');
    }
});