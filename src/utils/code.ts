/**
 * Code
 */
export const code = `import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
\trender() {
\t\treturn (
\t\t\t<Html lang="en">
\t\t\t\t<Head>
\t\t\t\t\t{/*Fonts*/}
\t\t\t\t\t<link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
\t\t\t\t\t<link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
\t\t\t\t\t<link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
\t\t\t\t\t<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
\t\t\t\t\t<noscript>
\t\t\t\t\t\t<link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
\t\t\t\t\t</noscript>
\t\t\t\t</Head>
\t\t\t\t<body>
\t\t\t\t\t<Main />
\t\t\t\t\t<NextScript />
\t\t\t\t</body>
\t\t\t</Html>
\t\t)
\t}
}

export default MyDocument
`;
