/**
 * Created by samuel on 10/23/16.
 */

const fs = require('fs-extra');
var exec = require('child_process').exec;

const THEME = 'lumen';
const BOOTSTRAP_LOCATION = 'node_modules/bootstrap/dist';
const BOOTSTRAP_DESTINATION = 'public/bootstrap';

function downloadTheme() {
    var wget = 'wget -O ' + BOOTSTRAP_DESTINATION + '/css/bootstrap.' + THEME + '.min.css ' +
        '"http://bootswatch.com/' + THEME + '/bootstrap.min.css"';

    exec(wget, function (err) {
        if (err)
            throw err;

        console.log('Theme ' + THEME + ' has been downloaded to ' + BOOTSTRAP_DESTINATION + '/css with file name ' + 'bootstrap.' + THEME + '.min.css');
    });
}

function copyBootstrap() {
    fs.copy(BOOTSTRAP_LOCATION, BOOTSTRAP_DESTINATION, function (err) {
        if (err)
            throw err;

        console.log('Copy to ' + BOOTSTRAP_DESTINATION + ' finished. Now downloading theme ' + THEME);
        downloadTheme();
    });
}

fs.emptyDir(BOOTSTRAP_DESTINATION, function (err) {
    if (err)
        throw err;

    console.log('Cleaned out ' + BOOTSTRAP_DESTINATION, '. Now copying bootstrap.');
    copyBootstrap();
});