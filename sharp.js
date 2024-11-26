const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname,'src/public/images/heros');
const dest = path.resolve(__dirname,'src/public/images/heros');

if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
}

fs.readdirSync(target)
    .forEach((image) => {
        sharp(`${target}/${image}`)
        .resize(800)
        .toFile(path.resolve(__dirname,`${dest}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

        sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(__dirname,`${dest}/${image.split('.').slice(0,-1).join('.')}-small.jpg`));
    });