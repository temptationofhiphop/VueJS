export default{
	template:`
	<form @submit.prevent="add">
		<div class="border border-gray-600 text-black">
		<input v-model="newAssignment" placeholder = "New Assignment..." class="p-2"/>
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
			// this.assignments.push({
			// 	name: this.newAssignment,
			// 	completed: false,
			// 	id: this.assignments.lenght + 1
			// });

			this.newAssignment = '';
		}
	}
}