import React from "react";
import theme from "theme";
import { Theme, Link, Image, Icon, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdMenu, MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
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
						size="24px"
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
		<Section background="url(https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/Frame%2020.png?v=2020-10-29T14:21:26.108Z) 0% 100% /cover no-repeat scroll padding-box,#0E1317" padding="24px 0 90px 0" sm-padding="24px 0 60px 0">
			<Stack gap="16px" margin="0px -16px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="center" flex-direction="column" />
					{"        "}
					<Box margin="0px 0px 92px 0px" display="flex" sm-margin="0px 0px 31px 0px">
						<Link
							href="#"
							color="--biruza"
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							text-decoration-line="initial"
							margin="0px 3px 0px 0px"
						>
							Marketplace{" "}
						</Link>
						<Icon category="md" icon={MdKeyboardArrowRight} color="--grey" size="22px" />
						<Text
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							display="inline-block"
							color="--white"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
							margin="0px 3px 0px 3px"
						>
							Integration
						</Text>
					</Box>
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--white"
						text-align="center"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						sm-font="normal 600 60px/75px Source Sans Pro, sans-serif"
					>
						Integration
					</Text>
					<Text
						font="--lead"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="--white"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						width="50%"
						sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
						sm-width="90%"
						lg-width="80%"
					>
						Компоненты которую помогут интегрировать на ваш сайт какой-либо популярный  сервис, дополняющие функциональную часть вашего сайта (онлайн-чаты, комментарии, социальные виджеты и пр.)
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL1" padding="0px 0 200px 0" sm-padding="24px 0 24px 0">
			<Stack gap="0px">
				{"        "}
				<StackItem width="100%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"     "}
					<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small" sm-margin="50px 0px 0px 0px">
						{"    "}
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
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
					{"   "}{"    "}
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
					<Text
						color="--grey"
						font="normal 400 14px/17px --fontFamily-sans"
						sm-margin="16px 0px 16px 9px"
						sm-padding="0px 0px 0px 9px"
						lg-margin="16px 0px 16px 18px"
					>
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