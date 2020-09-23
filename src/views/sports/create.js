const sportPatial = require('./sport');

module.exports = ({sport}) => {
    return sportPatial({ sports: sport });
};
