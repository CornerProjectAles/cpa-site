/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import '../styles/app.scss';
// import '../scripts/app.js';

class Layout extends Component {
	constructor(props) {
		super(props);
		// this.state = { ready: false };
	}

	componentDidMount = () => {
		// state = { ready: false };
		if (typeof document !== 'undefined') {
			const uikit = require('uikit');
			const icons = require('uikit/dist/js/uikit-icons.min');
			uikit.use(icons);
			// this.setState({ ready: true });
		}
	};

	render() {
		return (
	      <>
	        <div>
	          <main>{this.props.children}</main>
	          <footer className="uk-text-center uk-padding uk-section-muted">
	            © {new Date().getFullYear()}, Corner Project
	          </footer>
	        </div>
	      </>
	    )
	}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
