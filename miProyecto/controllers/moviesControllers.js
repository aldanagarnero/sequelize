let db = require("../database/models");
let op = db.Sequelize.Op

let moviesController = {
    index: function(req, res){
        db.Movie.findAll({
            include:[
                {association: 'genre'}
            ]
        })
            .then(function(resultados){
                return res.render('index', {datos: resultados}) 
            })
            .catch(function(error){
                console.log(error);
            })
    },

    detail: function(req, res){
        let id = req.params.id
        db.Movie.findByPk(id)
            .then(function(resultados){
                return res.send(id)
                return res.render('detail', {datos: resultados}) 
            })
            .catch(function(error){
                console.log(error);
            });
    },

    new: function(req, res){

    },

    recomm: function(req, res){

    }
}

module.exports = moviesController;