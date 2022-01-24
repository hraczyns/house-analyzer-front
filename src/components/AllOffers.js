import {useEffect, useState} from "react";
import restService from "../services/RestService";
import Offer from "./Offer";

import '../style.css';
import ReactLoading from "react-loading";

const AllOffers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const results = await restService.getOffers();
            setData(results);
        })();
    }, [])

    const getLoader = () => {
        return <div className={"loading-wrapper"}>
            <ReactLoading className={"loading"} type={"spinningBubbles"} width={130} color="rgb(7,210,90)"/>
        </div>
    }

    return (
        <main className={"wrapper"}>
            {data.length !== 0 ? data.map((o, index) => <Offer key={index} data={o} addCompareBtn/>) : getLoader()}
        </main>
    );
}

export default AllOffers;