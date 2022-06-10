import Head from "next/head";

import Header from "./header";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Product Hunt Firebase y Next.JS</title>
			</Head>

			<Header />

			<main>{children}</main>
		</>
	);
};

export default Layout;
