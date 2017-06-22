/**
 * @fileoverview 
 * Customized inuput UI, based on the last version of Material Design Component
 */
 
import React, { Component } from 'react';

//import {MDCTextfield, MDCTextfieldFoundation} from '@material/textfield/dist/mdc.textfield';
// CSS file for MDC formfield / textField components.
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

class Input extends Component {
	
	inputHandlerOnFocus(){
	 console.log('focus');
	}
	
	render() {
		return (
			<div className="mdc-form-field mdc-form-field--align-end">
				<div className="mdc-textfield mdc-textfield--upgraded">
		
					<input className="mdc-textfield__input"
						type={this.props.type} 
						name={this.props.name} 
						value={this.props.value}
						placeholder={this.props.placeholder}
						ref={this.props.mainref}
						onBlur={this.props.onblur}
						onChange={this.props.onchange}
						onFocus={this.inputHandlerOnFocus}
						/>
					<label 
						className="mdc-textfield__label mdc-textfield__label--float-above" 
						htmlFor={this.props.id}> {this.props.label} 
					</label>
				</div>
			</div>
		);
	}
}

export default Input;