const fetchDashboardDetails = async (id: string) => {
    const requestUrl = `https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/${id}.json`;

    const config = {method: 'GET'}

    try {
        const response = await fetch(requestUrl, config);
        return response.json();
    } catch (e) {
        console.log('Error when fetching dashboard details', e);
        return false
    }
}

export default fetchDashboardDetails;
