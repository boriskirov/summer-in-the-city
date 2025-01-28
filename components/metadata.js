import Head from "next/head";

const Metadata = ({ title, description, image }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <link rel="icon" href="/fav.ico" />
      <link rel="apple-touch-icon" href="/fav.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="SUMMER IN THE CITY" />
      <meta name="image" property="og:image" content={image} />
    </Head>
  );
};
export default Metadata;
