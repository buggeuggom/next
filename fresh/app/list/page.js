'use client';
import {useState} from "react";

export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    let [cnt, setCnt] = useState(0);
    let [cnts, setCnts] = useState([0]);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                products.map((product, idx) => {
                    return (
                        <div className="food" key={idx}>
                            <img src={`/food${idx}.png`} className="food-img"/>
                            <h3>{product} ${idx}</h3>
                            <span> {cnt} </span>
                            <button onClick={() => {
                                setCnt(cnt + 1)
                            }}>+
                            </button>
                            <button onClick={() => {
                                setCnt(cnt - 1)
                            }}>-
                            </button>
                        </div>
                    )
                })
            }
            <h4 className="title">상품목록</h4>
            <div className="food" key='10'>
                <span>{products[0]}</span>
                <button onClick={() => {
                    let copy = [...cnts] //참조값만 js는 저장하고 useState는 동일한 값인 경우 변경 X
                    copy[0]++
                    setCnts(copy)
                }}>+
                </button>
                <span>{cnts[0]}</span>
            </div>
        </div>

    )
}
