class App extends Component{
	
	constructor(props){
		super(props);
		// set initial state
		this.state = {principal:'', rate:0, cpy:0, mp:0, total:0};
		
		this.uiFormModel= [
			{name:"mp", type:"text", label:"Monthly Payments: ", placeholder:"0.0", val:this.state.mp},
			{name:"p", type:"text", label:"Principal: ", placeholder:"0.0", val:this.state.principal },
			{name:"r", type:"text", label:"Rate: ", placeholder:"0.0", val:this.state.rate},
			{name:"cpy", type:"text", label:"Compounds per Year: ", placeholder:"0.0", val:this.state.cpy}
		];
		//bind 
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
	myKeyup(e){
		//console.log('myKeyup', this.state.principal);
		// Loan calculator logic
		// principal--- 100
		// x ----	rate
		
		
		let total_mp =this.state.principal*this.state.rate/100;
		//console.log(this.state.principal,this.state.rate,total_mp);
		//Update the total state, only if the result of the calculation is a number
		if(!isNaN(total_mp)){
			this.setState({mp: total_mp});
		}
		
		
		//(Principal*Rate/100/Compounds per year)/(1-(1+Rate/100/Compounds per year)^(-Monthly Payments))
		
	}
	/*
	* Handle input change event this is called from child component
	*/
	myChange(e){
		
		
		 const target = e.target;
		const value =  target.value;
		const name = target.name;
		
		    this.setState({
			  [name]: value
			});
		
		
	}
	
	render() {
		let _self = this;
		return (
			<div className="App">
				<Header />
				
				{/* Form calculator */}
				
				{/* this.uiFormModel.map((i) => {
						return <Input 
								key={i.name}
								id={i.name} 
								name={i.name} 
								type={i.type} 
								label={i.label} 
								placeholder={i.placeholder} 
								value={i.val}
								
								onchange={_self.myChange}/>
					})
				*/}
				<input
            name="numberOfGuests"
            type="text"
            value={this.state.mp}
            onChange={this.handleInputChange} />
						
		
				
				<h1 className="mdc-typography--display4">{this.state.total}</h1>
				<br />
			</div>
		);
	}
}