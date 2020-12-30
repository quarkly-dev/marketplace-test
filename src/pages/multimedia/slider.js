import React from "react";
import theme from "theme";
import { Theme, Link, Image, Icon, Text, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
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
							Slider
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
						Slider
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
						Слайдер необходим для демонстрации ваших изображений, при помощи которых вы можете донести до ваших посетителей информацию визуально.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="center" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider12312.svg?v=2020-10-29T22:59:52.068Z" object-position="100% 100%" />
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
							Size:6.73 kb
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
							Author: Rafael C.
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
								align-items="flex-start"
							/>
							<Components.Slider width="100%" />
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
									import React, &#123; useState, useEffect &#125; from 'react';

import atomize from '@quarkly/atomize';
import &#123; useOverrides &#125; from '@quarkly/components';
import &#123; Box, Icon &#125; from '@quarkly/widgets';

const overrides = &#123;
    'Arrow prev icon': &#123;
    'kind': 'Icon',
    'props': &#123;
      'size': '52px',
      'category': 'md',
            'icon': 'MdKeyboardArrowLeft',
    &#125;
  &#125;,
    'Arrow next icon': &#123;
    'kind': 'Icon',
    'props': &#123;
      'size': '52px',
      'category': 'md',
            'icon': 'MdKeyboardArrowRight',
    &#125;
  &#125;,
&#125;;

const Image = atomize.img();

// Get slide position
const getSide = (numb, opts) =&gt; &#123;
    let side = 0;
    
    if (numb &gt; opts.active) &#123;
        side = 1;
    &#125;
    if (numb &lt; opts.active) &#123;
        side = -1;
    &#125;
    
    if (numb === 1 && opts.active === opts.length) &#123;
        side = 1;
    &#125;
    if (opts.active === 1 && numb === opts.length) &#123;
        side = -1;
    &#125;
    if (opts.length === 1) &#123;
        side = 0;
    &#125;
    
    return side;
&#125;

const Slide = (&#123;src, numb, height, duration, opts&#125;) =&gt; &#123;
    const isTarget = numb === opts.target;
    const isActive = numb === opts.active;
    const side = getSide(numb, opts) * 100;
    
    let position = side;
    
    if (isTarget && !isActive) &#123;
        position = '0';
    &#125;
    if (isActive && !isTarget) &#123;
        position = -1 * getSide(opts.target, opts) * 100;
    &#125;
    
    return (
        
            
        
    );
&#125;

const Arrow = (&#123;type, color, alpha, click, override&#125;) =&gt; &#123;
    return (
        
            
        
    )
&#125;

const Point = (&#123;numb, color, alpha, opts, click, override&#125;) =&gt; &#123;
    const isTarget = numb === opts.target;
    
    return (
        
            
        
    )
&#125;

const Slider = (&#123;
    slides,
    height,
    duration,
    colorArrows,
    alphaArrows,
    colorPoints,
    alphaPoints,
    ...props
&#125;) =&gt; &#123;
  const &#123; override, rest &#125; = useOverrides(props, overrides);
    
    const [srcs] = useState(slides.length &gt; 0 ? slides.split(',').reverse() : []);
    
    const [active, setActive] = useState(1);
    const [target, setTarget] = useState(1);
    const [length, setLength] = useState(srcs.length);
    const [isSwitch, setSwitch] = useState(false);
    
    // Switch active slide
    useEffect(() =&gt; &#123;
        if (!isSwitch) return;
        
        setTimeout(() =&gt; &#123;
            setActive(target);
            setSwitch(false);
        &#125;, duration);
    &#125;);
    
    // Click on 'prev' arrow
    const slidePrev = () =&gt; &#123;
        if (isSwitch) return;
        
        setTarget(target &lt;= 1 ? length : active - 1);
        setSwitch(true);
    &#125;;

    // Click on 'next' arrow
    const slideNext = () =&gt; &#123;
        if (isSwitch) return;
        
        setTarget(target &gt;= length ? 1 : active + 1);
        setSwitch(true);
    &#125;;
    
    // Click on point
    const clickNumb = numb =&gt; &#123;
        if (isSwitch) return;
        
        setTarget(numb);
        setSwitch(true);
    &#125;
    
    let touchStartX, touchStartY;
    
    // Start swipe on mobile
    const touchStart = e =&gt; &#123;
        touchStartX = e.targetTouches[0].clientX;
        touchStartY = e.targetTouches[0].clientY;
    &#125;
    
    // Stop swipe and fire event
    const touchEnd = e =&gt; &#123;
        if (!touchStartX || !touchStartY) return;
        
        const
            touchEndX = e.changedTouches[0].clientX,
            touchEndY = e.changedTouches[0].clientY,
            
            diffX = Math.abs(touchEndX - touchStartX),
            diffY = Math.abs(touchEndY - touchStartY),
            
            diffP = diffX / e.target.offsetWidth;
        
        if (diffX &lt; diffY || diffP &lt; .1) return;
        
        if (touchStartX &gt; touchEndX) &#123;
          slideNext();
        &#125; else &#123;
            slidePrev();
        &#125;
    &#125;
    
    return (
        
            
                &#123; srcs.map((src, i) =&gt; (
                    
                ))&#125;
            
             touchStart(e)&#125;
                onTouchEnd=&#123;e =&gt; touchEnd(e)&#125;
            &gt;
                 slidePrev()&#125;
                    color=&#123;colorArrows&#125;
                    alpha=&#123;alphaArrows&#125;
                    override=&#123;override&#125;
                /&gt;
                 slideNext()&#125;
                    color=&#123;colorArrows&#125;
                    alpha=&#123;alphaArrows&#125;
                    override=&#123;override&#125;
                /&gt;
            
            
                &#123; srcs.map((src, i) =&gt; (
                     clickNumb(i+1)&#125;
                        color=&#123;colorPoints&#125;
                        alpha=&#123;alphaPoints&#125;
                        opts=&#123;&#123; target &#125;&#125;
                        override=&#123;override&#125;
                    /&gt;
                ))&#125;
            
        
    );
&#125;;

const propInfo = &#123;
    slides: &#123;
        title: 'Image URLs',
    multiply: true,
        control: 'image',
        type: 'string',
        category: 'Slides',
        weight: 1,
    &#125;,
    height: &#123;
        title: 'Height of the slider',
        control: 'text',
        type: 'string',
        category: 'Slider',
        weight: 1,
    &#125;,
    duration: &#123;
        title: 'Animation duration',
        control: 'text',
        type: 'string',
        category: 'Slider',
        weight: 1,
    &#125;,
    colorArrows: &#123;
        title: 'Arrows color',
        control: 'color',
        type: 'string',
        category: 'Color',
        weight: .67,
    &#125;,
    alphaArrows: &#123;
        title: 'Opacity',
        control: 'text',
        type: 'string',
        category: 'Color',
        weight: .33,
    &#125;,
    colorPoints: &#123;
        title: 'Points color',
        control: 'color',
        type: 'string',
        category: 'Color',
        weight: .67,
    &#125;,
    alphaPoints: &#123;
        title: 'Opacity',
        control: 'text',
        type: 'string',
        category: 'Color',
        weight: .33,
    &#125;,
&#125;;

const defaultProps = &#123;
    slides: \`
https://images.pexels.com/photos/757183/pexels-photo-757183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
https://images.pexels.com/photos/1045922/pexels-photo-1045922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
https://images.pexels.com/photos/1586154/pexels-photo-1586154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
    \`,
    height: '62.5%',
    duration: 1000,
    colorArrows: '#EEEEEE',
    colorPoints: '#EEEEEE',
    alphaArrows: '.75',
    alphaPoints: '.5',
&#125;

export default Object.assign(Slider, &#123;
    title: 'Slider',
    description: &#123;
        en: 'Awesome swipe slider!',
    &#125;,
    overrides,
  propInfo,
  defaultProps,
&#125;);
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
												Image URLs
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
												URL-адрес изображений
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
												Адрес изображения с расширением PNG\JPG\BMP и др.
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
												Animation duration
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
												Скорость смены изображений
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
												Длительность анимации в миллисекундах
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
												Height of the slider
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
												Высота слайдера
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
												Высота слайдера, можно указывать в процентах
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
												Arrows & Points color
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
												Цвет стрелок и точек навигации
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
												color
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
												Строка с цветом в формате HEX, RGB или HSL. Можно выбрать во встроенном ColorPicker
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
												Arrows & Points opacity
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
												Прозрачность стрелок и точек навигации
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
												Значение непрозрачности в диапазоне от 0 до 1
											</Text>
										</Box>
									</Box>
								</Box>
							</Box>
							{"            "}
						</StackItem>
					</Stack>
					<Stack gap="0px" padding="0px 8px 0px 8px" margin="60px 0px 0px 0px">
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
						<StackItem width="50%" display="flex" lg-width="100%" lg-order="1">
							<Override
								slot="StackItemContent"
								background="--color-darkL2"
								border-radius="0px"
								flex-direction="column"
								align-items="flex-start"
								padding="30px 10px 30px 30px"
								pk-justify-content="center"
								justify-content="center"
								pk-padding="20px 10px 20px 30px"
								sm-padding="30px 10px 30px 30px"
							/>
							<Text
								font="--headline3"
								color="--white"
								md-font="normal 600 30px/45px Source Sans Pro, sans-serif"
								sm-font="normal 600 25px/30px Source Sans Pro, sans-serif"
								margin="0px 0px 0px 0px"
								pk-font="normal 600 30px/34px Source Sans Pro, sans-serif"
								sm-margin="0px 0px 12px 0px"
							>
								Instructions for adding code
							</Text>
							<Text
								margin="12px 0px 30px 0px"
								font="400 24px/30px --fontFamily-googleSourceSansPro"
								color="rgba(126, 150, 181, 1)"
								md-font="400 20px/27px --fontFamily-googleSourceSansPro"
								md-margin="12px 70px 30px 0px"
								sm-font="400 14px/22px --fontFamily-googleSourceSansPro"
								pk-font="400 16px/24px --fontFamily-googleSourceSansPro"
								pk-margin="12px 0px 15px 0px"
								sm-margin="0px 0px 30px 0px"
							>
								To install a component you need in the "Components" tab,
								<br />
								in the "Project" section add your component and install the code required component in the opened window
							</Text>
							<Link
								href="#"
								margin="0px 0px 0px 0px"
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
								sm-margin="0px 0px 0px 0px"
								pk-font="700 17px/23px --fontFamily-googleSourceSansPro"
								pk-padding="12px 23px 12px 23px"
								sm-padding="10px 16px 10px 16px"
								sm-font="700 15px/23px --fontFamily-googleSourceSansPro"
							>
								See Instructions
							</Link>
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="100%">
							<Override
								slot="StackItemContent"
								background="--color-darkL2"
								border-radius="0px"
								flex-direction="column"
								align-items="flex-start"
							/>
							<Components.YouTubeVideo src="https://youtu.be/zR0CZ3PXmPo" width="100%" border-radius="8px" />
						</StackItem>
						{"    "}
					</Stack>
					<Stack margin="60px 0px 0px 0px" gap="16px" sm-padding="0px 0px 0px 0px">
						{"    "}
						<Text
							font="--headline3"
							display="inline-block"
							width="100%"
							color="--white"
							padding="0px 0px 0px 0px"
							sm-font="normal 600 30px/38px Source Sans Pro, sans-serif"
							margin="0 0 20px 6px"
							sm-margin="0 0 20px 1.7%"
							sm-width="48.3%"
						>
							Popular
						</Text>
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
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
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" />
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
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
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" />
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/slider"
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
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" />
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/slider"
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
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" />
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/slider"
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
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" />
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
						<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
							<Link
								href="/multimedia/slider"
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
								<Image src="https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z" />
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
						{"    "}
					</Stack>
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