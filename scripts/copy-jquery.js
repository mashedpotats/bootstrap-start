/**
 * Created by samuel on 10/23/16.
 */

const fs = require('fs-extra');

const JQUERY_LOCATION = 'node_modules/jquery/dist/jquery.min.js';
const JQUERY_DESTINATION = 'public/js/jquery.min.js';

console.log('Copying jQuery from' + JQUERY_LOCATION);
fs.copy(JQUERY_LOCATION, JQUERY_DESTINATION, function(err) {
    if (err)
        throw err;

    console.log('Copied jQuery to ' + JQUERY_DESTINATION)
});