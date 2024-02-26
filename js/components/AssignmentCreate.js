export default{
	template:`
	<form @submit.prevent="add">
		<div class="border border-gray-600 text-black flex mt-4">
		<input v-model="newAssignment" placeholder = "New Assignment..." class="p-1"/>
		<button type="submit" class="bg-green-200 p-2 border-l">Add</button>
		</div>
	</form>
	`,

	data(){
		return{
			newAssignment: ''
		}
	},

	methods: {
		add(){
			this.$emit('add', this.newAssignment);
			this.newAssignment = '';
		}
	}
}