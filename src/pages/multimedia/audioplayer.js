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
							href="/multimedia"
							color="--biruza"
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							text-decoration-line="initial"
							margin="0px 3px 0px 3px"
						>
							Multimedia
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
							Audio Player{"\n\n"}
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
						Audio Player
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
						При помощи этого компонента, вы можете разместить на вашем проекте музыкальный плеер и добавить любую музыку или звуки.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/audioplayer.svg?v=2020-11-02T18:01:09.754Z" object-position="100% 100%" />
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
2.68

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
							Author: Maksim Slipenko
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
							<Components.AudioPlayer margin="0px 0px 0px 0px" />
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
									import React from "react";
import atomize from "@quarkly/atomize";
// some component

const Player = atomize.audio();

const AudioPlayer = (&#123; autoplay, loop, muted, volume, children, ...props &#125;) =&gt; (
  
);

export default atomize(AudioPlayer)(
  &#123;
    description: &#123;
      en: "Play audio from url"
    &#125;,
    propInfo: &#123;
      src: &#123;
        title: "Source",
        control: "input",
        description: &#123;
          en: "Audio source"
        &#125;
      &#125;,
      muted: &#123;
        title: "Muted",
        control: "checkbox",
        description: &#123;
          en: "Mute for startup"
        &#125;
      &#125;,
      loop: &#123;
        title: "Loop",
        control: "checkbox",
        description: &#123;
          en: "Enable loop audio"
        &#125;
      &#125;,
      autoplay: &#123;
        title: "Autoplay",
        control: "checkbox",
        description: &#123;
          en: "Enable autoplay"
        &#125;
      &#125;
    &#125;
  &#125;, // configuration
  &#123;
    // default props
    muted: false,
    autoplay: false,
    loop: false,
    bdrs: "100px",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Wolfgang_Amadeus_Mozart_-_Symphony_40_g-moll_-_1._Molto_allegro.ogg"
  &#125;
);
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
												Source
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
												Адрес файла, который будет проигрываться{"\n\n"}
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
												src/input
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
												Принимает URL-адрес аудиофайла с расширением MP3, ACE или AAC
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
												Autoplay
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
												Включить воспроизведение при загрузке страницы{"    "}
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
												checkbox{"\n\n"}
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
												Muted
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
												Выключить звук при проигрывании{"\n\n"}
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
												checkbox{"\n\n"}
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
												Loop
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
												Воспроизводить файл заново после завершения
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
												checkbox{"\n\n"}
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
					<Components.Faq />
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