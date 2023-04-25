const express = require("express");
const router = express.Router();

const chartsHandler = require("../router_handler/charts");

router.post("/raycharts/list", chartsHandler.raychartslist);

router.post("/raycharts/update", chartsHandler.updateraycharts);

router.post("/barcharts/list", chartsHandler.barchartslist);

router.post("/barcharts/update", chartsHandler.updatebarcharts);

router.post("/buildingdetails/list", chartsHandler.buildingdetailslist);

router.post("/buildingdetails/update", chartsHandler.updatebuilding);

module.exports = router;
