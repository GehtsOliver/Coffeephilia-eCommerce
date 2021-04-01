import Head from "next/head";
import React from "react";

const Header = ({
  title = "Coffeephilia - The Coffee Brand",
  description = "Coffeephilia is world's best coffee brand",
  tags = "Coffeephilia",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Coffeephilia LLC" />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
