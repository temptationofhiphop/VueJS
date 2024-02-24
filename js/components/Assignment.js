export default{
	template: `
		<li>
			<label for="">
				{{assignment.name}}

				<input type="checkbox" v-model="assignment.complete">
			</label>
		</li>
		`,

		props:{
			assignment: Object
		}
}