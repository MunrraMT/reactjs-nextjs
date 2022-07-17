module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'rajje.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ugngfrze'),
      user: env('DATABASE_USERNAME', 'ugngfrze'),
      password: env('DATABASE_PASSWORD', 'zYSbYEQJqijAV3afICgEsDVMLCqFho9V'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
