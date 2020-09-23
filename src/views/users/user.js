const jbuilder = require('jbuilder');

// eslint-disable-next-line no-unused-vars
const short = [
    'id',
    'name',
    'age',
    'email',
    'dob',
    'gender',
    'phone',
    'city',
    'country',
    'rating',
    'createdAt'
];
// eslint-disable-next-line no-unused-vars
const full = [
    'first',
    'last',
    'address',
    'postalCode',
    'approved',
    'deletedAt',
    'lastLogin'
].concat(this.short);
// eslint-disable-next-line no-unused-vars
const all = [
    'province',
    'timezone',
    'banned',
    'previousEmail',
    'updatedAt'
].concat(this.full);

module.exports = ({ users }, type = 'short') => {
    type = ['all', 'full', 'short'].includes(type) ? type : 'short';
    const attributes = eval(`${type}`);

    return JSON.parse(jbuilder.create(function (json) {
        json.extract(users, ...attributes);
    }).target());
};
