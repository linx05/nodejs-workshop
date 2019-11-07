const filterls = require('./filterls');

const dir = process.argv[2] || __dirname;
const extension = process.argv[3] || '.png';

filterls(dir, extension, (err, files) => {
    if (!err) {
        files.map((file, i) => {
            console.log(`File No. ${i+1}: ${file}`)
        });
    }
})
