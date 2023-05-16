let db = require("../database/models");
let op = db.Sequelize.Op

let indexController = {
    index: function(req, res){
        return res.send('hola')
        /* return res.render('index', {title: 'Express'}) */
    }
}

module.exports = indexController;