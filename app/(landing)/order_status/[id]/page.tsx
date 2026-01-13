"use client"

import { useState } from "react";
import OrderConfirm from "../../component/order_status/order-confirm";
import OrderSubmitted from "../../component/order_status/submited";

const OrderStatus =() =>{
    const [isCofirmed, setIsConfirmed]=useState(false);
    return(
        <main className="bg-gray-100 min-h-[80vh] py-30">
                <div className="max-w-5xl mx-auto ">
                    <h1 className="text-5xl font-bold text-center py-5 mb-10">Order Status</h1>
                </div>
                {
                    isCofirmed ?(<OrderConfirm/>) : (<OrderSubmitted/>)
                }
                
                        
                
            </main>
    )
}
export default OrderStatus;