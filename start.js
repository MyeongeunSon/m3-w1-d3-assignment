const app = require('./app');

const server = app.listen(300, function() {
    console.log(`Express is running on port ${server.address().port}`);
});