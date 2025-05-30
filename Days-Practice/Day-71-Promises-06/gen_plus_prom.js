// Combining generators and promises which will are called as asycn generators

function download(url) {
    return new Promise(function x(res, rej){
        console.log("Downloading from the URL:", url);
        setTimeout(function exec() {
            let data = "Shubham's Data <-_->";
            console.log("Data downloaded successfully!");
            res(data);
        }, 3000);
    })
}

function saveToFile(data) {
    return new Promise((res, rej) => {
        let file = "temp.js";
        console.log("Saving data", data, "to file", file);
        setTimeout(function exec() {
            console.log("Data saved successfully!");
            res(file);
        }, 3000);
    })
}

function upload(file) {
    return new Promise((res, rej) => {
        let newurl = "www.abc.com";
        console.log("Uploading", file, "to", newurl);
        setTimeout(function exec() {
            console.log("File uploaded successfully!");
            res("Operation Successfull!!!");
        }, 3000);
    })
} 

function doAfterRecieving(value){
    let future2 = iter.next(value);
    console.log("Future is", future2);
    if(future2.done) return;
    future2.value.then(doAfterRecieving);
}

function* steps(){
    const downloadedData = yield download("www.xyz.com");
    console.log("Download data is", downloadedData);
    const fileWritten = yield saveToFile(downloadedData);
    console.log("File written is", fileWritten);
    const uploadResponse = yield upload(fileWritten);
    console.log("Uploaded response is", uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future1 = iter.next();
console.log(future1.value);
future1.value.then(doAfterRecieving);