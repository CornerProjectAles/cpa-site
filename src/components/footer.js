import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_long_w.png"

const Footer = ({ siteTitle }) => (
	<footer className="absolute w-full z-20 bg-black" data-uk-sticky>
		<nav className="container mx-auto px-10">
			<div className="flex flex-col md:flex-row  py-12">
				<div className="md:w-1/5 flex items-center">
					<Link className="text-left " to="/">
						<img className="" src={logo} alt={siteTitle} />
					</Link>
				</div>
				<div className="md:w-2/5 mt-10 md:mt-0">
					
					<div className="md:text-right">
						<div className="md:w-3/4 inline-block text-left">
						<div className="text-3xl font-serif text-orange-500 text-left">
						Location
					</div>
							<div className="text-xl text-gray-300 leading-8 ">
								<div>Corner Project Ales &amp; Eats</div>
								21079 Geyserville Ave
								<div className="mb-2">
								Geyserville, California 95441, US
								</div>
								<a className="hover:text-blue-400 dark " href="tel:+1 707-814-0110">+1 707-814-0110</a>
								<br />
								<a className="hover:text-blue-400 dark" href="mailto:cornerprojectales@gmail.com">
									cornerprojectales@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="md:w-2/5 mt-10 md:mt-0">
					<div className="text-xl text-gray-200 leading-10 md:text-right">
						<div className="md:w-3/4 md:inline-block">
							<div className="text-3xl font-serif text-orange-500 text-left">
								Hours
							</div>
							<div className="flex justify-between">
								<div className="">Thursday</div>
								<div className="">12:00 pm - 7:00 pm</div>
							</div>
							<div className="flex justify-between">
								<div className="">Friday </div>
								<div className="">12:00 pm - 7:00 pm</div>
							</div>
							<div className="flex justify-between">
								<div className="">Saturday </div>
								<div className="">12:00 pm - 7:00 pm</div>
							</div>
							<div className="flex justify-between">
								<div className="">Sunday </div>
								<div className="">
									12:00 pm - <b>3:00 pm</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-5 text-center">
				© {new Date().getFullYear()}, Corner Project | All Rights Reserved
			</div>
		</nav>
	</footer>
)

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: ``,
}

export default Footer
