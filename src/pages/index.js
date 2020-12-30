import React from "react";
import theme from "theme";
import { Theme, Link, Image, Icon, Span, Text, Hr, Input, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Section
			background="--color-darkL2"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#0E1317"
			filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
		>
			<Stack>
				{"    "}
				<StackItem width="25%" display="flex" lg-width="40%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/landing/logo-on-dark.svg" width="154px" height="auto" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="75%" display="flex" lg-width="60%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Link
						href="/features/"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						FEATURES
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--biruza"
						font="700 14px/17px --fontFamily-googleSourceSansPro"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						Marketplace
					</Link>
					<Link
						href="/docs"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						DOCS
					</Link>
					<Link
						href="/roadmap"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						ROADMAP
					</Link>
					<Link
						href="/dashboard"
						text-decoration-line="initial"
						color="--white"
						font="--buttom"
						text-transform="uppercase"
						margin="0px 10px 0px 22px"
						padding="6px 21px 6px 21px"
						letter-spacing="0.07em"
						border-width="2px"
						border-color="#66FFE4"
						border-radius="50px"
						border-style="solid"
						sm-display="none"
					>
						LOG IN
					</Link>
					<Link
						href="/dashboard"
						text-decoration-line="initial"
						color="--dark"
						font="--buttom"
						text-transform="uppercase"
						margin="0px 0px 0px 10px"
						padding="6px 21px 6px 21px"
						letter-spacing="0.07em"
						border-width="2px"
						border-style="solid"
						border-color="--color-biruza"
						border-radius="50px"
						background="--color-biruza"
						lg-margin="0px 10px 0px 10px"
					>
						SIGN UP
					</Link>
					<Icon
						category="md"
						icon={MdMenu}
						size="32px"
						color="--white"
						display="none"
						lg-display="block"
						lg-padding="4px 4px 4px 4px"
						lg-border-width="2px"
						lg-border-style="solid"
						lg-border-color="--color-biruza"
						lg-border-radius="50px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="url(https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/Frame%2020.png?v=2020-10-29T14:21:26.108Z) 0% 100% /cover no-repeat scroll padding-box,#0E1317" padding="100px 0 100px 0">
			<Stack>
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--white"
						text-align="center"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						sm-font="normal 600 60px/75px Source Sans Pro, sans-serif"
					>
						Component
						<br />
						<Span color="--biruza">
							Marketplace
						</Span>
					</Text>
					<Text
						font="--lead"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="--white"
						text-align="center"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						width="70%"
						sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
						sm-width="90%"
					>
						On this page we have posted community components and official components from Quarkly
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL1" padding="70px 0 70px 0" sm-padding="24px 0 24px 0">
			<Stack>
				{"    "}
				<StackItem width="20%" display="flex" lg-display="none">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Link
						href="/multimedia/"
						font="--headline4"
						text-decoration-line="initial"
						color="--white"
						margin="9px 0px 9px 0px"
						hover-color="--biruza"
					>
						Multimedia
					</Link>
					<Link
						href="/content/"
						font="--headline4"
						text-decoration-line="initial"
						color="--white"
						margin="9px 0px 9px 0px"
						hover-color="--biruza"
					>
						Content
					</Link>
					<Link
						href="/animation/"
						font="--headline4"
						text-decoration-line="initial"
						color="--white"
						margin="9px 0px 9px 0px"
						hover-color="--biruza"
					>
						Animation
					</Link>
					<Link
						href="/integration/"
						font="--headline4"
						text-decoration-line="initial"
						color="--white"
						margin="9px 0px 9px 0px"
						hover-color="--biruza"
					>
						Integration
					</Link>
					<Hr
						width="133px"
						margin="26px 0px 26px 0px"
						border-color="rgba(34, 39, 43, 1)"
						border-width="2px 0 0 0"
						padding="0px 0px 0px 0px"
					/>
					<Link
						href="#"
						font="--headline4"
						text-decoration-line="initial"
						color="--white"
						margin="9px 0px 9px 0px"
						hover-color="--biruza"
					>
						Instruction
					</Link>
					<Link
						href="#"
						font="--headline4"
						text-decoration-line="initial"
						color="--white"
						margin="9px 0px 9px 0px"
						hover-color="--biruza"
					>
						Send components
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="80%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Stack margin="0px 0px 0px 0px" gap="8px" sm-padding="0px 0px 0px 0px">
						{"    "}
						<Link
							font="--headline3"
							display="inline-block"
							width="49.3%"
							color="--white"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
							sm-margin="0 0 20px 1.7%"
							sm-width="48.3%"
							text-decoration-line="initial"
							href="/multimedia/"
							margin="16px 0px 16px 0px"
						>
							Multimedia
						</Link>
						<Text
							font="--lead"
							display="flex"
							width="50%"
							text-align="right"
							align-items="center"
							justify-content="flex-end"
							padding="0px 0px 0px 0px"
							margin="0px 0px 20px 0px"
						>
							<Link
								href="/multimedia"
								font="normal 600 20px/25px --fontFamily-googleSourceSansPro"
								color="--biruza"
								text-decoration-line="initial"
								margin="20px 8px 0px 0px"
								sm-font="normal 600 18px/22px --fontFamily-googleSourceSansPro"
								hover-color="#ffffff"
							>
								View all
							</Link>
						</Text>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/slider"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								width="100%"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Slider
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/audioplayer"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/audio.svg?v=2020-11-06T11:34:28.510Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Audio Player
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/youtube-player"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/youtube.svg?v=2020-11-06T11:34:28.889Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									YouTube Player
								</Text>
								{"    "}
							</Link>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="84px 0px 0px 0px" gap="8px" sm-margin="50px 0px 0px 0px">
						{"    "}
						<Text
							font="--headline3"
							display="inline-block"
							width="49.3%"
							color="--white"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
							sm-margin="0 0 20px 1.7%"
							sm-width="48.3%"
						>
							Сontent
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 20px 0px"
							display="flex"
							width="50%"
							text-align="right"
							align-items="center"
							justify-content="flex-end"
						>
							<Link
								href="/content/"
								font="normal 600 20px/25px --fontFamily-googleSourceSansPro"
								color="--biruza"
								text-decoration-line="initial"
								margin="20px 8px 0px 0px"
								sm-font="normal 600 18px/22px --fontFamily-googleSourceSansPro"
								hover-color="#ffffff"
							>
								View all
							</Link>
						</Text>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/price"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/price.svg?v=2020-11-06T11:34:28.679Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Price
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/table"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/table.svg?v=2020-11-06T11:34:28.727Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Table
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/progress-bar"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/bar.svg?v=2020-11-06T11:34:28.578Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Progress-bar
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/input"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/input.svg?v=2020-11-06T11:34:28.640Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Input
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/timeline"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/timeline.svg?v=2020-11-06T11:34:28.829Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Timeline
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/accordion"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/accord.svg?v=2020-11-06T11:34:28.511Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Accordion
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/content/pop-up"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/popup.svg?v=2020-11-06T11:34:28.694Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Pop-up
								</Text>
								{"    "}
							</Link>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="84px 0px 0px 0px" gap="8px" sm-margin="50px 0px 0px 0px">
						{"    "}
						<Text
							font="--headline3"
							display="inline-block"
							width="49.3%"
							color="--white"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
							sm-margin="0 0 20px 1.7%"
							sm-width="48.3%"
						>
							Animation
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 20px 0px"
							display="flex"
							width="50%"
							text-align="right"
							align-items="center"
							justify-content="flex-end"
						>
							<Link
								href="/animation/"
								font="normal 600 20px/25px --fontFamily-googleSourceSansPro"
								color="--biruza"
								text-decoration-line="initial"
								margin="20px 8px 0px 0px"
								sm-font="normal 600 18px/22px --fontFamily-googleSourceSansPro"
								hover-color="#ffffff"
							>
								View all
							</Link>
						</Text>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/animation/text-loop"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/textloop.svg?v=2020-11-06T11:34:28.772Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Text-loop
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/animation/ticker"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/ticker.svg?v=2020-11-06T11:34:28.778Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									Ticker
								</Text>
								{"    "}
							</Link>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="84px 0px 0px 0px" gap="8px" sm-margin="50px 0px 0px 0px">
						{"    "}
						<Text
							font="--headline3"
							display="inline-block"
							width="49.3%"
							color="--white"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
							sm-margin="0 0 20px 1.7%"
							sm-width="48.3%"
						>
							Integration
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 20px 0px"
							display="flex"
							width="50%"
							text-align="right"
							align-items="center"
							justify-content="flex-end"
						>
							<Link
								href="/integration/"
								font="normal 600 20px/25px --fontFamily-googleSourceSansPro"
								color="--biruza"
								text-decoration-line="initial"
								margin="20px 8px 0px 0px"
								sm-font="normal 600 18px/22px --fontFamily-googleSourceSansPro"
								hover-color="#ffffff"
							>
								View all
							</Link>
						</Text>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/integration/livechat"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/chat.svg?v=2020-11-06T11:34:28.637Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									LiveChat
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/integration/vk-groups"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/vk.svg?v=2020-11-06T11:34:28.828Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									VK Groups
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/integration/vk-comments"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/vk.svg?v=2020-11-06T11:34:28.828Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									VK Сomments
								</Text>
								{"    "}
							</Link>
						</StackItem>
						<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/integration/livechat"
								width="100%"
								display="flex"
								flex-direction="column"
								padding="30px 30px 30px 30px"
								background="--color-darkL2"
								text-decoration-line="initial"
								align-items="flex-end"
								margin="0px 0px 0px 0px"
								border-radius="8px"
								transition="-webkit-transition: all .3s;  transition: all .3s;"
								hover-transform="translateY(-10px)"
							>
								<Override
									slot="StackItemContent"
									padding="30px 30px 30px 30px"
									background="--color-darkL2"
									border-radius="8px"
									margin="0px 9px 0px 0px"
									flex-direction="column"
									align-items="flex-end"
								/>
								{"        "}
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/facebook.svg?v=2020-11-06T11:34:28.579Z" width="72px" height="66px" />
								<Text
									font="--lead"
									margin="35px 0px 0px 0px"
									display="inline-block"
									color="--white"
									width="100%"
								>
									FaceBook Like
								</Text>
								{"    "}
							</Link>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="84px 0px 0px 0px" gap="0px">
						{"    "}
						<Text
							font="--headline3"
							margin="0px 0px 30px 0px"
							display="inline-block"
							width="100%"
							color="--white"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
						>
							Instructions
						</Text>
						<StackItem width="100%" display="flex">
							<Override
								slot="StackItemContent"
								background="--color-darkL2"
								border-radius="8px"
								flex-direction="column"
								align-items="flex-start"
							/>
							<Components.YouTubeVideo src="https://youtu.be/zR0CZ3PXmPo" width="100%" border-radius="8px" />
							<Text
								margin="42px 0px 0px 36px"
								font="--headline3"
								color="--white"
								md-font="normal 600 30px/45px Source Sans Pro, sans-serif"
								sm-font="normal 600 25px/30px Source Sans Pro, sans-serif"
								sm-margin="42px 20px 0px 20px"
							>
								Instructions for adding code
							</Text>
							<Text
								margin="12px 150px 30px 36px"
								font="400 24px/30px --fontFamily-googleSourceSansPro"
								color="rgba(126, 150, 181, 1)"
								md-font="400 20px/27px --fontFamily-googleSourceSansPro"
								md-margin="12px 70px 30px 36px"
								sm-margin="12px 20px 30px 20px"
								sm-font="400 18px/22px --fontFamily-googleSourceSansPro"
							>
								To install a component you need in the "Components" tab,
								<br />
								in the "Project" section add your component and install the code required component in the opened window
							</Text>
							<Link
								href="#"
								margin="0px 0px 48px 36px"
								text-decoration-line="initial"
								font="700 19px/23px --fontFamily-googleSourceSansPro"
								color="--white"
								padding="16px 33px 16px 33px"
								background="#0E1317"
								border-style="solid"
								border-width="6px"
								border-color="--color-primary"
								border-radius="60px"
								text-transform="uppercase"
								letter-spacing="0.07em"
								sm-margin="0px 0px 48px 20px"
							>
								See Instructions
							</Link>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="84px 0px 0px 0px" gap="0px">
						{"    "}
						<Text
							font="--headline3"
							margin="0px 0px 30px 0px"
							display="inline-block"
							width="100%"
							color="--white"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
						>
							Send Components
						</Text>
						<StackItem width="100%" display="flex">
							<Override
								slot="StackItemContent"
								background="--color-darkL2"
								border-radius="8px"
								flex-direction="column"
								align-items="flex-start"
								padding="36px 36px 48px 36px"
								sm-padding="36px 15px 48px 15px"
								md-padding="36px 30px 48px 30px"
							/>
							<Formspree
								errorMessage="Something went wrong"
								completeText="Success"
								endpoint="// Customize this 'myform.js' script and add it to your JS bundle. // Then import it with 'import MyForm from &quot;./myform.js&quot;'. // Finally, add a <MyForm/> element whereever you wish to display the form.  import React from &quot;react&quot;;  export default class MyForm extends React.Component {   constructor(props) {     super(props);     this.submitForm = this.submitForm.bind(this);     this.state = {       status: &quot;&quot;     };   }    render() {     const { status } = this.state;     return (       <form         onSubmit={this.submitForm}         action=&quot;https://formspree.io/xvowynqa&quot;         method=&quot;POST&quot;       >         <!-- add your custom form HTML here -->         <label>Email:</label>         <input type=&quot;email&quot; name=&quot;email&quot; />         <label>Message:</label>         <input type=&quot;text&quot; name=&quot;message&quot; />         {status === &quot;SUCCESS&quot; ? <p>Thanks!</p> : <button>Submit</button>}         {status === &quot;ERROR&quot; && <p>Ooops! There was an error.</p>}       </form>     );   }    submitForm(ev) {     ev.preventDefault();     const form = ev.target;     const data = new FormData(form);     const xhr = new XMLHttpRequest();     xhr.open(form.method, form.action);     xhr.setRequestHeader(&quot;Accept&quot;, &quot;application/json&quot;);     xhr.onreadystatechange = () => {       if (xhr.readyState !== XMLHttpRequest.DONE) return;       if (xhr.status === 200) {         form.reset();         this.setState({ status: &quot;SUCCESS&quot; });       } else {         this.setState({ status: &quot;ERROR&quot; });       }     };     xhr.send(data);   } }"
								display="flex"
								flex-direction="row"
								width="100%"
								font="--menu"
							>
								<Input
									name="email"
									placeholder="Email"
									margin-right="4px"
									width="100%"
									background="rgba(255, 255, 255, 0)"
									border-width="2px"
									border-color="--color-grey"
									color="--grey"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									disabled={false}
									padding="15px 16px 15px 27px"
									margin="0px 4px 17px 0px"
									border-radius="6px"
									type="email"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 16px/20px --fontFamily-googleSourceSansPro"
								/>
								<Input
									name="Link to GitHub profile"
									placeholder="Link to GitHub profile"
									width="100%"
									background="rgba(255, 255, 255, 0)"
									border-width="2px"
									border-color="--color-grey"
									color="--grey"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									disabled={false}
									padding="15px 16px 15px 27px"
									margin="0px 4px 17px 0px"
									border-radius="6px"
									type="text"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 16px/20px --fontFamily-googleSourceSansPro"
								/>
								<Input
									name="Link to your component ( github or codensandbox )"
									placeholder="Link to your component ( GitHub or codensandbox )"
									width="100%"
									background="rgba(255, 255, 255, 0)"
									border-width="2px"
									border-color="--color-grey"
									color="--grey"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									disabled={false}
									padding="15px 16px 15px 27px"
									margin="0px 4px 42px 0px"
									border-radius="6px"
									type="text"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 16px/20px --fontFamily-googleSourceSansPro"
								/>
								<Box display="flex" width="100%" align-items="center">
									<Button
										letter-spacing="0.07em"
										font="700 19px/23px --fontFamily-googleSourceSansPro"
										padding="16px 33px 16px 33px"
										background="#0E1317"
										border-radius="60px"
										border-color="--color-primary"
										border-width="6px"
										border-style="solid"
										margin="0px 30px 0px 0px"
										sm-margin="0px 10px 0px 0px"
										md-margin="0px 20px 0px 0px"
									>
										SEND
									</Button>
									<Text color="--grey" font="normal 400 14px/20px --fontFamily-sans" sm-font="normal 400 12px/20px --fontFamily-sans">
										By clicking the “SEND” button, you confirm that you
										<br />
										have read and agree to the User{" "}
										<Span
											color="--primary"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											Agreement
										</Span>
									</Text>
								</Box>
							</Formspree>
						</StackItem>
						{"    "}
					</Stack>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" border-width="0px" padding="50px 0 50px 0" sm-padding="30px 0 30px 0">
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/landing/logo-on-dark.svg" width="154px" height="auto" margin="0px 0px 0px 7px" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" margin="0px 0px 20px 0px" sm-margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						lg-flex-direction="column"
						lg-align-items="flex-start"
					/>
					{"        "}
					<Link
						href="/features/"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 0px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-margin="0px 9px 0px 9px"
					>
						FEATURES
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--biruza"
						font="700 14px/17px --fontFamily-googleSourceSansPro"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
					>
						Marketplace
					</Link>
					<Link
						href="/docs"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
					>
						DOCS
					</Link>
					<Link
						href="/roadmap"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
					>
						ROADMAP
					</Link>
					<Link
						href="/roadmap"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
					>
						UPDATE
					</Link>
					<Link
						href="/roadmap"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
					>
						AGREEMENT
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" sm-order="1">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text color="--grey" font="normal 400 14px/17px --fontFamily-sans" sm-margin="16px 0px 16px 9px" sm-padding="0px 0px 0px 9px">
						© All Rights Reserved
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" sm-justify-content="flex-start" />
					<Text color="--grey" font="normal 400 14px/17px --fontFamily-sans" sm-margin="16px 0px 16px 9px" sm-padding="0px 0px 0px 9px">
						© All Rights Reserved
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});