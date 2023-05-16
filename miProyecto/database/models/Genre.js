module.exports = function(sequelize, dataTypes){
    let alias = 'Genre';
    let cols = {
        id: {
            primaryKey: true,
            autoInrement: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type:dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    let conf = {
        createdAt: "created_at", //indica al modelo cómo se llama el campo de auditoría en la tabla.
        updatedAt: "updated_at",  //indica al modelo cómo se llama el campo de auditoría en la tabla.
    }

    let genre = sequelize.define(alias, cols, conf);

    genre.associate = function(models){
        genre.hasMany(models.Movie, {
            as: 'movie',
            foreignKey: 'movie_id'
        })
    }

    return genre
}