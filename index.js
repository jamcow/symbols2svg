const fs = require('fs');
const { parse } = require('svg-parser');

// Read from sprite file
fs.readFile('symbols.svg', 'utf8', function (err, contents) {
    console.log(err);

    // const symbols = parsed.children[0].children[0].children;
    // const symbols = parsed.children;

    // https://www.delftstack.com/howto/javascript/javascript-read-file-line-by-line/

    let lines = contents.split(/\r\n|\n/);
    for (var line = 0; line < lines.length - 1; line++) {
        // console.log(line + " --> " + line + line);

        const contents = lines[line];
        const parsed = parse(contents);
        const symbols = parsed.children;
        let name = '';

        symbols.forEach(symbol => {
            name = symbol.properties.id;
            console.log(name);
        });

        const newIcon = contents.replace(/<symbol /g, '<svg ').replace(/<\/symbol>/g, '</svg>').replace('id="icon--', 'id="');
        fs.writeFile(`export/${name}.svg`, newIcon, () => {
            // console.log(line);
        });
    }

    //   symbols.forEach(symbol => {
    //     let paths = '';
    //     const name = symbol.properties.id;
    //     symbol.children.forEach(path => {
    //       paths = paths + `<path d="${path.properties.d}" />`
    //     });

    //     // Build SVG content
    //     const newIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
    //       <g>
    //         ${paths}
    //       </g>
    //     </svg>`

    //     // White to file
    //     fs.writeFile(`export/${name}.svg`, newIcon, () => {
    //       console.log(name);
    //     });
    //   });

});