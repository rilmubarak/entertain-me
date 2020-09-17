module.exports = {
  apps : [{
    name: "graphql-orchestrators",
    script: 'node ./server/orchestrators/graphql/app.js',
    env_production: {
      "NODE_ENV": "production",
      "PORT": 80
    }
  }, {
    name: "movies",
    script: 'node ./server/services/movies/app.js',
  },{
    name:"tvSeries",
    script: 'node ./server/services/tvSeries/app.js',
  }],
};