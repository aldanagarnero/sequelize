module.exports = function(sequelize, DataTypes){
    let alias = "Movie"; // es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador
    let cols = {
        //aca hay que poner todas las columnas que tiene mi tabla
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title:{
            type: DataTypes.STRING
        },
        rating:{
            type: DataTypes.DECIMAL
        },
        awards:{
            type: DataTypes.INTEGER
        },
        release_date:{
            type: DataTypes.DATE
        },
        length:{
            type: DataTypes.INTEGER
        },
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type: DataTypes.DATE
        }
    }
    let conf = {
        createdAt: "created_at", //indica al modelo cómo se llama el campo de auditoría en la tabla.
        updatedAt: "updated_at",  //indica al modelo cómo se llama el campo de auditoría en la tabla.
    }

    let movie = sequelize.define(alias, cols, conf)

    movie.associate = function (models) {
        //Creo las relaciones con otros modelos
        movie.belongsTo (models.Genre, {
            as: 'genre',
            foreingKey: 'genre_id'
        })
    }

    return movie 
}