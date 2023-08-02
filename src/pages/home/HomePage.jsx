import Catalog from "../../components/catalog/Catalog";
import Intro from "../../components/intro/Intro";
import Products from "../../components/products/Products";

const HomePage = () => {
  return (
    <main>
      <Intro />
      <Products />
      <Catalog />
    </main>
  );
};

export default HomePage;
