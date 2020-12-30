import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Image, Link, Icon } from "@quarkly/widgets";
import { MdMenu } from "react-icons/md";
const defaultProps = {
	"background": "--color-darkL2",
	"border-width": "0px 0px 2px 0px",
	"border-style": "solid",
	"border-color": "#0E1317",
	"filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "40%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/landing/logo-on-dark.svg",
			"width": "154px",
			"height": "auto"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "75%",
			"display": "flex",
			"lg-width": "60%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/features/",
			"text-decoration-line": "initial",
			"color": "--white",
			"font": "--menu",
			"text-transform": "uppercase",
			"margin": "0px 9px 0px 9px",
			"padding": "6px 9px 6px 9px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"letter-spacing": "0.07em",
			"lg-display": "none",
			"children": "FEATURES"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "#",
			"text-decoration-line": "initial",
			"color": "--biruza",
			"font": "700 14px/17px --fontFamily-googleSourceSansPro",
			"text-transform": "uppercase",
			"margin": "0px 9px 0px 9px",
			"padding": "6px 9px 6px 9px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"letter-spacing": "0.07em",
			"lg-display": "none",
			"children": "Marketplace"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/docs",
			"text-decoration-line": "initial",
			"color": "--white",
			"font": "--menu",
			"text-transform": "uppercase",
			"margin": "0px 9px 0px 9px",
			"padding": "6px 9px 6px 9px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"letter-spacing": "0.07em",
			"lg-display": "none",
			"children": "DOCS"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "/roadmap",
			"text-decoration-line": "initial",
			"color": "--white",
			"font": "--menu",
			"text-transform": "uppercase",
			"margin": "0px 9px 0px 9px",
			"padding": "6px 9px 6px 9px",
			"text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			"letter-spacing": "0.07em",
			"lg-display": "none",
			"children": "ROADMAP"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "/dashboard",
			"text-decoration-line": "initial",
			"color": "--white",
			"font": "--buttom",
			"text-transform": "uppercase",
			"margin": "0px 10px 0px 22px",
			"padding": "6px 21px 6px 21px",
			"letter-spacing": "0.07em",
			"border-width": "2px",
			"border-color": "#66FFE4",
			"border-radius": "50px",
			"border-style": "solid",
			"sm-display": "none",
			"children": "LOG IN"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "/dashboard",
			"text-decoration-line": "initial",
			"color": "--dark",
			"font": "--buttom",
			"text-transform": "uppercase",
			"margin": "0px 0px 0px 10px",
			"padding": "6px 21px 6px 21px",
			"letter-spacing": "0.07em",
			"border-width": "2px",
			"border-style": "solid",
			"border-color": "--color-biruza",
			"border-radius": "50px",
			"background": "--color-biruza",
			"lg-margin": "0px 10px 0px 10px",
			"children": "SIGN UP"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdMenu,
			"size": "32px",
			"color": "--white",
			"display": "none",
			"lg-display": "block",
			"lg-padding": "4px 4px 4px 4px",
			"lg-border-width": "2px",
			"lg-border-style": "solid",
			"lg-border-color": "--color-biruza",
			"lg-border-radius": "50px"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Image {...override("image")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Link {...override("link")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
				<Link {...override("link4")} />
				<Link {...override("link5")} />
				<Icon {...override("icon")} />
				{"    "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;