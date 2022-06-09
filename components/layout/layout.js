import { Global, css } from "@emotion/react";

import Header from "./header";

const Layout = ({ children }) => {
	return (
		<>
			<Global
				styles={css`
					:root {
						--gris: #3d3d3d;
						--gris2: #6f6f6f;
						--naranja: #da552f;
					}

					html {
						font-size: 62.5%;
						box-sizing: border-box;
					}

					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}

					body {
            font-family: 'PT Sans', sans-serif;
						font-size: 1.6rem;
						line-height: 1.5;
					}

					h1,
					h2,
					h3 {
						margin: 0 0 2rem 0;
						line-height: 1.5;
					}

          h1, h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }

          h3 {
            font-family: 'PT Sans', sans-serif;
          }

					ul {
						list-style: none;
						margin: 0;
						padding: 0;
					}

					a {
						text-decoration: none;
					}
				`}
			/>

			<Header />

			<main>{children}</main>
		</>
	);
};

export default Layout;
