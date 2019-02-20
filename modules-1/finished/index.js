const filterls = require('./filterls');

const dir = process.argv[2];
const extension = process.argv[3] || '.jpg';

filterls(dir, extension, (err, files) => {
    if (!err) {
        files.map((file, i) => {
            console.log(`File No. ${i+1}: ${file}`)
        });
    }
})
