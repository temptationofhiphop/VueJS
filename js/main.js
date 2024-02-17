Vue.createApp({
	data(){
		return{
			greeting: 'Hello World'
		};
	},
	mounted(){
		alert('Hello');
	}
}).mount('#app');