require('dotenv').config();

const config = {
    env: process.env.APP_ENV,
    port: process.env.PORT || 3000,
    gqlPort: process.env.GQL_PORT || 4000,
    appLocation: process.env.APP_LOCATION || 'FRANCE',
    mongoUrl: process.env.MONGO || 'mongodb://localhost:27017/homeLike'
};

export default config;
