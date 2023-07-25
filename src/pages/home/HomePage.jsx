import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Products from '../../components/products/Products';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <Intro />
                <Products />
            </main>
        </div>
    );
}
 
export default HomePage;