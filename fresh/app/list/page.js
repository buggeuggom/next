'use client';
import {useState} from "react";

export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    let [cnt, setCnt] = useState(0);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                products.map((product, idx)=>{
                    return (
                        <div className="food" key={idx}>
                            <img src={`/food${idx}.png`} className="food-img"/>
                            <h3>{product} ${idx}</h3>
                            <span> {cnt} </span>
                            <button onClick={()=>{setCnt(cnt+1)}}>+</button>
                        </div>
                    )
                })}
        </div>
    )
}
