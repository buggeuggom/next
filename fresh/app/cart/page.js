import {carts} from "@/app/cart/data";

export default function Cart() {


    return (
        <div>
            <h4 className="title">Cart</h4>

            {carts.map((cart, i) => {
                return (
                    <CartItem item={cart} key={i} />
                )}
            )}
            <Banner content ="현대카드"/>
            <Btn color="red"/>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Banner(props){
    return (
        <h5>{props.content} 결제 행사중</h5>
    )
}

function Btn(props){
    return <button style={{ background : props.color }}>버튼임</button>
}