module.exports.locationList = function(req, res){
    res.render('index', {title: 'List Location'});
};

module.exports.locationInfo = function(req, res){
    res.render('index', {title: 'Location Info'});
};

module.exports.addReview = function(req, res){
    res.render('index', {title: 'Add Review'});
};
