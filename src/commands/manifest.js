var fs = require("fs")
var conf = require("../conf")
var manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

if(!conf.args[1] || !conf.args[2]) {
    console.log("[PWAct]", "You must provide an argument and a option");
}
else {

    let opt = (conf.args[1]).replace('set:', '')
    let arg = (conf.args).slice(2,(conf.args).length).join(" ")

    if (!conf.available_manifest.includes(opt)) {

        console.log("[PWAct]", "Invalid option");
    }
    else {

        fs.writeFile("manifest.json", JSON.stringify(manifest, null, 2), 'utf8', function (err) {

            if(err) {
                return console.log(err);
            }

            console.log("[PWAct]", "manifest.json updated");
        });
    }

}

module.exports = manifest
