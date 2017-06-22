/**
 * @fileoverview 
 * Customized inuput UI, based on the last version of Material Design Component
 */
 
import React, { Component } from 'react';

// CSS file for MDC formfield / textField components.
import '@material/toolbar/dist/mdc.toolbar.css';

class Header extends Component {
	render() {
		return (
			<header className="mdc-toolbar">
				  <div className="mdc-toolbar__row">
					<section className="mdc-toolbar__section mdc-toolbar__section--align-start">
					  <i className="material-icons">monetization_on</i>
					  
					  <span className="mdc-toolbar__title"> : Loan calculator</span>
					</section>
				  </div>
			</header>
		);
	}
	
}

export default Header;