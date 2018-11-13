var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var updateReviewMW = require('../middleware/reviews/updateReview');

var getReviewList = require('../middleware/reviews/getReviewList');

var reviewModel = require('../models/review');

module.exports = function (app) {

    var objectRepository = {
        reviewModel: reviewModel
    };

    /**
     * Add new review
     */
    app.use('/reviews/new',
        authMW(objectRepository),
        updateReviewMW(objectRepository),
        renderMW(objectRepository, 'newreview')
    );

    /**
     * List all reviews of a user
     */    
    app.use('/reviews',
        authMW(objectRepository),
        getReviewList(objectRepository),
        renderMW(objectRepository, 'reviews')
    );
};