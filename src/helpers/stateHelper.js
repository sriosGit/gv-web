export function assingValue(e){
	//bind this onChange event of input text
	this.setState({ [e.target.name]: e.target.value });
}