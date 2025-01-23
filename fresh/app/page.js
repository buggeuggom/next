
export default function Home() {

    let name = 'Hwang';
    let link = 'http://google.com';

    return (
        <div>
            <h4 className="title">아주 후레시</h4>
            <h5 style={{color:'blue',  fontStyle:'30px', textAlign: 'center'}}>아주 후레시</h5>
            <p className="title-sub">by dev {name}</p>
            <a href={link}> 구글 링크</a>
        </div>
    )
}