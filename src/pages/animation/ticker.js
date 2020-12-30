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
							href="/animation/"
							color="--biruza"
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							text-decoration-line="initial"
							margin="0px 3px 0px 3px"
						>
							Animation{"\n\n"}
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
							Ticker{"\n\n"}
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
						Ticker
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
						Эта бегущая строка, в которой вы можете написать любой текст и выбрать скорость прокрутки и направление текста.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/ticker.svg?v=2020-11-02T22:01:38.490Z" object-position="100% 100%" width="90%" />
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
							Size:

1.12



 kb
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
							Author: Christina Meir
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
								padding="50px 0px 50px 0px"
								justify-content="center"
							/>
							<Components.Ticker width="80%" text-align="center" color="#ffffff" />
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
									import &#123; Box, Text &#125; from '@quarkly/widgets';
									<br />
									<br />
									let overrides = &#123;
									<br />
									{"  "}'Timeline Line': &#123; kind: 'Box' &#125;,
									<br />
									{"  "}'Timeline Item': &#123; kind: 'Box' &#125;,
									<br />
									{"  "}'Timeline Point': &#123; kind: 'Box' &#125;,
									<br />
									{"  "}'Timeline Dates': &#123; kind: 'Text' &#125;,
									<br />
									{"  "}'Timeline Title': &#123; kind: 'Text' &#125;,
									<br />
									{"  "}'Timeline Descr': &#123; kind: 'Text' &#125;,
									<br />
									&#125;;
									<br />
									<br />
									const TimelineLine = (&#123;
									<br />
									{"  "}alignDesktop,
									<br />
									{"  "}alignMobile,
									<br />
									{"  "}media,
									<br />
									{"  "}override,
									<br />
									&#125;) =&gt; &#123;
									<br />
									{"  "}const styles = &#123;
									<br />
									{"    "}'from the left': &#123;
									<br />
									{"      "}lineLeft: '50%',
									<br />
									{"      "}lineRight: 'auto',
									<br />
									{"      "}lineTransform: 'translateX(-50%)',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}'from the right': &#123;
									<br />
									{"      "}lineLeft: 'auto',
									<br />
									{"      "}lineRight: '50%',
									<br />
									{"      "}lineTransform: 'translateX(50%)',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}'to the left': &#123;
									<br />
									{"      "}lineLeft: '2px',
									<br />
									{"      "}lineRight: 'auto',
									<br />
									{"      "}lineTransform: 'none',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}'to the right': &#123;
									<br />
									{"      "}lineLeft: 'auto',
									<br />
									{"      "}lineRight: '2px',
									<br />
									{"      "}lineTransform: 'none',
									<br />
									{"    "}&#125;,
									<br />
									{"  "}&#125;;
									<br />
									{"  "}
									<br />
									{"  "}overrides[`Timeline Line`].props = &#123;
									<br />
									{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].lineLeft,
									<br />
									{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].lineRight,
									<br />
									{"    "}[`$&#123;media&#125;-transform`]: styles[alignMobile].lineTransform,
									<br />
									{"  "}&#125;;
									<br />
									{"  "}
									<br />
									{"  "}return (
									<br />
									{"    "}&lt;Box
									<br />
									{"      "}top="0"
									<br />
									{"      "}width="2px"
									<br />
									{"      "}min-width="auto"
									<br />
									{"      "}height="100%"
									<br />
									{"      "}background-color="--color-dark"
									<br />
									{"      "}position="absolute"
									<br />
									{"      "}opacity=".1"
									<br />
									{"      "}
									<br />
									{"      "}left=&#123;styles[alignDesktop].lineLeft&#125;
									<br />
									{"      "}right=&#123;styles[alignDesktop].lineRight&#125;
									<br />
									{"      "}transform=&#123;styles[alignDesktop].lineTransform&#125;
									<br />
									{"      "}
									<br />
									{"      "}&#123;...override('Timeline Line')&#125;
									<br />
									{"    "}/&gt;
									<br />
									{"  "});
									<br />
									&#125;
									<br />
									<br />
									const TimelineItem = (&#123;
									<br />
									{"  "}numb,
									<br />
									{"  "}alignDesktop,
									<br />
									{"  "}alignMobile,
									<br />
									{"  "}media,
									<br />
									{"  "}override,
									<br />
									&#125;) =&gt; &#123;
									<br />
									{"  "}const styles = &#123;
									<br />
									{"    "}'from the left': &#123;
									<br />
									{"      "}itemPaddingLeft: numb % 2 ? '30px' : '',
									<br />
									{"      "}itemPaddingRight: numb % 2 ? '' : '30px',
									<br />
									{"      "}itemPaddingBottom: '15px',
									<br />
									{"      "}itemWidth: '50%',
									<br />
									{"      "}itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
									<br />
									{"      "}itemTextAlign: numb % 2 ? 'left' : 'right',
									<br />
									{"      "}pointLeft: numb % 2 ? '-3px' : '',
									<br />
									{"      "}pointRight: numb % 2 ? '' : '-3px',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}'from the right': &#123;
									<br />
									{"      "}itemPaddingLeft: numb % 2 ? '' : '30px',
									<br />
									{"      "}itemPaddingRight: numb % 2 ? '30px' : '',
									<br />
									{"      "}itemPaddingBottom: '15px',
									<br />
									{"      "}itemWidth: '50%',
									<br />
									{"      "}itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
									<br />
									{"      "}itemTextAlign: numb % 2 ? 'right' : 'left',
									<br />
									{"      "}pointLeft: numb % 2 ? '' : '-3px',
									<br />
									{"      "}pointRight: numb % 2 ? '-3px' : '',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}'to the left': &#123;
									<br />
									{"      "}itemPaddingLeft: '30px',
									<br />
									{"      "}itemPaddingRight: '0px',
									<br />
									{"      "}itemPaddingBottom: '30px',
									<br />
									{"      "}itemWidth: '100%',
									<br />
									{"      "}itemAlignSelf: 'flex-start',
									<br />
									{"      "}itemTextAlign: 'left',
									<br />
									{"      "}pointLeft: '0',
									<br />
									{"      "}pointRight: 'auto',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}'to the right': &#123;
									<br />
									{"      "}itemPaddingLeft: '0px',
									<br />
									{"      "}itemPaddingRight: '30px',
									<br />
									{"      "}itemPaddingBottom: '30px',
									<br />
									{"      "}itemWidth: '100%',
									<br />
									{"      "}itemAlignSelf: 'flex-end',
									<br />
									{"      "}itemTextAlign: 'right',
									<br />
									{"      "}pointLeft: 'auto',
									<br />
									{"      "}pointRight: '0',
									<br />
									{"    "}&#125;,
									<br />
									{"  "}&#125;;
									<br />
									{"  "}
									<br />
									{"  "}overrides['Timeline Item'].props = &#123;
									<br />
									{"    "}[`$&#123;media&#125;-padding-left`]: styles[alignMobile].itemPaddingLeft,
									<br />
									{"    "}[`$&#123;media&#125;-padding-right`]: styles[alignMobile].itemPaddingRight,
									<br />
									{"    "}[`$&#123;media&#125;-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
									<br />
									{"    "}[`$&#123;media&#125;-width`]: styles[alignMobile].itemWidth,
									<br />
									{"    "}[`$&#123;media&#125;-align-self`]: styles[alignMobile].itemAlignSelf,
									<br />
									{"    "}[`$&#123;media&#125;-text-align`]: styles[alignMobile].itemTextAlign,
									<br />
									{"  "}&#125;;
									<br />
									{"  "}overrides['Timeline Point'].props = &#123;
									<br />
									{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].pointLeft,
									<br />
									{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].pointRight,
									<br />
									{"  "}&#125;;
									<br />
									{"  "}
									<br />
									{"  "}return (
									<br />
									{"    "}&lt;Box
									<br />
									{"      "}padding-left=&#123;styles[alignDesktop].itemPaddingLeft&#125;
									<br />
									{"      "}padding-right=&#123;styles[alignDesktop].itemPaddingRight&#125;
									<br />
									{"      "}padding-bottom=&#123;styles[alignDesktop].itemPaddingBottom&#125;
									<br />
									{"      "}width=&#123;styles[alignDesktop].itemWidth&#125;
									<br />
									{"      "}align-self=&#123;styles[alignDesktop].itemAlignSelf&#125;
									<br />
									{"      "}text-align=&#123;styles[alignDesktop].itemTextAlign&#125;
									<br />
									{"      "}box-sizing="border-box"
									<br />
									{"      "}position="relative"
									<br />
									{"      "}
									<br />
									{"      "}&#123;...override('Timeline Item', `Timeline $&#123;numb&#125; Item`)&#125;
									<br />
									{"    "}&gt;
									<br />
									{"      "}&lt;Box
									<br />
									{"        "}top="10px"
									<br />
									{"        "}left=&#123;styles[alignDesktop].pointLeft&#125;
									<br />
									{"        "}right=&#123;styles[alignDesktop].pointRight&#125;
									<br />
									{"        "}width="6px"
									<br />
									{"        "}min-width="auto"
									<br />
									{"        "}height="6px"
									<br />
									{"        "}min-height="auto"
									<br />
									{"        "}background-color="--color-dark"
									<br />
									{"        "}border-radius="50%"
									<br />
									{"        "}position="absolute"
									<br />
									{"        "}
									<br />
									{"        "}&#123;...override('Timeline Point', `Timeline $&#123;numb&#125; Point`)&#125;
									<br />
									{"      "}/&gt;
									<br />
									{"      "}&lt;Text
									<br />
									{"        "}margin="0 0 8px"
									<br />
									{"        "}font="--font-base"
									<br />
									{"        "}color="--color-darkL1"
									<br />
									{"        "}
									<br />
									{"        "}&#123;...override('Timeline Dates', `Timeline $&#123;numb&#125; Dates`)&#125;
									<br />
									{"      "}&gt;
									<br />
									{"        "}&#123;override(`Timeline $&#123;numb&#125; Dates`).children || '18:00 - 20:30'&#125;
									<br />
									{"      "}&lt;/Text&gt;
									<br />
									{"      "}&lt;Text
									<br />
									{"        "}margin="0 0 6px"
									<br />
									{"        "}font="--font-headline3"
									<br />
									{"        "}color="--color-dark"
									<br />
									{"        "}
									<br />
									{"        "}&#123;...override('Timeline Title', `Timeline $&#123;numb&#125; Title`)&#125;
									<br />
									{"      "}&gt;
									<br />
									{"        "}&#123;override(`Timeline $&#123;numb&#125; Title`).children || 'Desktop vs mobile'&#125;
									<br />
									{"      "}&lt;/Text&gt;
									<br />
									{"      "}&lt;Text
									<br />
									{"        "}margin="0"
									<br />
									{"        "}font="--font-base"
									<br />
									{"        "}color="--color-darkL2"
									<br />
									{"        "}
									<br />
									{"        "}&#123;...override('Timeline Descr', `Timeline $&#123;numb&#125; Descr`)&#125;
									<br />
									{"      "}&gt;
									<br />
									{"        "}&#123;override(`Timeline $&#123;numb&#125; Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'&#125;
									<br />
									{"      "}&lt;/Text&gt;
									<br />
									{"    "}&lt;/Box&gt;
									<br />
									{"  "})
									<br />
									&#125;;
									<br />
									<br />
									const Timeline = (&#123;
									<br />
									{"    "}items,
									<br />
									{"  "}alignDesktop,
									<br />
									{"  "}alignMobile,
									<br />
									{"  "}media,
									<br />
									{"    "}...props
									<br />
									&#125;) =&gt; &#123;
									<br />
									{"  "}items = +items;
									<br />
									{"  "}
									<br />
									{"  "}Array(items || 0).fill().map((item, numb) =&gt; &#123;
									<br />
									{"        "}overrides[`Timeline $&#123;numb&#125; Item`] = &#123; kind: 'Box' &#125;
									<br />
									{"        "}overrides[`Timeline $&#123;numb&#125; Point`] = &#123; kind: 'Box' &#125;
									<br />
									{"        "}overrides[`Timeline $&#123;numb&#125; Dates`] = &#123; kind: 'Text' &#125;
									<br />
									{"        "}overrides[`Timeline $&#123;numb&#125; Title`] = &#123; kind: 'Text' &#125;
									<br />
									{"        "}overrides[`Timeline $&#123;numb&#125; Descr`] = &#123; kind: 'Text' &#125;
									<br />
									{"    "}&#125;);
									<br />
									{"  "}
									<br />
									{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
									<br />
									{"    "}
									<br />
									{"    "}return (
									<br />
									{"        "}&lt;Box
									<br />
									{"            "}width="100%"
									<br />
									{"            "}max-width="100%"
									<br />
									{"      "}flex-direction="column"
									<br />
									{"            "}box-sizing="border-box"
									<br />
									{"            "}position="relative"
									<br />
									{"      "}display="flex"
									<br />
									{"          "}overflow-x="hidden"
									<br />
									{"      "}overflow-y="visible"
									<br />
									{"      "}
									<br />
									{"      "}&#123;...rest&#125;
									<br />
									{"    "}&gt;
									<br />
									{"      "}&lt;TimelineLine
									<br />
									{"        "}alignDesktop=&#123;alignDesktop&#125;
									<br />
									{"        "}alignMobile=&#123;alignMobile&#125;
									<br />
									{"        "}media=&#123;media&#125;
									<br />
									{"        "}override=&#123;override&#125;
									<br />
									{"      "}/&gt;
									<br />
									{"      "}&#123; Array(items || 1).fill().map((item, numb) =&gt; (
									<br />
									{"        "}&lt;TimelineItem
									<br />
									{"          "}numb=&#123;numb&#125;
									<br />
									{"          "}alignDesktop=&#123;alignDesktop&#125;
									<br />
									{"          "}alignMobile=&#123;alignMobile&#125;
									<br />
									{"          "}media=&#123;media&#125;
									<br />
									{"          "}override=&#123;override&#125;
									<br />
									{"        "}/&gt;
									<br />
									{"      "}))&#125;
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
									{"    "}items: &#123;
									<br />
									{"        "}title: 'Number of items',
									<br />
									{"        "}control: 'number',
									<br />
									{"        "}type: 'number',
									<br />
									{"        "}category: 'Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									{"  "}alignDesktop: &#123;
									<br />
									{"        "}title: 'Alignment of items on the desktop',
									<br />
									{"        "}control: 'select',
									<br />
									{"    "}variants: [
									<br />
									{"      "}'from the left',
									<br />
									{"      "}'from the right',
									<br />
									{"      "}'to the left',
									<br />
									{"      "}'to the right'
									<br />
									{"    "}],
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: 'Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"    "}&#125;,
									<br />
									{"  "}alignMobile: &#123;
									<br />
									{"    "}title: 'Alignment of items on the mobile',
									<br />
									{"        "}control: 'select',
									<br />
									{"    "}variants: [
									<br />
									{"      "}'to the left',
									<br />
									{"      "}'to the right'
									<br />
									{"    "}],
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: 'Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"  "}&#125;,
									<br />
									{"  "}media: &#123;
									<br />
									{"    "}title: 'Mobile starts with the breakpoint',
									<br />
									{"        "}control: 'text',
									<br />
									{"        "}type: 'string',
									<br />
									{"        "}category: 'Main',
									<br />
									{"        "}weight: 1,
									<br />
									{"  "}&#125;,
									<br />
									&#125;;
									<br />
									<br />
									const defaultProps = &#123;
									<br />
									{"    "}items: 8,
									<br />
									{"  "}alignDesktop: 'from the left',
									<br />
									{"  "}alignMobile: 'to the left',
									<br />
									{"  "}media: 'sm',
									<br />
									&#125;
									<br />
									<br />
									export default Object.assign(Timeline, &#123;
									<br />
									{"    "}title: 'Timeline',
									<br />
									{"    "}description: &#123;
									<br />
									{"        "}en: 'Awesome Timeline component!',
									<br />
									{"    "}&#125;,
									<br />
									{"    "}overrides,
									<br />
									{"  "}propInfo,
									<br />
									{"  "}defaultProps,
									<br />
									&#125;);
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
												Speed
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
												Задать скорость перемещения текста
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
												Число больше 0
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
												Direction
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
												Направление перемещения текста{"\n\n"}
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
												select
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
												Mode
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
												Метод перемещения текста
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
												select
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
												Move
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
												Включить\отключить анимацию
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
												radio
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