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
							VK Сomments
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
						VK Сomments
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
						При помощи этого компонента вы можете за 5 минут добавить на ваш сайт возможность комментирования статей и других материалов. Пользователи смогут комментировать Ваши материалы без дополнительной регистрации.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/vk.svg?v=2020-11-03T00:13:48.687Z" object-position="100% 100%" width="90%" />
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
								padding="50px 15% 50px 15%"
								justify-content="center"
							/>
							<Components.VkComment apiId="7621566" width="100%" />
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
									import React, &#123; useState, useEffect, useMemo, useRef &#125; from 'react';
import atomize from '@quarkly/atomize';
import VK, &#123; Comments &#125; from 'react-vk';
import &#123; Box &#125; from '@quarkly/widgets';
import useDeepCompareEffect from 'use-deep-compare-effect';

const useDebounce = (value, timeout, deep) =&gt; &#123;
  const [state, setState] = useState(value);
  const comp = deep ? useDeepCompareEffect : useEffect;
  comp(() =&gt; &#123;
    const handler = setTimeout(() =&gt; setState(value), timeout);
    return () =&gt; clearTimeout(handler);
  &#125;, [value, timeout]);
  return state;
&#125;;


const attachToString = (x) =&gt; &#123;
  const keys = Object.keys(x)
  return keys.every(k =&gt; x[k]) ? '*' : keys.filter(k =&gt; x[k]).map(k =&gt; k.substring(6).toLowerCase()).join()
&#125;

const VKComments = (&#123; 
  apiId, pageId, elementId,
  width, height,
  limit, norealtime, autoPublish, pageUrl,
  attachGraffiti, attachPhoto, attachAudio, 
  attachLink, attachVideo,
...props &#125;) =&gt; &#123;
  const wrapperRef = useRef();

  const dApiId = useDebounce(apiId, 1000)
  const dPageId = useDebounce(pageId, 1000)
  const dElementId = useDebounce(elementId, 1000);
  const attach = useMemo(() =&gt; &#123;
    return attachToString(&#123;
      attachGraffiti, attachPhoto, attachAudio, 
      attachLink, attachVideo
    &#125;)
  &#125;, [
    attachGraffiti, attachPhoto, attachAudio, 
    attachLink, attachVideo
  ])
  
  const dOptions = useDebounce(&#123;
    width,
    height,
    limit,
    attach,
    autoPublish: +autoPublish,
    norealtime: +norealtime,
    pageUrl
  &#125;, 1000, true);
  
  useEffect(() =&gt; &#123;
    if (width.match(/[0-9]&#123;1,3&#125;\%$/s) && wrapperRef.current) &#123;
      dOptions.width = `$&#123;wrapperRef.current.clientWidth * (parseInt(width.slice(0, -1)) / 100)&#125;px`;
    &#125;
  &#125;, []);
  
  const key = useMemo(() =&gt;
    dApiId + JSON.stringify(dOptions) + dPageId + dElementId
  , [
    dApiId,
    dOptions,
    dPageId,
    dElementId
  ])
  
  return (
    
      &#123;
        dApiId ? 
          
            
           
          : 
        'Добавьте ваш VK App ID на панели props'
      &#125;
    
  );
&#125;;

const propInfo = &#123;
  apiId: &#123;
    title: 'VK App ID',
    control: 'input',
    category: 'System',
    description: &#123;
      en: 'ID of VK App. You can create your app on this url: vk.com/apps',
    &#125;,
  &#125;,
  pageId: &#123;
    title: 'Page ID',
    control: 'input',
    category: 'System',
    description: &#123;
      en: 'ID of the page on your site. A random string of up to 128 characters or a number. Used if one article has several URLs'
    &#125;
  &#125;,
  limit: &#123;
    title: 'Limit',
    control: 'input',
    category: 'Widget',
    description: &#123;
      en: 'Max number of comments on the page'
    &#125;
  &#125;,
  autoPublish: &#123;
    title: 'Auto Publish',
    control: 'checkbox',
    category: 'Widget',
    description: &#123;
      en: 'Automatically publish the comment to the user\'s VK page'
    &#125;
  &#125;,
  norealtime: &#123;
    title: 'No realtime',
    control: 'checkbox',
    category: 'Widget',
    description: &#123;
      en: 'Disables realtime updates for the comments.'
    &#125;
  &#125;,
  pageUrl: &#123;
    title: 'Page URL',
    control: 'input',
    category: 'Widget',
    description: &#123;
      en: 'URL of the page, containing the widget. Comments that are automatically posted to the user\'s VK page link to this URL, if autoPublish is enabled.'
    &#125;
  &#125;,
  attachGraffiti: &#123;
    title: 'Graffiti',
    control: 'checkbox',
    category: 'Attach',
    description: &#123;
      en: 'User can add graffiti to comment'
    &#125;
  &#125;, 
  attachPhoto: &#123;
    title: 'Photo',
    control: 'checkbox',
    category: 'Attach',
    description: &#123;
      en: 'User can add photo to comment'
    &#125;
  &#125;, 
  attachAudio: &#123;
    title: 'Audio',
    control: 'checkbox',
    category: 'Attach',
    description: &#123;
      en: 'User can add audio to comment'
    &#125;
  &#125;, 
  attachVideo: &#123;
    title: 'Video',
    control: 'checkbox',
    category: 'Attach',
    description: &#123;
      en: 'User can add video to comment'
    &#125;
  &#125;, 
  attachLink: &#123;
    title: 'Link',
    control: 'checkbox',
    category: 'Attach',
    description: &#123;
      en: 'User can add graffiti to comment'
    &#125;
  &#125;,
&#125;;

const defaultProps = &#123;
  pageId: '',
  elementId: 'vk_comments',
  
  limit: 5,
  autoPublish: false,
  norealtime: false,
  pageUrl: '',
  
  attachGraffiti: true,
  attachPhoto: true,
  attachAudio: true,
  attachVideo: true,
  attachLink: true,
  
  width: '100%',
&#125;

export default atomize(VKComments)(
  &#123;
    description: &#123;
      en: 'This enables VK users to comment on your materials without having to register on your site.',
    &#125;,
    propInfo
  &#125;,
  defaultProps
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