import type { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Loved: NextPage = () => {
  return (
    <Layout title="찜꽁" canGoBack backUrl={"/profile"} hasTabBar>
      <ProductList kind="sales" />
    </Layout>
  );
};

export default Loved;
