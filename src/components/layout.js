/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
// import "./layout.css"
import "../styles/app.scss"
// import "../styles/style.css"
// import '../scripts/app.js';

class Layout extends Component {
	// constructor(props) {
	// 	super(props)
	// 	// this.state = { ready: false };
	// }

	componentDidMount = () => {
		// state = { ready: false };
		if (typeof document !== "undefined") {
			const uikit = require("uikit")
			const icons = require("uikit/dist/js/uikit-icons.min")
			uikit.use(icons)
		// this.setState({ ready: true });
		}
	}

	render() {
		return (
			<>
				<div>
				<Header siteTitle="Corner Project" />
				<main>{this.props.children}</main>
				<Footer siteTitle="Corner Project" />
				</div>
			</>
		)
	}
}

Layout.propTypes = {
  	children: PropTypes.node.isRequired,
}

export default Layout
