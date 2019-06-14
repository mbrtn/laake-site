import Head from "next/head";

function HeadBlock(props) {
  const setGoogleTags = () => {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-142159020-1');
      `
    };
  };

  const isProduction = process.env.NODE_ENV === "production";

  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#ff2c52"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      {isProduction && (
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X"
        />
      )}
      {isProduction && <script dangerouslySetInnerHTML={setGoogleTags()} />}
    </Head>
  );
}

export default HeadBlock;
