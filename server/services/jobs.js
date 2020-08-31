const olx = require('./olx');

module.exports = {
    async get(filter) {
        const jobs = await olx.scrape(filter);
        console.log({jobs});
        return jobs;
    }
};
