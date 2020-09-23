const jbuilder = require('jbuilder');

// eslint-disable-next-line no-unused-vars
const short = [
    'id',
    'name',
    'approved',
    'playerCount',
    'extras'
];
// eslint-disable-next-line no-unused-vars
const full = [
    'description',
    'extraCount'
].concat(this.short);
// eslint-disable-next-line no-unused-vars
const all = [
].concat(this.full);

module.exports = ({ sports }, type = 'short') => {
    type = ['all', 'full', 'short'].includes(type) ? type : 'short';
    const attributes = eval(`${type}`);

    return JSON.parse(jbuilder.create(function (json) {
        json.extract(sports, ...attributes);
    }).target());
};
