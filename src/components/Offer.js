import React from 'react';
import {useHistory} from "react-router-dom";

const NO_DATA = "Details presented in offer";

const Offer = ({data, addCompareBtn}) => {
    const history = useHistory();
    return <article className={"section"}>
        <div className={"param-image"} style={{backgroundImage: `url(${data?.imgUrl})`}}/>
        <div className={"details-section"}>
            <a href={data?.offerUrl} className={"link"}>
                <section className={"content"}>
                    <section className={"general-info"}>
                        <header className={"param param__header"}><b>{data?.title || NO_DATA}</b></header>
                        <span className={"param param__price"}>{data?.price || NO_DATA}</span>
                    </section>
                    <section className={"rooms-area-wrapper"}>
                        <div className={"param param-container"}>
                            <div className={"rooms-img"}/>
                            <div>{data?.rooms || NO_DATA}</div>
                        </div>
                        <div className={"param param-container"}>
                            <div className={"area-img"}/>
                            <div>{data?.area || NO_DATA}</div>
                        </div>
                    </section>
                </section>
            </a>
            {addCompareBtn ? <button className={"analyse-btn"} onClick={() => history.push('/stats-per-flat', data)}>Analyze
            </button> : <div/>}
        </div>
    </article>
}
export default Offer;