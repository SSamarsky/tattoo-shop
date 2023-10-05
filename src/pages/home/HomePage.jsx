import Catalog from "../../components/catalog/Catalog";
import Intro from "../../components/intro/Intro";
import Products from "../../components/products/Products";
import Banners from "../../components/banners/Banners";
import Brands from "../../components/brands/Brands";
import Info from "../../components/Info/Info";
import Reviews from "../../components/reviews/Reviews";

const HomePage = () => {
  return (
    <main>
      <Intro />
      <Products />
      <Catalog />
      <Banners />
      <Brands />
      <Info />
      <Reviews />
    </main>
  );
};

export default HomePage;