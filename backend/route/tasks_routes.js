const express = require("express");
const router = express.Router();

const modelDate = require("../model/modelData.json");

router.get("/", function(req, res) {
    res.json(modelDate.docs);
});

router.post("/", function(req, res) {
    const body = req.body;
    let model = {
        "id": modelDate.docs.length + 1,
        "task": body.task,
        "dueDate": body.dueDate,
        "status": false,
        "advancedOptions": {
            
        },
        "timestamp": new Date()
    };
    modelDate.docs.push(model);
    console.log(model);
});

module.exports = router;