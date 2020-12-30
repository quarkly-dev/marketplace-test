import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Image, Hr, Strong, Em } from "@quarkly/widgets";
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
							Accordion{"\n\n"}
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
						Accordion
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
						Наверное это самый сложный элемент для установки, но при этом самый эффективный, так как  при помощи него возможно организовать максимальную информативность при небольшом занимаемом пространстве.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/accord.svg?v=2020-11-06T11:34:28.511Z" object-position="100% 100%" width="90%" />
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
							Size: 7.99 kb
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
							Author: Quarkly Team
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
							<Components.Accordeon width="70%">
								<Components.AccItem>
									<Components.AccSum>
										<Text margin="0px 0px 0px 0px">
											<Strong
												overflow-wrap="normal"
												word-break="normal"
												white-space="normal"
												text-indent="0"
												text-overflow="clip"
												hyphens="manual"
											>
												Заголовок аккордеона
											</Strong>
											{"\n\n"}
										</Text>
									</Components.AccSum>
									<Components.AccDet>
										<Override slot="Accordion Details" background="#ffffff" />
										<Text>
											<Em>
												Здесь возможно разместить любые элементы (изображения, текст, видео и пр.)
											</Em>
											<br />
											{"\n\n"}
										</Text>
									</Components.AccDet>
								</Components.AccItem>
							</Components.Accordeon>
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="60px 0px 0px 0px" gap="16px">
						{"    "}
						<StackItem width="100%" display="flex">
							<Override slot="StackItemContent" border-radius="0px" flex-direction="column" align-items="flex-start" />
							<Text color="#ffffff" font="--headline4" margin="0px 0px 16px 0px">
								1. Вам необходимо разместить компонент "Accordion".
								<br />
								{"\n\n"}
							</Text>
							<Components.Codes width="100%">
								<Override
									slot="Code Text"
									font="16px/21px --fontFamily-googleRobotoMono"
									background="rgba(0, 0, 0, 1)"
									margin="0px 0px 0px 0px"
									padding="22px 16px 22px 16px"
									sm-font="13px/21px --fontFamily-googleRobotoMono"
								>
									import React, &#123; useReducer &#125; from 'react';
import &#123; Box &#125; from '@quarkly/widgets';

const defaultProps = &#123;
	'allowMultiple': true,
	'allowToggle': true,
&#125;;

const propInfo = &#123;
	allowMultiple: &#123;
		control: 'checkbox',
		category: 'Main',
		weight: '1',
	&#125;,
	allowToggle: &#123;
		control: 'checkbox',
		category: 'Main',
		weight: '1',
	&#125;,
&#125;;

const setOpenItemsReducer = (state, action) =&gt; &#123;
	switch (action.type) &#123;
		case 'add':
			return [...state, action.idx];
		case 'delete':
			return state.filter(idx =&gt; idx !== action.idx);
		case 'replace':
			return [action.idx];
	  default:
		return state;
	&#125;
&#125;;

