import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: "#edcdb6",
		secondary: "#973a23",
	},
	colorText: {
		primary: "#000000",
		secondary: "#ffffff",
	},
	fontFamily: {
		title: "Kyiv",
		text: "Geneva",
	},
};

interface MyComponentProps {
	children: ReactNode;
}

const Theme = ({ children }: MyComponentProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
