import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Override, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section background="rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(14, 19, 23) 0%, rgb(34, 38, 46) 100%) repeat scroll 0% 0% / auto padding-box border-box" padding="24px 0 40px 0" sm-padding="24px 0 60px 0">
			<Stack gap="--cmp-stack-gap-default" margin="0px -16px 0px 0px" width="100%">
				{"        "}
				<StackItem width="100%">
					<Box margin="0px 0px 0px 0px" display="flex" sm-margin="0px 0px 31px 0px" width="100%">
						<Link
							href="/marketplace"
							color="--biruza"
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							text-decoration-line="initial"
							margin="0px 3px 0px 0px"
						>
							Marketplace{" "}
						</Link>
						<Icon category="md" icon={MdKeyboardArrowRight} color="--grey" size="22px" />
						<Link
							href="/content/"
							color="--biruza"
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							text-decoration-line="initial"
							margin="0px 3px 0px 3px"
						>
							Content
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
							Price
						</Text>
					</Box>
				</StackItem>
				<StackItem width="60%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="center" flex-direction="column" />
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
						Price
					</Text>
					<Text
						font="--lead"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="--white"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
						sm-width="90%"
						lg-width="80%"
						lg-font="normal 400 20px/27px Source Sans Pro, sans-serif"
					>
						При помощи данного компонента, вы можете разместить список ваших товаров или услуг с кратким описанием и ценой
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/price.svg?v=2020-11-02T18:49:13.431Z" object-position="100% 100%" width="90%" />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL1" padding="0px 0 0px 0">
			<Stack gap="--cmp-stack-gap-default" margin="0px -16px 0px 0px" width="100%">
				{"        "}
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" sm-flex-direction="column" />
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						sm-margin="0px 0px 26px 0px"
						width="100%"
						align-items="center"
						lg-justify-content="center"
					>
						<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/Arrowsdadasd.svg?v=2020-10-30T23:33:30.321Z" />
						<Text
							font="400 14px/18px --fontFamily-googleSourceCodePro"
							display="inline-block"
							color="--grey"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
							margin="0px 0px 0px 10px"
						>
							Version 1.0
						</Text>
					</Box>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						sm-margin="0px 0px 26px 0px"
						width="100%"
						align-items="center"
						lg-justify-content="center"
					>
						<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/FolderGroupadsad.svg?v=2020-10-30T23:33:47.781Z" />
						<Text
							font="400 14px/18px --fontFamily-googleSourceCodePro"
							display="inline-block"
							color="--grey"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
							margin="0px 0px 0px 10px"
						>
							Size:8.37 kb
						</Text>
					</Box>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						sm-margin="0px 0px 0px 0px"
						width="100%"
						align-items="center"
						lg-justify-content="center"
					>
						<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/eyesad.svg?v=2020-10-30T23:34:07.372Z" />
						<Text
							font="400 14px/18px --fontFamily-googleSourceCodePro"
							display="inline-block"
							color="--grey"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
							margin="0px 0px 0px 10px"
						>
							Views:123
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						sm-margin="0px 0px 30px 0px"
						width="100%"
						align-items="center"
						justify-content="flex-end"
						lg-justify-content="center"
					>
						<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/user-circle.1%201.svg?v=2020-10-30T23:34:42.769Z" />
						<Text
							font="400 14px/18px --fontFamily-googleSourceCodePro"
							display="inline-block"
							color="--grey"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
							margin="0px 0px 0px 10px"
						>
							Author: Claire Mengin
						</Text>
					</Box>
				</StackItem>
				<StackItem width="100%">
					<Hr width="100%" margin="0px 0px 0px 0px" padding="0px 0px 0px 0px" border-color="--color-biruza" />
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL1" padding="48px 0 90px 0" sm-padding="24px 0 24px 0">
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small">
				{"        "}
				<StackItem width="100%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Stack margin="0px 0px 0px 0px" gap="16px">
						{"    "}
						<StackItem width="100%" display="flex">
							<Override
								slot="StackItemContent"
								background="--color-darkL2"
								border-radius="0px"
								flex-direction="column"
								align-items="center"
								padding="0px 0px 0px 0px"
								justify-content="center"
							/>
							<Components.Price>
								<Override slot="Column Descr" color="#ffffff" />
								<Override slot="Column Price" color="#ffffff" />
								<Override slot="Column Title" color="#ffffff" />
							</Components.Price>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="60px 0px 0px 0px" gap="16px">
						{"    "}
						<StackItem width="100%" display="flex">
							<Override slot="StackItemContent" border-radius="0px" flex-direction="column" align-items="flex-start" />
							<Components.Codes width="100%">
								<Override
									slot="Code Text"
									font="16px/21px --fontFamily-googleRobotoMono"
									background="rgba(0, 0, 0, 1)"
									margin="0px 0px 0px 0px"
									padding="22px 16px 22px 16px"
									sm-font="13px/21px --fontFamily-googleRobotoMono"
								>
									import React from 'react';
									<br />
									import &#123; useOverrides &#125; from '@quarkly/components';
									<br />
									import &#123; Box, Text, Button &#125; from '@quarkly/widgets';
									<br />
									<br />
									const overrides = &#123;
									<br />
									{"    "}'Column': &#123; kind: 'Box' &#125;,
									<br />
									{"    "}'Column Title': &#123; kind: 'Text' &#125;,
									<br />
									{"    "}'Column Price': &#123; kind: 'Text' &#125;,
									<br />
									{"    "}'Column Descr': &#123; kind: 'Text' &#125;,
									<br />
									{"    "}'Column Button': &#123; kind: 'Button' &#125;,
									<br />
									&#125;;
									<br />
									<br />
									const PriceList = (&#123;
									<br />
									{"    "}size,
									<br />
									{"    "}show,
									<br />
									{"    "}height,
									<br />
									{"    "}design,
									<br />
									{"    "}active,
									<br />
									{"    "}...props
									<br />
									&#125;) =&gt; &#123;
									<br />
									{"    "}Array(+size || 1).fill().map((item, numb) =&gt; &#123;
									<br />
									{"        "}overrides[`Column $&#123;numb&#125;`] = &#123; 'kind': 'Box' &#125;
									<br />
									{"        "}overrides[`Column $&#123;numb&#125; Title`] = &#123; 'kind': 'Text' &#125;
									<br />
									{"        "}overrides[`Column $&#123;numb&#125; Price`] = &#123; 'kind': 'Text' &#125;
									<br />
									{"        "}overrides[`Column $&#123;numb&#125; Descr`] = &#123; 'kind': 'Text' &#125;
									<br />
									{"        "}overrides[`Column ${numb} Button`] = { 'kind': 'Button' }{" "}
									<br />
									{"    "}&#125;);
									<br />
									{"    "}
									<br />
									{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
									<br />
									{"    "}
									<br />
									{"    "}size = +size;
									<br />
									{"    "}show = +show;
									<br />
									{"    "}active = +active;
									<br />
									{"    "}
									<br />
									{"    "}return (
									<br />
									{"        "}&lt;Box
									<br />
									{"      "}&#123;...rest&#125;
									<br />
									{"      "}
									<br />
									{"            "}width="100%"
									<br />
									{"            "}max-width="100%"
									<br />
									{"            "}box-sizing="border-box"
									<br />
									{"            "}position="relative"
									<br />
									{"          "}overflow="hidden"
									<br />
									{"    "}&gt;
									<br />
									{"            "}&lt;Box
									<br />
									{"                "}position="static"
									<br />
									{"               "}flex-direction=&#123;design === 'vertical' ? 'row' : 'column'&#125;
									<br />
									{"                "}display="flex"
									<br />
									{"                "}
									<br />
									{"                "}max-width=&#123;design === 'vertical' && show !== size ? '100vw' : 'initial'&#125;
									<br />
									{"                "}max-height=&#123;design === 'horizontal' && height ? `$&#123;height&#125;px` : 'initial'&#125;
									<br />
									{"                "}overflow-x="auto"
									<br />
									{"                "}overflow-y=&#123;design === 'horizontal' && height ? 'auto' : 'initial'&#125;
									<br />
									{"            "}&gt;
									<br />
									{"                "}&#123; Array(+size || 1).fill().map((item, numb) =&gt; (
									<br />
									{"                    "}&lt;Box
									<br />
									{"                        "}padding=&#123;design === 'vertical' ? '32px 40px 48px' : '24px 32px'&#125;
									<br />
									{"                        "}width=&#123;design === 'vertical' ? `calc($&#123;100 / show&#125;% - $&#123;1 / show&#125;px)` : 'fit-content'&#125;
									<br />
									{"                        "}border="1px solid --color-lightD2"
									<br />
									{"                        "}border-right=&#123;design === 'vertical' && numb !== size ? 'none' : ''&#125;
									<br />
									{"                        "}border-bottom=&#123;design === 'horizontal' && numb !== size ? 'none' : ''&#125;
									<br />
									{"                        "}flex="1 0 auto"
									<br />
									{"                        "}box-sizing="border-box"
									<br />
									{"                        "}text-align="center"
									<br />
									{"                        "}
									<br />
									{"                        "}background=&#123;numb === active ? '--color-primary' : 'none'&#125;
									<br />
									{"                        "}border-color=&#123;numb === active ? '--color-primary' : ''&#125;
									<br />
									{"                        "}
									<br />
									{"                        "}align-items=&#123;design === 'vertical' ? 'space-between' : 'center'&#125;
									<br />
									{"                        "}justify-content=&#123;design === 'vertical' ? 'space-between' : 'center'&#125;
									<br />
									{"                        "}flex-direction=&#123;design === 'vertical' ? 'column' : 'row'&#125;
									<br />
									{"                        "}display="flex"
									<br />
									{"                        "}
									<br />
									{"                        "}md-width=&#123;design === 'vertical' ? `$&#123;size === 2 ? 50 : 42.5&#125;%` : 'fit-content'&#125;
									<br />
									{"                        "}sm-width=&#123;design === 'vertical' ? `$&#123;size === 1 ? 100 : 75&#125;%` : 'fit-content'&#125;
									<br />
									{"                        "}
									<br />
									{"                        "}min-width=&#123;design === 'horizontal' ? '100%' : ''&#125;
									<br />
									{"                        "}
									<br />
									{"                        "}&#123;...override('Column', `Column $&#123;numb&#125;`)&#125;
									<br />
									{"                    "}&gt;
									<br />
									{"                        "}&lt;Text
									<br />
									{"                            "}font-size="20px"
									<br />
									{"                            "}line-height="1.5"
									<br />
									{"                            "}font-weight="500"
									<br />
									{"                            "}margin-right=&#123;design === 'horizontal' ? '36px' : '0'&#125;
									<br />
									{"                            "}margin-bottom=&#123;design === 'vertical' ? '16px' : '16px'&#125;
									<br />
									{"                            "}color=&#123;numb === active ? '--color-light' : '--color-dark'&#125;
									<br />
									{"                            "}flex="1 0 auto"
									<br />
									{"                            "}
									<br />
									{"                            "}&#123;...override('Column Title', `Column $&#123;numb&#125; Title`)&#125;
									<br />
									{"                        "}&gt;
									<br />
									{"                            "}&#123;override(`Column $&#123;numb&#125; Title`).children || 'Awesome product'&#125;
									<br />
									{"                        "}&lt;/Text&gt;
									<br />
									{"                        "}&lt;Text
									<br />
									{"                            "}font-size="48px"
									<br />
									{"                            "}line-height="1"
									<br />
									{"                            "}font-weight="700"
									<br />
									{"                            "}margin-right=&#123;design === 'horizontal' ? '36px' : '0'&#125;
									<br />
									{"                            "}margin-bottom=&#123;design === 'vertical' ? '36px' : '16px'&#125;
									<br />
									{"                            "}color=&#123;numb === active ? '--color-light' : '--color-dark'&#125;
									<br />
									{"                            "}flex="1 0 auto"
									<br />
									{"                            "}
									<br />
									{"                            "}&#123;...override('Column Price', `Column $&#123;numb&#125; Price`)&#125;
									<br />
									{"                        "}&gt;
									<br />
									{"                            "}&#123;override(`Column $&#123;numb&#125; Price`).children || `\$$&#123;numb&#125;0`&#125;
									<br />
									{"                        "}&lt;/Text&gt;
									<br />
									{"                        "}&lt;Text
									<br />
									{"                            "}font-size="14px"
									<br />
									{"                            "}line-height="1.5"
									<br />
									{"                            "}font-weight="300"
									<br />
									{"                            "}margin="0 auto"
									<br />
									{"                            "}margin-bottom=&#123;design === 'vertical' ? '48px' : '16px'&#125;
									<br />
									{"                            "}min-width=&#123;design === 'horizontal' ? '180px' : ''&#125;
									<br />
									{"                            "}max-width=&#123;design === 'vertical' ? '180px' : '100%'&#125;
									<br />
									{"                            "}color=&#123;numb === active ? '--color-light' : '--color-dark'&#125;
									<br />
									{"                            "}flex="1 1 auto"
									<br />
									{"                            "}opacity=".8"
									<br />
									{"                            "}
									<br />
									{"                            "}&#123;...override('Column Descr', `Column $&#123;numb&#125; Descr`)&#125;
									<br />
									{"                        "}&gt;
									<br />
									{"                            "}&#123;override(`Column $&#123;numb&#125; Descr`).children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'&#125;
									<br />
									{"                        "}&lt;/Text&gt;
									<br />
									{"                        "}&lt;Button
									<br />
									{"                            "}width="100%"
									<br />
									{"                            "}max-width="180px"
									<br />
									{"                            "}font-weight="500"
									<br />
									{"                            "}border="1px solid --color-lightD2"
									<br />
									{"                            "}outline="none"
									<br />
									{"                            "}box-shadow="none"
									<br />
									{"                            "}flex="1 0 auto"
									<br />
									{"                            "}
									<br />
									{"                            "}color=&#123;numb === active ? '--color-dark' : '--color-primary'&#125;
									<br />
									{"                            "}background=&#123;numb === active ? '--color-secondary' : 'none'&#125;
									<br />
									{"                            "}border-color=&#123;numb === active ? '--color-secondary' : 'none'&#125;
									<br />
									{"                            "}
									<br />
									{"                            "}margin-top=&#123;design === 'vertical' ? '48px' : '0'&#125;
									<br />
									{"                            "}margin-left=&#123;design === 'horizontal' ? '48px' : 'auto'&#125;
									<br />
									{"                            "}margin-right=&#123;design === 'horizontal' ? '0' : 'auto'&#125;
									<br />
									{"                            "}transition="color .15s ease, opacity .15s ease"
									<br />
									{"                            "}
									<br />
									{"                            "}hover-color="--color-dark"
									<br />
									{"                            "}hover-opacity=".9"
									<br />
									{"                            "}
									<br />
									{"                            "}&#123;...override('Column Button', `Column $&#123;numb&#125; Button`)&#125;
									<br />
									{"                        "}&gt;
									<br />
									{"                            "}&#123;override(`Column $&#123;numb&#125; Button`).children || 'Buy'&#125;
									<br />
									{"                        "}&lt;/Button&gt;
									<br />
									{"                    "}&lt;/Box&gt;
									<br />
									{"                "}))&#125;
									<br />
									{"            "}&lt;/Box&gt;
									<br />
									{"        "}&lt;/Box&gt;
									<br />
									{"    "});
									<br />
									&#125;;
									<br />
									<br />
									const propInfo = &#123;
									<br />
									{"    "}size: &#123;
									<br />
									{"        "}title: 'Products',
									<br />
									{"        "}control: 'text',
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: '.Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									{"    "}active: &#123;
									<br />
									{"        "}title: 'Active column',
									<br />
									{"        "}control: 'text',
									<br />
									{"        "}type: 'number',
									<br />
									{"        "}category: '.Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									{"    "}design: &#123;
									<br />
									{"        "}title: 'Design',
									<br />
									{"        "}control: 'radio-group',
									<br />
									{"        "}variants: [
									<br />
									{"            "}'vertical',
									<br />
									{"            "}'horizontal'
									<br />
									{"        "}],
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: '.Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									{"    "}show: &#123;
									<br />
									{"        "}title: 'Show on screen (for vertical design)',
									<br />
									{"        "}control: 'text',
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: 'Vertical',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									{"    "}height: &#123;
									<br />
									{"        "}title: 'Show on screen (for horizontal design)',
									<br />
									{"        "}control: 'text',
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: 'Horizontal',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									&#125;;
									<br />
									<br />
									const defaultProps = &#123;
									<br />
									{"    "}size: 4,
									<br />
									{"    "}show: 4,
									<br />
									{"    "}height: 517,
									<br />
									{"    "}active: 2,
									<br />
									{"    "}design: 'vertical',
									<br />
									&#125;
									<br />
									<br />
									export default Object.assign(PriceList, &#123;
									<br />
									{"    "}title: 'Price List',
									<br />
									{"    "}description: &#123;
									<br />
									{"        "}en: 'Awesome price list!',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}overrides,
									<br />
									{"  "}propInfo,
									<br />
									{"  "}defaultProps,
									<br />
									&#125;);{" "}
									<br />
								</Override>
							</Components.Codes>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="60px 0px 0px 0px" width="100%" gap="16px" padding="0px 0px 0px 0px">
						{"        "}
						<Text font="--headline3" color="#ffffff" padding="0px 0px 0px 5px">
							Props
						</Text>
						<StackItem
							width="100%"
							display="flex"
							sm-width="100%"
							nout-width="100%"
							align-items="flex-start"
							justify-content="flex-start"
							flex-wrap="wrap"
							margin="0px 0px 0px 0px"
						>
							<Override slot="StackItemContent" border-width="0px" border-color="#22262E" flex-direction="column" />
							<Box lg-overflow-x="scroll">
								<Box
									border-color="#22262E"
									border-width="1px 1px 0px 1px"
									border-style="solid"
									lg-width="1200px"
									md-width="1000px"
								>
									<Box display="flex">
										<Box
											width="25%"
											display="flex"
											align-items="flex-start"
											padding="0px 0px 0px 0px"
											background="rgba(237, 237, 237, 0)"
											border-width="0px 0px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											md-border-width="0px 0px 1px 0px"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												color="#ffffff"
												font="700 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												Name
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 0px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											align-items="center"
											justify-content="center"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												color="#ffffff"
												font="700 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												Description
											</Text>
										</Box>
										<Box
											width="15%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
											align-items="center"
											justify-content="center"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												color="#ffffff"
												font="700 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												Type
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
											justify-content="center"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												color="#ffffff"
												font="700 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												Value
											</Text>
										</Box>
									</Box>
									<Box display="flex">
										<Box
											width="25%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(237, 237, 237, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												color="#ffffff"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												Products
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											align-items="center"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Количество строк или колонок
											</Text>
										</Box>
										<Box
											width="15%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 1px 1px 0px"
											justify-content="center"
										>
											<Text
												padding="0px 0px 0px 0px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width="0px"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												input
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width="0px"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Значение больше 0
											</Text>
										</Box>
									</Box>
									<Box display="flex">
										<Box
											width="25%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(237, 237, 237, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												width="100%"
												color="#ffffff"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Active column
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Выделить необходимую позицию в прайсе
											</Text>
										</Box>
										<Box
											width="15%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											justify-content="center"
											align-items="center"
										>
											<Text
												padding="0px 0px 0px 0px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												input
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width="0px"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Значение от 1 до Products
											</Text>
										</Box>
									</Box>
									<Box display="flex">
										<Box
											width="25%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(237, 237, 237, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												width="100%"
												color="#ffffff"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Design
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Включить горизонтальное или вертикальное отображение
											</Text>
										</Box>
										<Box
											width="15%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											justify-content="center"
											align-items="center"
										>
											<Text
												padding="0px 0px 0px 0px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												radio-group
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width="0px"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											/>
										</Box>
									</Box>
									<Box display="flex">
										<Box
											width="25%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(237, 237, 237, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												width="100%"
												color="#ffffff"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Show on screen (horizontal)
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Ограничить высоту компонента по высоте
											</Text>
										</Box>
										<Box
											width="15%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											justify-content="center"
											align-items="center"
										>
											<Text
												padding="0px 0px 0px 0px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												input
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width="0px"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Значение больше 0
											</Text>
										</Box>
									</Box>
									<Box display="flex">
										<Box
											width="25%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(237, 237, 237, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												width="100%"
												color="#ffffff"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Show on screen (vertical)
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Показывать N колонок на экране
											</Text>
										</Box>
										<Box
											width="15%"
											display="flex"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-width="0px 1px 1px 0px"
											border-style="solid"
											border-color="#22262E"
											justify-content="center"
											align-items="center"
										>
											<Text
												padding="0px 0px 0px 0px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width={0}
												border-color="rgba(218, 218, 218, 1)"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
												md-text-align="center"
											>
												input
											</Text>
										</Box>
										<Box
											width="30%"
											display="flex"
											align-items="center"
											padding="0px 0px 0px 0px"
											background="rgba(255, 255, 255, 0)"
											border-color="#22262E"
											border-style="solid"
											border-width="0px 0px 1px 0px"
										>
											<Text
												padding="36px 24px 36px 36px"
												margin="0px 0px 0px 0px"
												font="400 20px/25px --fontFamily-googleSourceSansPro"
												color="#ffffff"
												md-border-width="0px 0px 1px 0px"
												border-width="0px"
												text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
											>
												Значение от 1 до Products
											</Text>
										</Box>
									</Box>
								</Box>
							</Box>
							{"            "}
						</StackItem>
					</Stack>
					<Components.Faq>
						<Override slot="link" href="/faq" />
					</Components.Faq>
					<Components.PopularComponents />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" border-width="0px" padding="50px 0 50px 0" sm-padding="30px 0 30px 0">
			<Stack margin="0px 0px 0px 0px">
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
						margin="16px 0px 16px 9px"
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