const Accordion = (&#123; allowMultiple, allowToggle, children, ...rest &#125;) =&gt; &#123;
	const [openItems, setOpenItemsDispatch] = useReducer(setOpenItemsReducer, []);

	const setOpenItem = (&#123; idx, isOpen, disabled &#125;) =&gt; &#123;
		const
			isOpenLastEl = openItems.length === 1,
			isPreventDoubleClick = !allowMultiple && !allowToggle && isOpen && isOpenLastEl,
			isRequireLastElOpen = !allowToggle && isOpen && isOpenLastEl,
			type = !isOpen ? (allowMultiple ? 'add' : 'replace') : 'delete';

		if (isPreventDoubleClick || isRequireLastElOpen || disabled) &#123;
			return;
		&#125;
		
		setOpenItemsDispatch(&#123; type, idx &#125;);
	&#125;

	return (
		
			&#123;React.Children.map(children, child =&gt;
				React.isValidElement(child)
					? React.cloneElement(child, &#123; openItems, setOpenItem &#125;)
					: child
			)&#125;
		
	);
&#125;;

export default Object.assign(Accordion, &#123;
	defaultProps,
	propInfo,
&#125;);{"\n"}
								</Override>
							</Components.Codes>
							<Text color="#ffffff" font="--headline4" margin="50px 0px 16px 0px">
								2. Внутрь компонента "Accordion",  необходимо добавить компонент "Accordion-item".
								<br />
								<br />
								При необходимости несколько аккордеонов, вы можете дублировать этот компонент.{"\n\n"}
							</Text>
							<Components.Codes width="100%">
								<Override
									slot="Code Text"
									font="16px/21px --fontFamily-googleRobotoMono"
									background="rgba(0, 0, 0, 1)"
									margin="0px 0px 0px 0px"
									padding="22px 16px 22px 16px"
									sm-font="13px/21px --fontFamily-googleRobotoMono"
								>
									import React, &#123; useState, useEffect &#125; from 'react';
import &#123; Box &#125; from '@quarkly/widgets';

const defaultProps = &#123;
	'open': true,
	'disabled': false,
&#125;;

const propInfo = &#123;
	open: &#123;
		control: 'checkbox',
		category: 'Main',
		weight: '1',
	&#125;,
	disabled: &#123;
		control: 'checkbox',
		category: 'Main',
		weight: '1',
	&#125;,
&#125;;

function AccordionItem(&#123; open, disabled, openItems, setOpenItem, children, ...rest &#125;) &#123;
	const [idx] = useState(`$&#123; Date.now() + Math.random() &#125;`);
	const isOpen = openItems.includes(idx);
	
	useEffect(() =&gt; &#123;
		if (open) &#123;
			setOpenItem(&#123; idx, open, disabled &#125;);
		&#125;
	&#125;, []);

	return (
		
			&#123;React.Children.map(children, child =&gt;
				React.isValidElement(child)
					? React.cloneElement(child, &#123; idx, isOpen, disabled, setOpenItem &#125;)
					: child
			)&#125;
		
	);
&#125;;

export default Object.assign(AccordionItem, &#123;
	defaultProps,
	propInfo,
&#125;);{"\n"}
								</Override>
							</Components.Codes>
							<Text color="#ffffff" font="--headline4" margin="50px 0px 16px 0px">
								3. Внутрь компонента "Accordion-item", вам нужно разместить "Accordion-summary", который будет являться заголовком аккордеона.{"\n\n\n\n"}
							</Text>
							<Components.Codes width="100%">
								<Override
									slot="Code Text"
									font="16px/21px --fontFamily-googleRobotoMono"
									background="rgba(0, 0, 0, 1)"
									margin="0px 0px 0px 0px"
									padding="22px 16px 22px 16px"
									sm-font="13px/21px --fontFamily-googleRobotoMono"
								>
									import React from "react";
import &#123; useOverrides &#125; from "@quarkly/components";
import &#123; Box, Icon &#125; from "@quarkly/widgets";

const overrides = &#123;
	'AccordionSummary': &#123;
		kind: 'Box',
		props: &#123;
			opacity: '1',
		&#125;
	&#125;,
	'AccordionSummary-open': &#123;
		kind: 'Box',
		props: &#123;&#125;
	&#125;,
	'AccordionSummary-disabled': &#123;
		kind: 'Box',
		props: &#123;
			'pointer-events': 'none',
			cursor: 'default',
			opacity: '.5',
		&#125;
	&#125;,
	'AccordionSummaryIcon': &#123;
		kind: 'Icon',
		props: &#123;
			size: '18px',
			color: '#7A869A',
			category: 'io',
			icon: 'IoIosArrowDown',
		&#125;
	&#125;,
	'AccordionSummaryIcon-open': &#123;
		kind: 'Icon',
		props: &#123;
			icon: 'IoIosArrowUp',
		&#125;
	&#125;,
	'AccordionSummaryIcon-disabled': &#123;
		kind: 'Icon',
		props: &#123;
			cursor: 'default'
		&#125;
	&#125;,
&#125;;

const effects = &#123; 
	hover: ':hover',
&#125;;

const AccordionSummary = (&#123; idx, isOpen, setOpenItem, disabled, ...props &#125;) =&gt; &#123;
	const &#123; override, children, rest &#125; = useOverrides(props, overrides, &#123;&#125;);

	return (
		 setOpenItem(&#123; idx, isOpen, disabled &#125;)&#125;
			
			&#123;...rest&#125;
			&#123;...override(
				'AccordionSummary',
				isOpen && 'AccordionSummary-open',
				disabled && 'AccordionSummary-disabled',
			)&#125;
		&gt;
			
			&#123;children&#125;
		
	);
&#125;;

export default Object.assign(AccordionSummary, &#123;
	overrides,
	effects,
&#125;);{"\n"}
								</Override>
							</Components.Codes>
							<Text color="#ffffff" font="--headline4" margin="50px 0px 16px 0px">
								4. Внутрь компонента "Accordion-item", вы также размещаете "Accordion-details", в который вы добавляете необходимый контент (текст, картинки, ссылки и пр.)
								<br />
								{"\n\n"}
							</Text>
							<Components.Codes width="100%">
								<Override
									slot="Code Text"
									font="16px/21px --fontFamily-googleRobotoMono"
									background="rgba(0, 0, 0, 1)"
									margin="0px 0px 0px 0px"
									padding="22px 16px 22px 16px"
									sm-font="13px/21px --fontFamily-googleRobotoMono"
								>
									import React from "react";
import &#123; useOverrides &#125; from "@quarkly/components";
import &#123; Box &#125; from "@quarkly/widgets";

const overrides = &#123;
	'Accordion Details': &#123;
		kind: 'Box',
		props: &#123;
			'margin-bottom': '-1px',
			'max-height': '0px'
		&#125;
	&#125;,
	'Accordion Details :open': &#123;
		kind: 'Box',
		props: &#123;
			'margin-bottom': '0px',
			'min-height': '16px',
			'max-height': 'auto'
		&#125;
	&#125;,
	'Accordion Details :disabled': &#123;
		kind: 'Box',
		props: &#123;&#125;
	&#125;,
&#125;;

const AccordionItemDetails = (&#123; isOpen, disabled, ...props &#125;) =&gt; &#123;
	const &#123; override, children, rest &#125; = useOverrides(props, overrides, &#123;&#125;);
	
	return (
		
			&#123;children&#125;
		
	);
&#125;;

export default Object.assign(AccordionItemDetails, &#123;
	overrides,
&#125;);{"\n"}
								</Override>
							</Components.Codes>
						</StackItem>
						{"    "}
					</Stack>
					<Components.Faq>
						<Override slot="link" href="/faq" />
					</Components.Faq>
					{"    "}
				</StackItem>
			</Stack>
			<Components.PopularComponents />
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