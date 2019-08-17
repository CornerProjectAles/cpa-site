import React from "react"
// import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import logo from "../images/logo_long_w.png"
import { graphql } from 'gatsby'


const IndexPage = ({data}) => {
	const home = data.home.edges[0].node;
	const stories = data.insta.edges;
	return (
		<Layout>
			<SEO title="Home" />
			<div className="uk-position-relative uk-visible-toggle uk-light the-hero" tabIndex="-1" data-uk-slideshow="ratio: false; autoplay: true; autoplay-interval: 3000; animation: fade; pause-on-hover:false">
				<div className="container uk-text-center uk-margin-auto-vertical uk-position-center uk-overlay mt-10 z-20">
					{/* <img  src={logo} alt="asad"/> */}
					{/* <img data-uk-parallax="opacity: 1,1,1; y: -50,-70,-70; x: 0,0,0; scale: 1.2,.7,.6; viewport: 0.8; easing: 0.5" width="420" src={logo} alt="asad"/> */}
					<p className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-serif mt-16 tracking-wide">
						Family run brew pub &amp; eatery
					</p>
					<div className="container mx-auto text-center">
						<h2 className="text-2xl font-sans w-4/5 md:text-2xl lg:text-3xl mx-auto font-light font-sans">
							We offer a rotating list of local and house made craft beers along with a small menu of snacks and sandwiches
						</h2>
					</div>
					<div className="mt-10" >
						<ul className="flex justify-center items-center p-0" >
							{home.social.map((link, key) => 
								<li className="mx-2" key={key}>
									<a target="_blank" rel="noopener" href={link.url} aria-label={link.name} className="p-4 uk-icon-button block " data-uk-icon={`icon: ${link.name}; ratio:1.2`}></a>
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="uk-overlay uk-position-cover bg-yellow-700 z-10 opacity-50"></div>
				<ul className="uk-slideshow-items sm:height h-64" data-uk-height-viewport="offset-top: true; offset-bottom: 15">
					{home.banners.map((banner, key) => 
						<li key={key}>
							{/* <img src="https://digitalmarketing.blob.core.windows.net/10239/images/items/image475690.jpg" alt="" data-uk-cover /> */}
							<Image
								fluid={banner.src.childImageSharp.fluid}
								alt={'article.frontmatter.title'}
								className="uk-height-1-1"
								data-uk-cover="true"
							/>
						</li>
					)}
				</ul>
			</div>
			<section className="bg-gray-100 -m-16">
				<div className="container mx-auto px-20">
					<div className="bg-orange-500 pt-6 py-12 relative z-20 rounded-lg text-center shadow-xl">
						<form method="post" action="/success" name="signup" className="w-5/6 md:w-2/3 mx-auto" netlify-honeypot="bot-field" data-netlify="true">
							<h3 className="text-4xl tracking-wider font-serif text-gray-200">Sign up for updates</h3>
							<div className="uk-flex w-full lg:w-3/4 mx-auto flex-wrap md:flex-no-wrap justify-center md:justify-start">
								<input type="hidden" name="bot-field" />
									{/* Email */}
								<input type="email" className="w-full border-gray-100 h-12 rounded-lg md:h-12 px-4 outline-none focus:border-orange-200 md:rounded-r-none" placeholder="Your email" name="email" id="email" />
								<button className="text-white border-2 h-12 rounded-lg px-10 border-gray-100 mt-4 md:mt-0  md:rounded-l-none" type="submit">Submit</button>
							</div>
							{/* <input type="reset" value="Clear" /> */}
						</form>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 pt-32">
				<div className="container mx-auto relative">
					<h2 className="font-serif text-4xl text-center mt-10 mb-12 uk-flex justify-center items-center">Follow us on Instagram</h2>
					<div className="" data-uk-slider>
						<div className="relative mb-10 mx-3">
							<ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid mb-10" data-uk-height-match>
								{stories.map((story, key) => 
									<li key={key}>
										<a href={`https://www.instagram.com/p/${story.node.id}`} target="_blank"  rel="noopener" className="shadow-lg hover:shadow-xl bg-white rounded-b-lg block text-gray-800 no-underline rounded-t-lg mb-10 hover:text-gray-900 uk-transition-toggle">
											<div className="relative overflow-hidden rounded-t-lg">
												<Image
													fluid={story.node.localFile.childImageSharp.fluid}
													alt={'article.frontmatter.title'}
													className="rounded-t-lg uk-transition-scale-up uk-transition-opaque "
													data-uk-cover="true"
												/>
												<div className="uk-position-center uk-overlay uk-panel ">
													<div className="uk-transition-slide-bottom-small text-white uk-flex items-center">
														<div className="" data-uk-icon="icon:heart; ratio:1.5"></div>
														<div className="ml-2 mr-5 text-3xl">
															{story.node.likes}
														</div>
														<div className="" data-uk-icon={`icon: ${story.node.comments>1 ? 'comments' : 'comment'}; ratio:1.5`}></div>
														<div className="ml-2 text-3xl">
															{story.node.comments ? story.node.comments : '0'}
														</div>
													</div>
												</div>
											</div>
											<div className="p-5 hover:-m-12"><div className="desc">{story.node.caption}</div></div>
										</a>
										{/* <img src="https://digitalmarketing.blob.core.windows.net/10239/images/items/image475690.jpg" alt="" data-uk-cover /> */}
										{/* {JSON.stringify(story)} */}
									</li>
								)}

							</ul>
						{/* <div className="uk-hidden@s uk-light">
							<a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous uk-slider-item="previous"></a>
							<a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next uk-slider-item="next"></a>
						</div> */}

							
						</div>
						<div className="hidden xl:block">
							<a className="sl-nav previous text-5xl sm:sl-mob" href="#" uk-slider-item="previous">&larr;</a>
							<a className="sl-nav next text-5xl sm:sl-mob" href="#" uk-slider-item="next">&rarr;</a>
						</div>
						<div className="block xl:hidden">
							<a className="text-5xl ml-10" href="#" uk-slider-item="previous">&larr;</a>
							<a className="text-5xl mr-10 absolute right-0" href="#" uk-slider-item="next">&rarr;</a>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="py-16" data-uk-parallax="bgy: -200">
				<div className="container mx-auto text-center">
					<h2 className="font-sans w-4/5 text-3xl mx-auto tracking-wider font-serif">Corner Project offers a rotating list of local and house made craft beers along with a small menu of snacks and sandwiches</h2>
				</div>
			</section> */}
			
			<section className="uk-section uk-section-large uk-background-fixed our-story uk-light">
				<div className="uk-container logo-container">
					<div className="logo-mark logo-left" data-uk-parallax="opacity: 0,.6,1; y: -100,-60,0; x: -100,-50,0; scale: 1.2,1,1; viewport: 0.2; easing: 0.5">

					</div>
					<div className=" logo-container" >
						<div className="story-blk" data-uk-parallax="opacity: 0,.9; scale: .8,1,1; viewport: 0.2; easing: 0.5">
							<div className="content-blk -mb-5">
								<div className="text-3xl pt-10 font-serif text-center">Our <span className=" text-orange-500">Story</span></div>
								<p className="font-sans text-xl mx-12 pb-10 text-light">
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
		},
		insta: allInstaNode {
			edges {
				node {
					id
					caption
					comments
					likes
					timestamp
					localFile {
						childImageSharp {
							fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
								...GatsbyImageSharpFluid_withWebp_tracedSVG
							}
						}
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