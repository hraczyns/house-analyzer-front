import restService from "../services/RestService";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import ReactLoading from "react-loading";
import {useEffect, useState} from "react";
import OffersChart from "./OffersChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const castMax = el => {
    if (el?.max.toString().includes('e')) {
        return ' more';
    }
    return el?.max;
};

const Statistics = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const results = await restService.getDataForChart();
            const charts = [];
            for (const {providerName, statisticsSections} of results) {
                const chartsPerProvider = [];
                for (const section of statisticsSections) {
                    const datasetData = {
                        label: section.title,
                        backgroundColor: 'rgb(7,210,90)',
                        data: []
                    };
                    const labels = [];
                    for (const el of section?.groupsOffersList) {
                        let rangeText;
                        if (el?.min === el?.max) {
                            rangeText = el?.min;
                        } else {
                            rangeText = el?.min + ' - ' + castMax(el);
                        }
                        labels.push(rangeText);
                        datasetData.data.push(el?.singleOffers.length);
                    }
                    const dataForChart = {
                        labels: labels,
                        datasets: [datasetData]
                    };
                    chartsPerProvider.push(dataForChart);
                }
                charts.push({
                    title: providerName,
                    chartsPerProvider: chartsPerProvider
                });
            }
            setData(charts);

        })();
    }, []);

    const parseToCharts = () => {
        if (data.length === 0) {
            return <div className={"loading-wrapper"}>
                <ReactLoading className={"loading"} type={"spinningBubbles"} width={130} color="rgb(7,210,90)"/>
            </div>;
        }
        return data.map(({title, chartsPerProvider}, index) => <article key={index} className={"statistics-section"}>
            <h3>{title} statistics</h3>
            <section className={"statistics-section__chart"}>
                {chartsPerProvider.map((chart, index) => <OffersChart key={index} data={chart} title={""}/>)}
            </section>
        </article>);

    }

    return <div className={"statistics-wrapper"}>
        <main className={"statistics"}>
            {parseToCharts()}
        </main>
    </div>
}
export default Statistics;