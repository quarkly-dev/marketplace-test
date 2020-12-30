import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"margin": "60px 0px 0px 0px",
	"width": "100%",
	"gap": "16px",
	"padding": "0px 0px 0px 0px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"color": "#ffffff",
			"padding": "0px 0px 0px 5px",
			"children": "Props"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"display": "flex",
			"sm-width": "100%",
			"nout-width": "100%",
			"align-items": "flex-start",
			"justify-content": "flex-start",
			"flex-wrap": "wrap",
			"margin": "0px 0px 0px 0px"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-width": "0px",
			"border-color": "#22262E",
			"flex-direction": "column"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"lg-overflow-x": "scroll"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"border-color": "#22262E",
			"border-width": "1px 1px 0px 1px",
			"border-style": "solid",
			"lg-width": "1200px",
			"md-width": "1000px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "flex"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"display": "flex",
			"align-items": "flex-start",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(237, 237, 237, 0)",
			"border-width": "0px 0px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E",
			"md-border-width": "0px 0px 1px 0px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"color": "#ffffff",
			"font": "700 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "Name"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-width": "0px 0px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"color": "#ffffff",
			"font": "700 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "Description"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"width": "15%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-color": "#22262E",
			"border-style": "solid",
			"border-width": "0px 0px 1px 0px",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"color": "#ffffff",
			"font": "700 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "Type"
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-color": "#22262E",
			"border-style": "solid",
			"border-width": "0px 0px 1px 0px",
			"justify-content": "center"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"color": "#ffffff",
			"font": "700 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "Value"
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"display": "flex"
		}
	},
	"box8": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(237, 237, 237, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"color": "#ffffff",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "Image URLs"
		}
	},
	"box9": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E",
			"align-items": "center"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": 0,
			"border-color": "rgba(218, 218, 218, 1)",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"children": "URL-адрес изображений"
		}
	},
	"box10": {
		"kind": "Box",
		"props": {
			"width": "15%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-color": "#22262E",
			"border-style": "solid",
			"border-width": "0px 1px 1px 0px",
			"justify-content": "center"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"padding": "0px 0px 0px 0px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": "0px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "input"
		}
	},
	"box11": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-color": "#22262E",
			"border-style": "solid",
			"border-width": "0px 0px 1px 0px"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": "0px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"children": <>
				Принимает адреса изображений с расширением PNG\JPG\BMP и пр.{"\n\n"}
			</>
		}
	},
	"box12": {
		"kind": "Box",
		"props": {
			"display": "flex"
		}
	},
	"box13": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(237, 237, 237, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"width": "100%",
			"color": "#ffffff",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"children": <>
				Animation duration{"\n\n"}
			</>
		}
	},
	"box14": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E"
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": 0,
			"border-color": "rgba(218, 218, 218, 1)",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"children": <>
				Скорость перелистывания изображений{"\n\n"}
			</>
		}
	},
	"box15": {
		"kind": "Box",
		"props": {
			"width": "15%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E",
			"justify-content": "center",
			"align-items": "center"
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"padding": "0px 0px 0px 0px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": 0,
			"border-color": "rgba(218, 218, 218, 1)",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "input"
		}
	},
	"box16": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-color": "#22262E",
			"border-style": "solid",
			"border-width": "0px 0px 1px 0px"
		}
	},
	"text12": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": "0px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)"
		}
	},
	"box17": {
		"kind": "Box",
		"props": {
			"display": "flex"
		}
	},
	"box18": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(237, 237, 237, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E"
		}
	},
	"text13": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"width": "100%",
			"color": "#ffffff",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"children": "Height of the slider"
		}
	},
	"box19": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E"
		}
	},
	"text14": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": 0,
			"border-color": "rgba(218, 218, 218, 1)",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"children": "Высота слайдера"
		}
	},
	"box20": {
		"kind": "Box",
		"props": {
			"width": "15%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-width": "0px 1px 1px 0px",
			"border-style": "solid",
			"border-color": "#22262E",
			"justify-content": "center",
			"align-items": "center"
		}
	},
	"text15": {
		"kind": "Text",
		"props": {
			"padding": "0px 0px 0px 0px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": 0,
			"border-color": "rgba(218, 218, 218, 1)",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"md-text-align": "center",
			"children": "input"
		}
	},
	"box21": {
		"kind": "Box",
		"props": {
			"width": "30%",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"border-color": "#22262E",
			"border-style": "solid",
			"border-width": "0px 0px 1px 0px"
		}
	},
	"text16": {
		"kind": "Text",
		"props": {
			"padding": "36px 24px 36px 36px",
			"margin": "0px 0px 0px 0px",
			"font": "400 20px/25px --fontFamily-googleSourceSansPro",
			"color": "#ffffff",
			"md-border-width": "0px 0px 1px 0px",
			"border-width": "0px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)"
		}
	}
};

const Tableprops2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{"        "}
		<Text {...override("text")} />
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Box {...override("box")}>
				<Box {...override("box1")}>
					<Box {...override("box2")}>
						<Box {...override("box3")}>
							<Text {...override("text1")} />
						</Box>
						<Box {...override("box4")}>
							<Text {...override("text2")} />
						</Box>
						<Box {...override("box5")}>
							<Text {...override("text3")} />
						</Box>
						<Box {...override("box6")}>
							<Text {...override("text4")} />
						</Box>
					</Box>
					<Box {...override("box7")}>
						<Box {...override("box8")}>
							<Text {...override("text5")} />
						</Box>
						<Box {...override("box9")}>
							<Text {...override("text6")} />
						</Box>
						<Box {...override("box10")}>
							<Text {...override("text7")} />
						</Box>
						<Box {...override("box11")}>
							<Text {...override("text8")} />
						</Box>
					</Box>
					<Box {...override("box12")}>
						<Box {...override("box13")}>
							<Text {...override("text9")} />
						</Box>
						<Box {...override("box14")}>
							<Text {...override("text10")} />
						</Box>
						<Box {...override("box15")}>
							<Text {...override("text11")} />
						</Box>
						<Box {...override("box16")}>
							<Text {...override("text12")} />
						</Box>
					</Box>
					<Box {...override("box17")}>
						<Box {...override("box18")}>
							<Text {...override("text13")} />
						</Box>
						<Box {...override("box19")}>
							<Text {...override("text14")} />
						</Box>
						<Box {...override("box20")}>
							<Text {...override("text15")} />
						</Box>
						<Box {...override("box21")}>
							<Text {...override("text16")} />
						</Box>
					</Box>
				</Box>
			</Box>
			{"            "}
		</StackItem>
		{children}
	</Stack>;
};

Object.assign(Tableprops2, { ...Stack,
	defaultProps,
	overrides
});
export default Tableprops2;