import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Image, Link } from "@quarkly/widgets";
const defaultProps = {
	"margin": "60px 0px 0px 0px",
	"gap": "16px",
	"sm-padding": "0px 0px 0px 0px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"display": "inline-block",
			"width": "100%",
			"color": "--white",
			"padding": "0px 0px 0px 0px",
			"sm-font": "normal 600 30px/38px Source Sans Pro, sans-serif",
			"margin": "0 0 20px 8px",
			"sm-margin": "0 0 20px 1.7%",
			"sm-width": "48.3%",
			"children": "Popular"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/multimedia/slider",
			"display": "flex",
			"flex-direction": "column",
			"padding": "30px 30px 30px 30px",
			"width": "100%",
			"background": "--color-darkL2",
			"text-decoration-line": "initial",
			"align-items": "flex-end",
			"margin": "0px 0px 0px 0px",
			"border-radius": "8px",
			"transition": "-webkit-transition: all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)"
		}
	},
	"linkOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"border-radius": "8px",
			"margin": "0px 9px 0px 0px",
			"flex-direction": "column",
			"align-items": "flex-end"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/slider.svg?v=2020-10-29T15:26:24.526Z",
			"width": "72px",
			"height": "66px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "35px 0px 0px 0px",
			"display": "inline-block",
			"color": "--white",
			"width": "100%",
			"children": "Slider"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/multimedia/youtube-player",
			"display": "flex",
			"flex-direction": "column",
			"padding": "30px 30px 30px 30px",
			"width": "100%",
			"background": "--color-darkL2",
			"text-decoration-line": "initial",
			"align-items": "flex-end",
			"margin": "0px 0px 0px 0px",
			"border-radius": "8px",
			"transition": "-webkit-transition: all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)"
		}
	},
	"linkOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"border-radius": "8px",
			"margin": "0px 9px 0px 0px",
			"flex-direction": "column",
			"align-items": "flex-end"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/youtube.svg?v=2020-11-06T11:34:28.889Z",
			"width": "72px",
			"height": "66px"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "35px 0px 0px 0px",
			"display": "inline-block",
			"color": "--white",
			"width": "100%",
			"children": "YouTube Player"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/content/input",
			"width": "100%",
			"display": "flex",
			"flex-direction": "column",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"text-decoration-line": "initial",
			"align-items": "flex-end",
			"margin": "0px 0px 0px 0px",
			"border-radius": "8px",
			"transition": "-webkit-transition: all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)"
		}
	},
	"linkOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"border-radius": "8px",
			"margin": "0px 9px 0px 0px",
			"flex-direction": "column",
			"align-items": "flex-end"
		}
	},
	"image2": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/input.svg?v=2020-11-02T19:10:35.740Z",
			"width": "72px",
			"height": "66px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "35px 0px 0px 0px",
			"display": "inline-block",
			"color": "--white",
			"width": "100%",
			"children": "Input"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "/content/table",
			"width": "100%",
			"display": "flex",
			"flex-direction": "column",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"text-decoration-line": "initial",
			"align-items": "flex-end",
			"margin": "0px 0px 0px 0px",
			"border-radius": "8px",
			"transition": "-webkit-transition: all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)"
		}
	},
	"linkOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"border-radius": "8px",
			"margin": "0px 9px 0px 0px",
			"flex-direction": "column",
			"align-items": "flex-end"
		}
	},
	"image3": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/table.svg?v=2020-11-02T18:52:57.134Z",
			"width": "72px",
			"height": "66px"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "35px 0px 0px 0px",
			"display": "inline-block",
			"color": "--white",
			"width": "100%",
			"children": <>
				Table{"\n\n"}
			</>
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "/integration/livechat",
			"width": "100%",
			"display": "flex",
			"flex-direction": "column",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"text-decoration-line": "initial",
			"align-items": "flex-end",
			"margin": "0px 0px 0px 0px",
			"border-radius": "8px",
			"transition": "-webkit-transition: all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)"
		}
	},
	"linkOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"border-radius": "8px",
			"margin": "0px 9px 0px 0px",
			"flex-direction": "column",
			"align-items": "flex-end"
		}
	},
	"image4": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/chat.svg?v=2020-11-02T22:03:07.450Z",
			"width": "72px",
			"height": "66px"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "35px 0px 0px 0px",
			"display": "inline-block",
			"color": "--white",
			"width": "100%",
			"children": "LiveChat"
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "/content/price",
			"width": "100%",
			"display": "flex",
			"flex-direction": "column",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"text-decoration-line": "initial",
			"align-items": "flex-end",
			"margin": "0px 0px 0px 0px",
			"border-radius": "8px",
			"transition": "-webkit-transition: all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)"
		}
	},
	"linkOverride5": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "30px 30px 30px 30px",
			"background": "--color-darkL2",
			"border-radius": "8px",
			"margin": "0px 9px 0px 0px",
			"flex-direction": "column",
			"align-items": "flex-end"
		}
	},
	"image5": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/price.svg?v=2020-11-03T00:15:32.256Z",
			"width": "72px",
			"height": "66px"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "35px 0px 0px 0px",
			"display": "inline-block",
			"color": "--white",
			"width": "100%",
			"children": <>
				Price{"\n\n"}
			</>
		}
	}
};

const Compnew = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{"    "}
		<Text {...override("text")} />
		<StackItem {...override("stackItem")}>
			<Link {...override("link")}>
				<Override {...override("linkOverride")} />
				{"        "}
				<Image {...override("image")} />
				<Text {...override("text1")} />
				{"    "}
			</Link>
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Link {...override("link1")}>
				<Override {...override("linkOverride1")} />
				{"        "}
				<Image {...override("image1")} />
				<Text {...override("text2")} />
				{"    "}
			</Link>
		</StackItem>
		<StackItem {...override("stackItem2")}>
			<Link {...override("link2")}>
				<Override {...override("linkOverride2")} />
				{"        "}
				<Image {...override("image2")} />
				<Text {...override("text3")} />
				{"    "}
			</Link>
		</StackItem>
		<StackItem {...override("stackItem3")}>
			<Link {...override("link3")}>
				<Override {...override("linkOverride3")} />
				{"        "}
				<Image {...override("image3")} />
				<Text {...override("text4")} />
				{"    "}
			</Link>
		</StackItem>
		<StackItem {...override("stackItem4")}>
			<Link {...override("link4")}>
				<Override {...override("linkOverride4")} />
				{"        "}
				<Image {...override("image4")} />
				<Text {...override("text5")} />
				{"    "}
			</Link>
		</StackItem>
		<StackItem {...override("stackItem5")}>
			<Link {...override("link5")}>
				<Override {...override("linkOverride5")} />
				{"        "}
				<Image {...override("image5")} />
				<Text {...override("text6")} />
				{"    "}
			</Link>
		</StackItem>
		{"    "}
		{children}
	</Stack>;
};

Object.assign(Compnew, { ...Stack,
	defaultProps,
	overrides
});
export default Compnew;