/**
 * test-resolve-problem
 *  fix bug 
 */
var child_process_1 = require("child_process");
file = './fixbug-no-generator-file-on-window/server.ts';
new Promise(function (resolve) {

    //  Generator.js 394 line
    // add this to fix bug  that not-generator-file-on-window  
    const command =  `${require('os').platform() === 'win32' ? 'node ' : ''}${require.resolve(`typescript/bin/tsc`)}`;
    
    // console.log(command);

    console.log(command + " --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop " + file);
    child_process_1.exec(command+ " --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop " + file, {
    // child_process_1.exec("tsc"+ " --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop " + file, {
        cwd: process.cwd(),
        env: process.env,
    }, function () { return resolve(); });
})