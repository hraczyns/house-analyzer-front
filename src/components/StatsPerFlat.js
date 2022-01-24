import Offer from "./Offer";
import {useEffect, useState} from "react";
import restService from "../services/RestService";

const StatsPerFlat = ({location: {state}}) => {

    const [stats, setStats] = useState({
        averagePricePerMeter: 0,
        pricePerMeter: 0,
        averagePriceForFlatWithAboutInputMeters: 0,
        averagePriceForFlatWithAboutInputRooms: 0
    })

    useEffect(() => {
        (async () => {
            const result = await restService.getStatsPerOffer(state);
            setStats(result);
        })();
    }, []);

    return <main className={"analyse-wrapper"}>
        <article className={"analyse"}>
            <Offer data={state}/>
            <section className={"analyse-stats"}>
                <div className={"analyse-part"}>
                    <span>Price per meter</span>
                    <span>{stats.pricePerMeter.toFixed(2)} zl / m<sup>2</sup></span>
                </div>
                <div className={"analyse-part"}>
                    <span>Average price per meter</span>
                    <span>{stats.averagePricePerMeter.toFixed(2)} zl / m<sup>2</sup></span>
                </div>
                <div className={"analyse-part"}>
                    <span>Average price for flat with that area (+5m<sup>2</sup>/-5m<sup>2</sup>)</span>
                    <span>{stats.averagePriceForFlatWithAboutInputMeters.toFixed(2)} zl</span>
                </div>
                <div className={"analyse-part"}>
                    <span>Average price for flat with that number of rooms</span>
                    <span>{stats.averagePriceForFlatWithAboutInputRooms.toFixed(2)} zl</span>
                </div>
                <div className={"analyse-part-link"}>Link to offer: <a href={state.offerUrl}>{state.offerUrl}</a></div>
            </section>
        </article>
    </main>
}
export default StatsPerFlat;