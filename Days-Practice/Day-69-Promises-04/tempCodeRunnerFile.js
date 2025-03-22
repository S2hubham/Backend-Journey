function download(url, cb) {
    console.log("Downloading from the URL:", url);
    setTimeout(function exec() {
        let data = "Dummy data from " + url;
        console.log("Data downloaded successfully!");
        cb(data);
    }, 3000);
}

function saveToFile(data, cb) {
    let file = "temp.js";
    console.log("Saving data to file:", file);
    setTimeout(function exec() {
        console.log("Data saved successfully!");
        cb(file);
    }, 2000);
}

function upload(newUrl, file) {
    console.log("Uploading", file, "to", newUrl);
    setTimeout(function exec() {
        console.log("File uploaded successfully!");
    }, 3000);
}


download("www.xyz.com", function(data) {
    saveToFile(data, function(file) {
        upload("www.abc.com", file);
    });
});
