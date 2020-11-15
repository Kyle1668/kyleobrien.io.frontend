// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		font: string;
		colors: {
			darkGray: string;
			lightGray: string;
			white: string;
		};
	}
}
