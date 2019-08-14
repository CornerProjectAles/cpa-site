import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_long_w.png"

const Header = ({ siteTitle }) => (
	<header className="header absolute w-full z-20 bg-transparent" data-uk-sticky>
		<nav className="container mx-auto">
			<div className="flex justify-center items-center">
				<ul className="flex m-0 p-0 my-8 pb-3">
					<li className="mx-6 px-4 text-xl uppercase font-bold">
						<a className="navlink" href="#beers" data-uk-scroll>Beers</a>
					</li>
					<li className="mx-6 px-4 text-xl uppercase font-bold">
						<a className="navlink" href="#kitchen" data-uk-scroll>Kitchen</a>
					</li>
				</ul>
				<Link className="flex-none mx-10 pb-3" to="/home-2">
					<img data-uk-parallax="opacity: 1,1,1; scale: 1,.9,.8; viewport: 0.8; easing: 0.5" width="280" src={logo} alt={siteTitle}/>
				</Link>
				<ul className="flex m-0 p-0 pb-3">
					<li className="mx-6 px-4 text-xl uppercase font-bold">
						<a className="navlink" href="#about" data-uk-scroll>About</a>
					</li>
					<li className="mx-6 px-4 text-xl uppercase font-bold">
						<Link
							to="/contact"
							className="navlink"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
