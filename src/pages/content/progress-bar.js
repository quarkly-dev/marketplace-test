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
							Progress-bar{"\n\n"}
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
						Progress-bar{"\n\n"}
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
						Размещаем индикатор процесса, который представляет собой, как прямоугольную область, так и круг, который заполняется по мере выполнения какой-либо задачи, например, загрузки файла.{" "}
						<br />
						<br />
						Индикатор процесса заполняется слева направо и исходя из тех данных которые, вы в него установите{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/bar.svg?v=2020-11-02T19:04:42.330Z" object-position="100% 100%" width="90%" />
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

3.52



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
							Author: Andrey Golovko
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
							<Components.ProgressBar height="13.385px" background="rgba(0, 0, 0, 0)" />
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
									import React from "react";
									<br />
									import atomize from "@quarkly/atomize";
									<br />
									import &#123; Circle, Line &#125; from "rc-progress";
									<br />
									<br />
									// some component
									<br />
									<br />
									const CSSVarFix = (x) =&gt;
									<br />
									<br />
									{"  "}x.substring(0, 2) === "--" ? `var(--qtheme-color-$&#123;x.substring(2)&#125;)` : x;
									<br />
									<br />
									const Wrapper = atomize.div();
									<br />
									const Indicator = atomize.div();
									<br />
									const CircleProgress = (&#123;
									<br />
									{"  "}percent,
									<br />
									{"  "}font,
									<br />
									{"  "}width,
									<br />
									{"  "}height,
									<br />
									{"  "}"data-qid": dQid,
									<br />
									<br />
									{"  "}...props
									<br />
									<br />
									&#125;) =&gt; &#123;
									<br />
									<br />
									{"  "}return (
									<br />
									<br />
									{"    "}&lt;Wrapper pos="relative" w=&#123;width&#125; h=&#123;height&#125; data-qid=&#123;dQid&#125;&gt;
									<br />
									<br />
									{"      "}&lt;Circle
									<br />
									<br />
									{"        "}style=&#123;&#123; width: "100%", height: "100%" &#125;&#125;
									<br />
									<br />
									{"        "}percent=&#123;percent&#125;
									<br />
									<br />
									{"        "}&#123;...props&#125;
									<br />
									<br />
									{"      "}/&gt;
									<br />
									<br />
									{"      "}&lt;Indicator
									<br />
									<br />
									{"        "}d="flex"
									<br />
									<br />
									{"        "}h="100%"
									<br />
									<br />
									{"        "}w="100%"
									<br />
									<br />
									{"        "}pos="absolute"
									<br />
									<br />
									{"        "}t="0"
									<br />
									<br />
									{"        "}jc="center"
									<br />
									<br />
									{"        "}ai="center"
									<br />
									<br />
									{"        "}ta="center"
									<br />
									<br />
									{"        "}font=&#123;font&#125;
									<br />
									<br />
									{"      "}&gt;
									<br />
									<br />
									{"        "}&lt;div&gt;&#123;percent&#125;%&lt;/div&gt;
									<br />
									<br />
									{"      "}&lt;/Indicator&gt;
									<br />
									<br />
									{"    "}&lt;/Wrapper&gt;
									<br />
									<br />
									{"  "});
									<br />
									<br />
									&#125;;
									<br />
									<br />
									<br />
									const ComponentWithYourCustomLogic = (&#123;
									<br />
									<br />
									{"  "}type,
									<br />
									<br />
									{"  "}strokeColor,
									<br />
									<br />
									{"  "}trailColor,
									<br />
									<br />
									{"  "}...props
									<br />
									<br />
									&#125;) =&gt; &#123;
									<br />
									<br />
									{"  "}const Progress = type === "circle" ? CircleProgress : Line;
									<br />
									<br />
									<br />
									{"  "}return (
									<br />
									<br />
									{"    "}&lt;Progress
									<br />
									<br />
									{"      "}strokeColor=&#123;CSSVarFix(strokeColor)&#125;
									<br />
									<br />
									{"      "}trailColor=&#123;CSSVarFix(trailColor)&#125;
									<br />
									<br />
									{"      "}&#123;...props&#125;
									<br />
									<br />
									{"    "}/&gt;
									<br />
									<br />
									{"  "});
									<br />
									<br />
									&#125;;
									<br />
									<br />
									<br />
									export default atomize(ComponentWithYourCustomLogic)(
									<br />
									<br />
									{"  "}&#123;
									<br />
									<br />
									{"    "}title: "Progress",
									<br />
									<br />
									{"    "}description: &#123;
									<br />
									<br />
									{"      "}en: "Display the current progress"
									<br />
									<br />
									{"    "}&#125;,
									<br />
									<br />
									{"    "}propInfo: &#123;
									<br />
									<br />
									{"      "}// Stroke
									<br />
									<br />
									{"      "}strokeColor: &#123;
									<br />
									<br />
									{"        "}title: "Color",
									<br />
									<br />
									{"        "}control: "color",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "Stroke color"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}category: "Stroke"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}strokeWidth: &#123;
									<br />
									<br />
									{"        "}title: "Width",
									<br />
									<br />
									{"        "}type: "number",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "Width of stroke"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}category: "Stroke"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}strokeLinecap: &#123;
									<br />
									<br />
									{"        "}title: "Linecap",
									<br />
									<br />
									{"        "}control: "select",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "The shape to be used at the end of the progress bar"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}variants: ["round", "butt", "square"],
									<br />
									<br />
									{"        "}category: "Stroke"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}// Trail
									<br />
									<br />
									{"      "}trailWidth: &#123;
									<br />
									<br />
									{"        "}title: "Width",
									<br />
									<br />
									{"        "}type: "number",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "Width of the trail stroke"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}category: "Trail"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}trailColor: &#123;
									<br />
									<br />
									{"        "}title: "Color",
									<br />
									<br />
									{"        "}control: "color",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "Color for lighter trail stroke"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}category: "Trail"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}// Gap
									<br />
									<br />
									{"      "}gapDegree: &#123;
									<br />
									<br />
									{"        "}title: "Degree",
									<br />
									<br />
									{"        "}type: "number",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "The gap degree of half circle"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}category: "Gap"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}gapPosition: &#123;
									<br />
									<br />
									{"        "}title: "Position",
									<br />
									<br />
									{"        "}control: "select",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "The gap position"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}variants: ["top", "bottom", "left", "right"],
									<br />
									<br />
									{"        "}category: "Gap"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}// Other
									<br />
									<br />
									{"      "}percent: &#123;
									<br />
									<br />
									{"        "}title: "Percent",
									<br />
									<br />
									{"        "}type: "number",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "The percent of the progress"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}category: "Progress"
									<br />
									<br />
									{"      "}&#125;,
									<br />
									<br />
									{"      "}type: &#123;
									<br />
									<br />
									{"        "}control: "select",
									<br />
									<br />
									{"        "}title: "Type",
									<br />
									<br />
									{"        "}description: &#123;
									<br />
									<br />
									{"          "}en: "Type of progress"
									<br />
									<br />
									{"        "}&#125;,
									<br />
									<br />
									{"        "}variants: ["circle", "line"],
									<br />
									<br />
									{"        "}category: "Progress"
									<br />
									<br />
									{"      "}&#125;
									<br />
									<br />
									{"    "}&#125;
									<br />
									<br />
									{"  "}&#125;,
									<br />
									<br />
									{"  "}&#123;
									<br />
									<br />
									{"    "}strokeWidth: 3,
									<br />
									<br />
									{"    "}strokeColor: "--primary",
									<br />
									<br />
									{"    "}trailWidth: 3,
									<br />
									<br />
									{"    "}trailColor: "--lightD2",
									<br />
									<br />
									{"    "}strokeLinecap: "round",
									<br />
									<br />
									{"    "}gapDegree: 0,
									<br />
									<br />
									{"    "}gapPosition: "top",
									<br />
									<br />
									{"    "}percent: 25,
									<br />
									<br />
									{"    "}//
									<br />
									<br />
									{"    "}width: "25%",
									<br />
									<br />
									{"    "}type: "line",
									<br />
									<br />
									{"    "}//
									<br />
									<br />
									{"    "}font: "3em --fontFamily-sans"
									<br />
									<br />
									{"  "}&#125;
									<br />
									<br />
									);
									<br />
									{"\n\n"}
									<br />
									{"\n\n"}
								</Override>
							</Components.Codes>
						</StackItem>
						{"    "}
					</Stack>
					<Components.Tableprops2>
						<Override slot="text5">
							Precent
						</Override>
						<Override slot="text8" />
						<Override slot="text6">
							Степень заполненности индикатора{"\n\n"}
						</Override>
						<Override slot="text9">
							Type
						</Override>
						<Override slot="text10">
							Вариации отображения индикатора{"\n\n"}
						</Override>
						<Override slot="text11">
							checkbox
						</Override>
						<Override slot="text13">
							LineCap
						</Override>
						<Override slot="text14">
							Закругления полосы состояния{"\n\n"}
						</Override>
						<Override slot="text15">
							checkbox{"\n\n"}
						</Override>
					</Components.Tableprops2>
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