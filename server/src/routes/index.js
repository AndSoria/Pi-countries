const { Router } = require("express");

const router = Router();
const countryRouter= require('./countryRouter')
const activityRouter= require ('./activityRouter')

router.use('/countries', countryRouter )
router.use('/activities', activityRouter )

module.exports = router;
