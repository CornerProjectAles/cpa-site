import React from "react"
// import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import logo from "../images/logo_long_w.png"
import { graphql } from 'gatsby'


const IndexPage = ({data}) => {
	const home = data.home.edges[0].node
	console.log(home);
	return (
		<Layout>
			<SEO title="Home" />
			<div className="uk-position-relative uk-visible-toggle uk-light the-hero" tabIndex="-1" data-uk-slideshow="ratio: false; autoplay: true; autoplay-interval: 3000; animation: fade; pause-on-hover:false">
				<div className="container uk-text-center uk-margin-auto-vertical uk-position-center uk-overlay mt-10 z-20">
					{/* <img  src={logo} alt="asad"/> */}
					{/* <img data-uk-parallax="opacity: 1,1,1; y: -50,-70,-70; x: 0,0,0; scale: 1.2,.7,.6; viewport: 0.8; easing: 0.5" width="420" src={logo} alt="asad"/> */}
					<p className="text-6xl text-white font-serif mt-16 tracking-wide">
						Family run brew pub &amp; eatery
					</p>
					<div className="container mx-auto text-center">
						<h2 className="font-sans w-4/5 text-3xl mx-auto tracking-wider text-light font-serif">
							We offer a rotating list of local and house made craft beers along with a small menu of snacks and sandwiches
						</h2>
					</div>
					<div className="mt-10" >
						<ul className="flex justify-center items-center -ml-6 p-0" data-uk-sticky>
							{home.social.map((link, key) => 
								<li className="mx-4" key={key}>
									<a target="_blank" href={link.url} aria-label={link.name} className="p-4 uk-icon-button block " data-uk-icon={`icon: ${link.name}; ratio:1.5`}></a>
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="uk-overlay uk-position-cover bg-yellow-700 z-10 opacity-50"></div>
				<ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 10">
					{home.banners.map((banner, key) => 
						<li key={key}>
							{/* <img src="https://digitalmarketing.blob.core.windows.net/10239/images/items/image475690.jpg" alt="" data-uk-cover /> */}
							<Image
								fluid={banner.src.childImageSharp.fluid}
								alt={'article.frontmatter.title'}
								className="uk-cover"
								data-uk-cover="true"
							/>
						</li>
					)}
				</ul>
			</div>
			{/* <section className="py-20 relative z-20 -mt-6 bg-white">
				<div className="container mx-auto uk-flex ">

				<div className="text-center">Beers</div>
				</div>
			</section> */}
			{/* <section className="py-16" data-uk-parallax="bgy: -200">
				<div className="container mx-auto text-center">
					<h2 className="font-sans w-4/5 text-3xl mx-auto tracking-wider font-serif">Corner Project offers a rotating list of local and house made craft beers along with a small menu of snacks and sandwiches</h2>
				</div>
			</section> */}
			
			<section className="uk-section uk-section-large uk-background-fixed our-story uk-light">
				<div className="uk-container logo-container">
					<div className="logo-mark logo-left" data-uk-parallax="opacity: 0,.6,1; y: -100,-60,0; x: -100,-50,0; scale: 1.2,1,1; viewport: 0.5; easing: 0.5">

					</div>
					<div className=" logo-container" >
						<div className="story-blk" data-uk-parallax="opacity: 0,.9; scale: .8,1,1; viewport: 0.5; easing: 0.5">
							<div className="content-blk">
								<div className="section-title uk-text-center">Our <span>Story</span></div>
								<p>
									The idea for Corner Project started many years ago when Tom and Chris were in their late teens. The two brothers envisioned opening a local establishment where people of all walks of life would come together to enjoy a beverage and a bite to eat. Both went off to college to study subjects that had little to do with their dreams of opening their establishment. In 2005, Tom left a career in social work to attend culinary school and a few years later, Chris began brewing beer on his stovetop. In early 2017 the two of them revisited their dream in a more serious mindset and brought the concept of Corner Project to fruition.
								</p>
							</div>
						</div>
					</div>
					<div className="logo-mark logo-right" >

					</div>
				</div>
			</section>
		</Layout>
	)
}
export default IndexPage


export const query = graphql`
	query {
		home: allContentJson {
			edges {
				node {
					banners {
						alt
						src {
							childImageSharp {
								fluid(maxWidth: 2000) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					social {
						name
						url
					}
				}
			}
		}
	}
`

{/* <section id="kitchen" className="uk-section uk-section-secondary menu-blk">
	<div className="uk-container">
		<div className="section-title uk-margin-large-bottom uk-text-center">Our <span>Kitchen</span></div>
		<div className="uk-grid uk-grid-large" data-uk-grid>
			<div className="uk-width-1-2@m">
				<div className="sec-title">
					<h2>Snacks</h2>

					<div className="menu">
						<div className="each-item">
							<div className="item-title">
								<h3>Charcuterie <span className="uk-float-right">$12</span></h3>
								<p>dry aged coppa ham, sopresata, calabrese salami & prosciutto served with whole grain mustard and cornichons and grilled bread</p>
							</div>
						</div>
						<div className="each-item">
							<div className="item-title">
								<h3>Cheese Plate <span className="uk-float-right">$12</span></h3>
								<p>brie, goat cheese mousse, bleu cheese and fresh burrata mozzarella served with toasted pecans, dried berries, and mango chutney with assorted grilled bread</p>
							</div>
						</div>

						<div className="each-item">
							<div className="item-title">
								<h3>Combo Plate <span className="uk-float-right">$12</span></h3>
								<p>house selection including two meat & two cheese served with a combination of garnish and grilled bread</p>
							</div>
						</div>

						<div className="each-item">
							<div className="item-title">
								<h3>Warm Olives <span className="uk-float-right">$12</span></h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam illum officiis animi deleniti! Eum!</p>
							</div>
						</div>

						<div className="each-item">
							<div className="item-title">
								<h3>Spicy Deviled Eggs <span className="uk-float-right">$12</span></h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam illum officiis animi deleniti! Eum!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="uk-width-1-2@m">
				<div className="sec-title">
					<h2>Paninis</h2>

					<div className="menu">
						<div className="each-item">
							<div className="item-title">
								<h3>Pesto Italian <span className="uk-float-right">$12</span></h3>
								<p>cappicola, sopresata and provolone cheese with creamy basil pesto on ciabatta roll</p>
								
							</div>
						</div>
						<div className="each-item">
							<div className="item-title">
								<h3>Traditional<span className="uk-float-right">$12</span></h3>
								<p>fresh tomato and mozzarella with creamy basil pesto on ciabatta roll</p>
							</div>
						</div>

						<div className="each-item">
							<div className="item-title">
								<h3>Roast Beef <span className="uk-float-right">$12</span></h3>
								<p>thin sliced roast beef and sharp cheddar cheese with caramelized onions and horseradish aioli on locally made ciabatta roll</p>
							</div>
						</div>

						<div className="each-item">
							<div className="item-title">
								<h3>Spicy Turkey <span className="uk-float-right">$12</span></h3>
								<p>hickory smoke turkey breast and provolone cheese with cherry peppers and sriracha mayo on local focacia</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</section> */}