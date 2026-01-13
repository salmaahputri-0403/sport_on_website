"use client";

import { cartList } from "../ui/card_popup";
import Image from "next/image";
import Button from "../ui/button";
import PriceFormater from "@/app/utils/price-formater";
import { FiCreditCard, FiTrash2} from "react-icons/fi";
import CardWithHeader from "../ui/card_header";
import { useRouter } from "next/navigation";
const CartItemSection =() =>{
    const totalPrice = cartList.reduce((total,item)=>total + item.price * item.qty,0)
    const{push}=useRouter()
    const payment =() =>{
    
        }
    return(
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-75">
                {
                cartList.map((item, index)=>(
                    <div  key={index} className="border-b border-gray-200 p-4 flex gap-3 ">
                        <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                            <Image
                            src={`/image/product/${item.imgUrl}`}
                            alt={item.name} 
                            width={63}
                            height={63}
                            className="aspect-square object-contain"
                            />
                        </div>
                        <div className="self-center">
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="flex gap-3 font-medium text-xs">
                                <div>{item.qty}x</div>
                                <div className="text-primary">{PriceFormater(item.price)}</div>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" className="w-7 h-7 p-0! self-center ml-auto">
                            <FiTrash2/>
                        </Button>
                    </div>  
                ))}
                
            </div>
            <div className="border-t border-gray-300 p-4">
                    <div className="flex justify-between font-semibold">
                        <div className=" text-[14px]">Total</div>
                        <div className="text-primary text-[12px]">{PriceFormater(totalPrice)}</div>
                    </div>
                    <Button variant="dark" size="normal" className="w-full py-2 mt-4"onClick={()=>push("/payment")}>
                        <FiCreditCard/>
                        Proceed to Payment
                    </Button>
                </div>
        </CardWithHeader>
        
    )
}
export default CartItemSection;