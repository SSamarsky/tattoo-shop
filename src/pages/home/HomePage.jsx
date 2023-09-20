import Catalog from "../../components/catalog/Catalog";
import Intro from "../../components/intro/Intro";
import Products from "../../components/products/Products";
import Banners from "../../components/banners/Banners";

const HomePage = () => {
  return (
    <main>
      <Intro />
      <Products />
      <Catalog />
      <Banners />
    </main>
  );
};

export default HomePage;
