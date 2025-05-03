import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="icon" href="/favicon.webp" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="globals.css" />

        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta content="width=device-width,initial-scale=1" name="viewport"/>
          <meta name="description" content="Maxworth Systems - Swift > Smart > Secure" />
          <meta property="og:title" content="Maxworth Systems - Swift > Smart > Secure"/>
            <meta property="og:description" content="Maxworth Systems - Swift > Smart > Secure" />
            {/* <!-- <meta property="og:image" content="https://maxworthsystems.com/assets/img/favicon.webp"> --> */}
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </Head>
          <body>
            <Main />
            <NextScript />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
          </body>
        </Html>
        );
}
