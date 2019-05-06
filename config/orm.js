var connection = require("../config/connection")

var orm = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM burgers order by id desc", (error, data) => {
            if (error) throw error
            cb(data);
        })
    },
    insertOne: (burger_name, devoured, cb) => {
        connection.query("INSERT INTO burgers SET ?", { burger_name: burger_name, devoured: devoured }, (error, data) => {
            if (error) throw error
            cb(data);
        })
    },
    updateOne: (id, devoured, cb) => {
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured,id], (error, data) => {
            if (error) throw error
            cb(data);
        })
    },
    deleteOne: (id, cb) => {
        connection.query("DELETE FROM burgers WHERE id = ?", [id], (error, data) => {
            if (error) throw error
            cb(data);
        })
    }
}

module.exports =  orm;