import React, { Component } from 'react';

import './App.css';

import Header from './header';
import Input from './input';

class App extends Component{
	
	constructor(props){
		super(props);
		// set initial state
		this.state = { mp:12, principal:500, rate:0.15, cpy:0.15, lp:0};
		
		this.uiFormModel= [
			{name:"mp", type:"text", label:"Monthly Payments: ", placeholder:"0.0", val:this.state.mp},
			{name:"principal", type:"text", label:"Principal: ", placeholder:"0.0", val:this.state.principal },
			{name:"rate", type:"text", label:"Rate: ", placeholder:"0.0", val:this.state.rate},
			{name:"cpy", type:"text", label:"Compounds per Year: ", placeholder:"0.0", val:this.state.cpy}
		];
		//bind 
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}
	
	loanCalculation(){
		const total=(this.state.mp * this.state.principal);
		const years= this.state.mp/12;
		let total_loan=0;
		
		if(years >=1){
			const cpy_total = years * this.state.cpy;
			total_loan = total - parseInt(total*this.state.rate,10) - (total*cpy_total);
			
		}else{
			total_loan = total - parseInt(total*this.state.rate,10);
		}
		//let total_loan = total - parseInt(total*this.state.rate) -parseInt(total*this.state.cpy) ; 
		this.setState({lp: total_loan});
		this.principal.value= this.state.principal;
		this.rate.value= this.state.rate;
		this.cpy.value= this.state.cpy;
	}
	
	handleInputChange(event) {
		const target = event.target;
		const value =  target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	
	}
 
	
	handleInputBlur(event){
		this.loanCalculation();
	}
	
	
	render() {
		let _self = this;
		return (
			<div className="App">
				<Header />
				
				{/* Form calculator */}
				
				{ this.uiFormModel.map((i) => {
						return <Input 
								key={i.name}
								id={i.name} 
								name={i.name} 
								type={i.type} 
								label={i.label} 
								placeholder={i.placeholder} 
								
								mainref={(input) => this[i.name] = input}
								onblur={_self.handleInputBlur}			
								onchange={_self.handleInputChange}/>
					})
				}
				
				<hr />
				Loan Payment:
				<h1 className="mdc-typography--display4">{this.state.lp}</h1>
				<br />
			</div>
		);
	}
}

export default App;
