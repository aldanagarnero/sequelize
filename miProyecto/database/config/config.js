module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "movies_db", //tiene que ser el nombre de la base da datos en tu motor de base de datos. Lo estas viendo en Workbench.
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
