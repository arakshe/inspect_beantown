require('dotenv').config();
const axios = require('axios');

async function searchBuisness(term, location) {
    try{
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            },
            params: {
                term, location
            }
        });
        return response.data
    }catch(e){
        console.error('Error', e);
    }
}

(async() => {
    const buisnesses = await searchBuisness('110 Grill', 'Dorchester, Boston, MA');
    const filteredBusinesses = buisnesses.businesses.filter(business => {
        // Check if the business name contains '110 Grill' and location matches 'Dorchester, Boston, MA'
        return business.name.includes('110 Grill');
    });
    console.log(filteredBusinesses);
})()