import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="MGZpHFPqiVHbFnHMBFZbq8sTtpHgB5ZnYP4Ze2AOkrQ"
      />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://hansenlimanta.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Hansen Limanta",
  keywords:
    "web development, programming, portfolio, react, hansen limanta, frontend",
  description: "Hansen Limanta Web Portfolio",
};

export default Meta;
