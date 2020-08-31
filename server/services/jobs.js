const olx = require('./olx');

module.exports = {
    async get() {
        const jobs = await olx.scrape();
        console.log({jobs});
        return jobs;
    }
};
