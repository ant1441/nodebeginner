var exec = require("child_process").exec;

function start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '<!DOCTYPE html>\n' +
        '<html>\n' +
        '\t<head>\n' +
        '\t\t<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />\n' +
        '\t</head>\n' +
        '\t<body>\n' +
        '\t\t<form action="/upload" method="post">\n' +
        '\t\t\t<textarea name="text" rows="20" cols="60"></textarea>\n' +
        '\t\t\t<input type="submit" value="Submit Text" />\n' +
        '\t\t</form>\n' +
        '\t</body>\n' +
        '</html>\n';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    var content = "You've sent: " + postData;

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
    response.end();
}

exports.start = start;
exports.upload = upload;
