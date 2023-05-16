let db = require("../database/models");
let op = db.Sequelize.Op

let genreController = {
    index: function(req, res){
        db.Genre.findAll({
            include:[
                {association: 'movie'}
            ]
        })
            .then(function(resultados){
                return res.render('genre', {datos: resultados}) 
            })
            .catch(function(error){
                console.log(error);
            })
    }
}

module.exports = genreController;