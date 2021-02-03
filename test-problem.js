/**
 *  Recurrence problem
 */
var child_process_1 = require("child_process");
file = './not-generator-file-on-window/server.ts';
new Promise(function (resolve) {
    child_process_1.exec(require.resolve('typescript/bin/tsc') + " --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop " + file, {
    // child_process_1.exec("tsc"+ " --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop " + file, {
        cwd: process.cwd(),
        env: process.env,
    }, function () { return resolve(); });
})