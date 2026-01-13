import OrderInfoSection from "../component/checkout/order-information";
import CartItemSection from "../component/checkout/cart-item";
const CheckoutSection =() =>{
    return(
            <main className="bg-gray-100 min-h-[80vh] py-30">
                <div className="max-w-5xl mx-auto ">
                    <h1 className="text-5xl font-bold text-center py-5 mb-10">Checkout  Now</h1>
                    <div className="grid grid-cols-2 gap-14">
                        <OrderInfoSection/>
                        <CartItemSection/>
                    </div>
                </div>
                
            </main>
        
    )
}
export default CheckoutSection;