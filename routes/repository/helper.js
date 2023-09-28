const moment = require("moment");

exports.GetCurrentDate = () => {
    return  moment().format("YYYY-MM-DD");
};

exports.GetCurrentDatetime = () => {
    return  moment().format("YYYY-MM-DD hh:mm:ss");
};
