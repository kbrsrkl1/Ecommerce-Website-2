import { BuyOnlineDatas, buyOnlineDatas } from "../../data/data";
export default function BuyOnline() {
    return <section className="container">
        <div className="title">
            When You <span>BUY ONLİNE</span>
        </div>
        <div className="buyOnline">
            {buyOnlineDatas.map(data => (
                <div className="data" key = {data.id}>
                    <div className="data_title">
                        {data.title}
                    </div>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </section>

}