import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const OffersChart = ({data, title}) => {
    const options = {
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: title,
            },
        },
    }
    const BarFixed = withChartSizeControl(Bar);
    return <BarFixed options={options} data={data} type={'bar'} height={250}/>
}

function withChartSizeControl(Component) {
    return props => (
        <div
            className="chart"
            style={{
                position: "relative"
                , height: props.height+"px"
                , width: props.width+"px"
            }}
        >
            <Component {...props} />
        </div>
    );
}

export default OffersChart;