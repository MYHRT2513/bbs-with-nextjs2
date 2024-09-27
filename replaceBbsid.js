const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            return;
        }

        const result = data.replace(/bbsId/g, 'bbsId');

        fs.writeFile(filePath, result, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file ${filePath}:`, err);
            } else {
                console.log(`Replaced in file ${filePath}`);
            }
        });
    });
}

function traverseDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dir}:`, err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error stating file ${filePath}:`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    traverseDirectory(filePath);
                } else if (stats.isFile()) {
                    replaceInFile(filePath);
                }
            });
        });
    });
}

const targetDirectory = process.argv[2];
if (!targetDirectory) {
    console.error('Please provide a directory path as an argument.');
    process.exit(1);
}

traverseDirectory(targetDirectory);
