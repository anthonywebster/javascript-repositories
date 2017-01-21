import Vue from 'vue';
import axios from 'axios';

let app = new Vue({
	el: '#app',
	data: {
		repositories: []
	},
	mounted() {
		axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=50')
		.then( response => {
			console.log(response);
			this.repositories = response.data.items;
		})
		.catch(function(error){
			console.log(error);
		});
	},
	computed: {

	},
	methods:{

	}
});

this.$http.post('url',data, options).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});