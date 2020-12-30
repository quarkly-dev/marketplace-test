import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Link } from "@quarkly/widgets";
import YouTubeVideo from "./YouTubeVideo";
const defaultProps = {
	"gap": "0px",
	"padding": "0px 8px 0px 8px",
	"margin": "60px 0px 0px 0px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 30px 0px",
			"display": "inline-block",
			"width": "100%",
			"color": "--white",
			"sm-font": "normal 600 30px/38px Source Sans Pro, sans-serif",
			"children": "Instructions"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"lg-width": "100%",
			"lg-order": "1"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "--color-darkL2",
			"border-radius": "0px",
			"flex-direction": "column",
			"align-items": "flex-start",
			"padding": "30px 10px 30px 30px",
			"pk-justify-content": "center",
			"justify-content": "center",
			"pk-padding": "20px 10px 20px 30px",
			"sm-padding": "30px 10px 30px 30px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"color": "--white",
			"md-font": "normal 600 30px/45px Source Sans Pro, sans-serif",
			"sm-font": "normal 600 25px/30px Source Sans Pro, sans-serif",
			"margin": "0px 0px 0px 0px",
			"pk-font": "normal 600 30px/34px Source Sans Pro, sans-serif",
			"sm-margin": "0px 0px 12px 0px",
			"children": "Instructions for adding code"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "12px 0px 30px 0px",
			"font": "400 24px/30px --fontFamily-googleSourceSansPro",
			"color": "rgba(126, 150, 181, 1)",
			"md-font": "400 20px/27px --fontFamily-googleSourceSansPro",
			"md-margin": "12px 70px 30px 0px",
			"sm-font": "400 14px/22px --fontFamily-googleSourceSansPro",
			"pk-font": "400 16px/24px --fontFamily-googleSourceSansPro",
			"pk-margin": "12px 0px 15px 0px",
			"sm-margin": "0px 0px 30px 0px",
			"children": <>
				To install a component you need in the "Components" tab,
				<br />
				in the "Project" section add your component and install the code required component in the opened window
			</>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"margin": "0px 0px 0px 0px",
			"text-decoration-line": "initial",
			"font": "700 19px/23px --fontFamily-googleSourceSansPro",
			"color": "--white",
			"padding": "16px 33px 16px 33px",
			"background": "#0E1317",
			"border-style": "solid",
			"border-width": "6px",
			"border-color": "--color-primary",
			"border-radius": "60px",
			"text-transform": "uppercase",
			"letter-spacing": "0.07em",
			"sm-margin": "0px 0px 0px 0px",
			"pk-font": "700 17px/23px --fontFamily-googleSourceSansPro",
			"pk-padding": "12px 23px 12px 23px",
			"sm-padding": "10px 16px 10px 16px",
			"sm-font": "700 15px/23px --fontFamily-googleSourceSansPro",
			"children": "See Instructions"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "--color-darkL2",
			"border-radius": "0px",
			"flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"youTubeVideo": {
		"kind": "YouTubeVideo",
		"props": {
			"src": "https://youtu.be/zR0CZ3PXmPo",
			"width": "100%",
			"border-radius": "8px"
		}
	}
};

const Faq = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{"    "}
		<Text {...override("text")} />
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Text {...override("text1")} />
			<Text {...override("text2")} />
			<Link {...override("link")} />
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<YouTubeVideo {...override("youTubeVideo")} />
		</StackItem>
		{"    "}
		{children}
	</Stack>;
};

Object.assign(Faq, { ...Stack,
	defaultProps,
	overrides
});
export default Faq;