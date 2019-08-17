import React, { Component } from 'react';

class Subscribe extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
			<div>
				<form method="post" name="Subscribe" className="w-5/6 md:w-2/3 mx-auto" netlify-honeypot="bot-field" data-netlify="true">
					<input type="hidden" name="form-name" value="Subscribe" />
					<h3 className="text-4xl tracking-wider font-serif text-gray-200">Sign up for updates</h3>
					<div className="uk-flex w-full lg:w-3/4 mx-auto flex-wrap md:flex-no-wrap justify-center md:justify-start">
						<input type="hidden" name="bot-field" />
							{/* Email */}
						<input type="email" required className="w-full border-gray-100 h-12 rounded-lg md:h-12 px-4 outline-none focus:border-orange-200 md:rounded-r-none" placeholder="Your email" name="email" id="email" />
						<button className="text-white border-2 h-12 rounded-lg px-10 border-gray-100 mt-4 md:mt-0  md:rounded-l-none" type="submit">Submit</button>
					</div>
					{/* <input type="reset" value="Clear" /> */}
				</form>
			</div>
		);
	}
}
 
export default Subscribe;