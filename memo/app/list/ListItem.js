'use client'

import Link from "next/link";

export default async function ListItem({result}) {
    return (
        <div>
            {
                result.map((a, i) =>
                    <div className="list-item" key={i}>
                        <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
                        <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                        <button className="list-btn" onClick={(e) => {
                            fetch('/api/post/delete', {method: 'POST', body: result[i]._id})
                                .then(res => res.json())
                                .then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none';
                                    }, 1000)
                                })
                        }}>🗑️
                        </button>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}