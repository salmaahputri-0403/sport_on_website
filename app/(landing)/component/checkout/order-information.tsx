import CardWithHeader from "../ui/card_header";

const OrderInfoSection =() =>{
    return(
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text"placeholder="Type your full name" id="full_name" />
                </div>
                <div className="input-group">
                    <label htmlFor="number">Whatsapp Number</label>
                    <input type="text"placeholder="+62xxxx" id="number" />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Shipping Address</label>
                    <textarea rows={7} placeholder="Example Street, 18, West Jakarta, Indonesia, 66521+62xxxx" id="address" />
                </div>
            </div>
        </CardWithHeader>
    )
}
export default OrderInfoSection;