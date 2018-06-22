const app = require('./app');
const config = require('./server/config/index');
const auth = require('./server/routes/auth');
const users = require('./server/routes/users');
const posts = require('./server/routes/posts');
const authUser = require('./server/passportJs/index').authUser;
const followers = require('./server/routes/followers');

app.use(authUser);
app.use('/auth', auth);
app.use('/users', users);
app.use('/posts', posts);
app.use('/followers', followers);

app.use(function(err, req, res, next) {
    console.error('Error handling middleWar', err.message);
    res.json(err.message);
});

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!');
});
