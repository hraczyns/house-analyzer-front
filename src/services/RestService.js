const API = "http://localhost:8080/offers"

const restService = {
    getOffers: async () => {
        const results = await fetch(API + '?isToCleanCached=true');
        if (results?.status === 200) {
            return results.json();
        }
        return [];
    },
    getDataForChart: async () => {
        const results = await fetch(API + '/data-chart/all-statistics')
        if (results?.status === 200) {
            return results.json();
        }
        return [];
    },
    getStatsPerOffer: async (offer) => {
        console.log(offer)
        const results = await fetch(API + '/stats-per-flat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(offer)
        });
        if (results?.status === 200) {
            return results.json();
        }
        return {};
    }
}

export default restService;