import Image from "next/image";
import LabelSection from "../../component/ui/label";
import ProductActions from "../../component/product_details/product-actions";
import PriceFormater from "@/app/utils/price-formater";
const ProductDetail =() =>{
    return(
        <main id="product-detail" className="container mx-auto py-40 flex gap-12">
            <div className="aspect-square  min-w-140 flex justify-center items-center bg-primary-light">
                <Image 
                    src="/image/product/product-4.png" 
                    width={564} 
                    height={378}
                    alt="Gambar Product"
                    className="aspect-square object-contain w-full"
                        />
            </div>
            
            <div className="w-3/4">
                <h1 className="font-extrabold text-5xl mb-6">SportsOn HyperSoccer v2</h1>
                <LabelSection/>
                <p className="text-dark-alternate mb-8 mt-5 leading-loose">The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.</p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {
                        PriceFormater(458000)
                    }
                </div>
                <ProductActions/>
            </div>
        </main>
    )
}
export default ProductDetail;