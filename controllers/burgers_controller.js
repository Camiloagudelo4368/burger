var express = require("express")
var burger = require("../models/burger")

var router = express.Router();

router.get("/", (req, res) => {
    burger.all(result => {

        var burgers = []
        var devouredList = []

        result.forEach(element => {
            
            if (element.devoured) {
                devouredList.push(element);
            }
            else{
                burgers.push(element)
            }
        });


        var objResult = {
            burgers: burgers,
            devoured : devouredList
        }

        res.render("index", objResult)
    })
})

router.post("/api/burger", (req, res) => {
    var burger_name = req.body.burger_name;

    // console.log(burger_name)

    burger.create(burger_name, 0, result => {
        res.redirect("/" );
    })
})

router.put("/api/burger/:id", (req, res) => {
    var burger_id = req.params.id;

    // console.log(req.body, burger_id)

    burger.update(burger_id, 1, result => {
        res.render("index");
    })
})

router.delete("/api/burger/:id", (req, res) => {
    var burger_id = req.params.id;

    // console.log(req.body, burger_id)

    burger.destroy(burger_id, result => {
        res.render("index");
    })
})

module.exports = router;