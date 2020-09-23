module.exports = (resp, success = true) => {
    return {
        data: resp,
        success
    };
};