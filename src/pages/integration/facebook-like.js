import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Strong, Image, Hr } from "@quarkly/widgets";
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
							href="/integration/"
							color="--biruza"
							font="400 15px/19px --fontFamily-googleSourceSansPro"
							text-decoration-line="initial"
							margin="0px 3px 0px 3px"
						>
							Integration
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
							Facebook like{"  \n\n"}
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
						Facebook like{"\n\n"}
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
						Компонент «
						<Strong>
							Нравится
						</Strong>
						» позволяет Вашим посетителям одним кликом выразить своё отношение к статье или моментально поделиться ссылкой на статью с друзьями.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/facebook.svg?v=2020-11-03T00:13:55.283Z" object-position="100% 100%" width="90%" />
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


11.3





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
								padding="50px 15% 50px 15%"
								justify-content="center"
							/>
							<Components.FacebookLike />
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
									import React, &#123; useEffect, useState, useRef &#125; from 'react';
import atomize from "@quarkly/atomize";
import &#123; Box &#125; from '@quarkly/widgets'

const languageConverter = &#123;
  'English': 'en_US',
  'Русский': 'ru_RU'
&#125;

const useDebounce = (value, timeout = 1000) =&gt; &#123;
  const [state, setState] = useState(value);
  useEffect(() =&gt; &#123;
    const handler = setTimeout(() =&gt; setState(value), timeout);
    return () =&gt; clearTimeout(handler);
  &#125;, [value, timeout]);
  return state;
&#125;;

function usePrevious(value) &#123;
  const ref = useRef();
  useEffect(() =&gt; &#123;
    ref.current = value;
  &#125;, [value]); 
  return ref.current;
&#125;

const MyFB = &#123;
  create: (&#123; language, appId &#125;) =&gt; &#123;
    if (!canDOM()) return
    ((d, s, id) =&gt; &#123;
        const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = `//connect.facebook.net/$&#123;language&#125;/sdk.js#xfbml=1&version=v2.12&appId=$&#123;appId&#125;`;
        console.log(js)
        fjs.parentNode.insertBefore(js, fjs);
      &#125;)(document, 'script', 'facebook-jssdk');
  &#125;,
  remove: () =&gt; &#123;
    let elm = document.getElementById('facebook-jssdk')
    if (elm) &#123;
      elm.outerHTML = ''
    &#125;
    elm = document.getElementById('fb-root')
    if (elm) &#123;
      elm.outerHTML = ''
    &#125;
    window.FB = undefined
  &#125;,
  parse: () =&gt; &#123;
    if (window.FB && typeof window.FB !== 'undefined') &#123;
      window.FB.XFBML.parse() 
    &#125;
  &#125;
&#125;

const canDOM = () =&gt; document && typeof document !== 'undefined'

const LikeButton = (&#123; language, appId, ...props &#125;) =&gt; &#123;
  const &#123; 
  href, layout, 
  action, size, share, 
  reference, width, 
  colorScheme, kidDirectedSite 
  &#125; = props;
  
  const oldLang = usePrevious(language)
  const oldAppId = usePrevious(appId)
  
  const didMountRef = useRef(false)
  useEffect(() =&gt; &#123;
    if (didMountRef.current) &#123;
      if (oldLang != language || oldAppId != appId && canDOM()) &#123;
        MyFB.remove();
        MyFB.create(&#123; language, appId &#125;);
      &#125;
      MyFB.parse();
    &#125; else &#123;
      MyFB.create(&#123; language, appId &#125;);
      MyFB.parse();
      didMountRef.current = true
    &#125;
  &#125;)
  
  return ({"\n      "}
									<br />
									<br />
									{"\n    "});
}

const FacebookLike = ({ 
  appId,
  language,
  children,
  "data-qid": qid,
  ...props 
}) => {
  const dAppID = useDebounce(appId)
  
  return 
  {
    dAppID ?  : 'Add your Facebook App ID in the props panel.'
  }

}

const propInfo = {
  appId: {
    title: 'Facebook App ID',
    description: {
        en: 'ID of Facebook App. You can create your app on this url: developers.facebook.com/apps'
    },
    control: 'input',
    category: 'System',
    weight: 1,
  },
  language: {
    title: 'Language',
    description: {
      en: 'Language of the Like Button. Page update required!'
    },
    category: 'System',
    control: 'select',
    variants: ['English', 'Русский']
  },
  colorScheme: {
    title: 'Color scheme',
    description: {
        en: 'The color scheme used by the plugin for any text outside of the button itself.'
    },
    category: 'Button',
    control: 'select',
    variants: ['light', 'dark']
  },
  share: {
    title: 'Share',
    description: {
        en: 'Specifies whether to include a share button beside the Like button.'
    },
    category: 'Button',
    control: 'checkbox'
  },
  href: {
    title: 'URL',
    description: {
      en: 'The URL of the webpage that will be liked (current url default).'
    },
    category: 'Button',
    control: 'input'
  },
  layout: {
    title: 'Layout',
    description: {
      en: 'Selects one of the different layouts that are available for the plugin.'
    },
    category: 'Button',
    control: 'select',
    variants: ['standard', 'box_count', 'button_count', 'button']
  },
  size: {
    title: 'Size',
    description: {
      en: 'Button size'
    },
    category: 'Button',
    control: 'select',
    variants: ['small', 'large']
  },
  action: {
    title: 'Action',
    description: {
      en: 'The verb to display on the button.'
    },
    category: 'Button',
    control: 'select',
    variants: ['like', 'recommend']
  },
  kidDirectedSite: {
    title: 'Kid directed site',
    description: {
        en: 'If your website or online service, or a portion of your service, is directed to children under 13 you must select this.'
    },
    category: 'Button',
    control: 'checkbox'
  },
  referral: {
    title: 'Referal',
    description: {
        en: 'A label for tracking referrals which must be less than 50 characters and can contain alphanumeric characters and some punctuation (currently +/=-.:_). Check developers.facebook.com/docs/plugins/faqs#ref for more details.' 
    },
    category: 'Advanced',
    control: 'Input',
  }
}

const defaultProps = {
  action: 'like',
  layout: 'standard',
  size: 'small',
  colorScheme: 'light',
  showFaces: false,
  share: false,
  kidDirectedSite: false,
  language: 'English'
}

export default atomize(FacebookLike)({
  name: "FacebookLike",
  description: {
    // past here description for your component
    en:
      "This enables FB users to like your materials without having to register on your site.",
  },
  propInfo
}, defaultProps);{"\n\n"}
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
												VK app ID
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
												Разместить ID вашего приложения
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
												Attach
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
												Отключить возможно прикрепление медиафайлов
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
												checkbox
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