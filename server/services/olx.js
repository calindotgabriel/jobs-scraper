const fs = require('fs');
const Xray = require('x-ray');

const URL = 'https://www.olx.ro/locuri-de-munca/';

const xray = Xray({
    filters: {
        trim: function(value) {
            return typeof value === 'string' ? value.trim() : value;
        }
    }
});

const logFn = ((err, data) => {
    console.log(data);
});

const write = (data, location) => {
    fs.writeFile(location, data, (err) => {
        if(err) console.error(err);
    });
};

xray(URL, 'body@html')((err, html) => {
    if (err) return Promise.reject(err);
    write(html, 'olx.html');
    return Promise.resolve();
});


function scrape({town}) {
    const url = town ? URL + '/' + town : URL;
    console.log({url});
    return xray(url, '.offer', [{
        title: '.linkWithHash | trim',
        city: '.bottom-cell .breadcrumb span',
        price: '.list-item__price .price-label | trim',
        type: ".bottom-cell .breadcrumb:last-child | trim",
        date: ".bottom-cell .breadcrumb:nth-child(2) | trim",
        link: ".space a@href",
    }])
        // .paginate('.pager .next .link@href')
        // .limit(3)
        .then(async data => {
            // console.log({data})
            data.forEach((d, i) => d.no = i);
            // data.map((d, i) => console.log(i))
            // write(JSON.stringify(data, null, 2), 'results.json');
            // console.log('Write JSON Success.');
            return data;
        });
}

module.exports = { scrape };