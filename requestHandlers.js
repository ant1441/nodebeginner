var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

    var content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    });

}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    var content = "Hello Upload";

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
    response.end();
}

exports.start = start;
exports.upload = upload;
