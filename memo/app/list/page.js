import {connectDB} from "@/util/database";
import ListItem from "@/app/list/ListItem";

export const dynamic = 'force-dynamic' //'force-static'

export default async function Page() {
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();

    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    )
}