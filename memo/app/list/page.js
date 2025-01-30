import {connectDB} from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function Page() {
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();

    return (
        <div className="list-bg">
            {
                result.map((a, i) =>
                    <div className="list-item">
                        <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
                        <DetailLink/>
                        <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>

                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}