/**
 * Created by Milena on 02/04/2017.
 */

const userController = require('./../controllers/user');
const homeController = require('./../controllers/home');
const leaderboardController = require('./../controllers/leaderboard');
const profileController = require('./../controllers/profile');


module.exports = (app) => {
    app.get('/', homeController.index);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);

    app.get('/user/login', userController.loginGet);
    app.post('/user/login', userController.loginPost);

    app.get('/user/logout', userController.logout);

    app.get('/leaderboard/leaderboard', leaderboardController.leaderboard);

    app.get('/profile/profile/:id', profileController.details);


    app.get('/profile/edit/:id', profileController.editGet);
    app.post('/profile/edit/:id', profileController.editPost);

};

