class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: []
		}
	}

	componentWillMount() {
		this._getUserData();
	}

	_getUserData = () => {
		$.get('/users', (data) => {
			console.log('DATAAAAA: ', data);
			this.setState({
				userData: JSON.parse(data)
			});
		})
	};

	render() {

		var userList = this.state.userData.map((user) => {
			return (
				<div>
					<div>USER: {user.first_name} {user.last_name}</div>
					<div>AGE: {user.age}</div>
				</div>
			)
		});

		return (
			<div>
				<div>MY APPPPP</div>
				{userList}
			</div>
		)
	}

}


ReactDOM.render(<App />, document.getElementById('app'));