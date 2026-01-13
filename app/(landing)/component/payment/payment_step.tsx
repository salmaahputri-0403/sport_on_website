"use client";

import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card_header";
import FileUpload from "../ui/file-upload";
import PriceFormater from "@/app/utils/price-formater";
import Button from "../ui/button";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const PaymentSteps =() =>{
    const{push}=useRouter()
    const uploadAndConfirm =() =>{
        push("/order_status/123123")
    
        }


    
    return(
        <CardWithHeader title="Payment Steps">
            <div className="p-5">
                <ol className=" mb-5 list-decimal text-xs pl-2 flex flex-col gap-4">
                <li>Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).</li>
                <li>After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.</li>
                <li>Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.</li>
            </ol>
            <FileUpload/>
                <div className="border-t border-gray-300 p-4 mt-7.25">
                            <div className="flex justify-between font-semibold">
                                <div className=" text-[14px]">Total</div>
                                <div className="text-primary text-[12px]">{PriceFormater(45000)}</div>
                            </div>
                            <Button variant="dark" size="normal" className="w-full py-2 mt-4" onClick={uploadAndConfirm} >
                                <FiCheckCircle/>
                                Upload Receipt & Confirm
                            </Button>
                </div>
            
            </div>
            
        </CardWithHeader>
    )

}
export default PaymentSteps;