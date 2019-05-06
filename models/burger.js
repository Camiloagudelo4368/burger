var orm = require("../config/orm")

var burger = {
    all: (cb) => {
        orm.selectAll(result => {
            cb(result)
        });
    },

    create: (burger_name, devoured, cb) => {
        orm.insertOne(burger_name, devoured, result => {
            cb(result)
        });
    },

    update: (id, devoured, cb) => {
        orm.updateOne(id, devoured, result => {
            cb(result)
        });
    },
    destroy: (id, cb) => {
        orm.deleteOne(id, result => {
            cb(result)
        });
    }
}

module.exports = burger;