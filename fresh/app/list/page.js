
export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                products.map((product, idx)=>{
                    return (
                        <div className="food" key={idx}>
                            <img src={`/food${idx}.png`} className="food-img"/>
                            <h3>{product} ${idx}</h3>
                        </div>
                    )
                }) }
        </div>
    )
}
