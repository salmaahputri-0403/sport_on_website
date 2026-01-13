import HeroSection from "./component/home/hero";
import CategoriesSection from "./component/home/categorys";
import ProductsSection from "./component/home/products";
import FooterSection from "./component/layouts/footer";
export default function Home() {
    return (
        <main>
            <HeroSection/>
            <CategoriesSection/>
            <ProductsSection/>
        </main>
    );
}
