import Head from "next/head";
import type { NextPage } from "next";
import Page404Comp from "@/components/Welcome/Page404Comp";

const Page404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coin Bureau</title>
      </Head>

      <div>
        <Page404Comp />
      </div>
    </div>
  );
};

export default Page404;
