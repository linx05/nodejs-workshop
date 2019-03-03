const fs = require('fs');

function lsDir(path, extension, cb) {
    fs.readdir(path, (err, files) => {
        let list = files.reduce((acc, file) => {
            if (file.endsWith(extension)) {
                return [...acc, file];
            }
            return acc;
        }, [])
        return cb(err, list);
    })
}

module.exports = lsDir;