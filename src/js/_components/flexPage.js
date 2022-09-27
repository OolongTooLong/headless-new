const flexPageDetail = Vue.createApp({
    data() {
        return {
            apiBaseUrl: 'http://api.craft-vue.test/flex-page/',
            rows: '',
        }
    },
    computed: {},
    methods:{

    },
    mounted(){
        const uri = window.location.href.split('?');
        axios
            .get(this.apiBaseUrl + uri[1]+ ".json")
            .then(function (response) {
                this.rows = response.data.rows;
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    },
});
flexPageDetail.mount('#flex-page-detail');