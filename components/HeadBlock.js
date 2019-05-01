import Head from "next/head";

function HeadBlock(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  );
}

export default HeadBlock;
