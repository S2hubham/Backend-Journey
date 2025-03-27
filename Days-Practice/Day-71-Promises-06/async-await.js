// writing the whole code in async await
// just replace the function* with async function
// yields with await 
// the code will work the same

function download(url) {
    return new Promise(function x(res, rej){
        console.log("Downloading from the URL:", url);  // 1
        setTimeout(function execd() {
            let data = "Shubham's Data <-_->";
            console.log("Data downloaded successfully!");  // 4
            res(data);
        }, 3000);
    })
}

function saveToFile(data) {
    return new Promise((res, rej) => {
        let file = "temp.js";
        console.log("Saving data", data, "to file", file);  // 6
        setTimeout(function execs() {
            console.log("Data saved successfully!");  // 7
            res(file);
        }, 3000);
    })
}

function upload(file) {
    return new Promise((res, rej) => {
        let newurl = "www.abc.com";
        console.log("Uploading", file, "to", newurl);  // 9
        setTimeout(function execu() {
            console.log("File uploaded successfully!");  // 10
            res("Operation Successfull!!!");
        }, 3000);
    })
} 

/* function doAfterRecieving(value){
    let future2 = iter.next(value);
    console.log("Future is", future2);
    if(future2.done) return;
    future2.value.then(doAfterRecieving);
} */

async function steps(){
    const downloadedData = await download("www.xyz.com");
    console.log("Downloaded data is", downloadedData);  // 5
    const fileWritten = await saveToFile(downloadedData);
    console.log("File written is", fileWritten);  // 8
    const uploadResponse = await upload(fileWritten);
    console.log("Uploaded response is", uploadResponse);  // 11
    return uploadResponse;
}

/* const iter = steps();
const future1 = iter.next();
console.log(future1.value);
future1.value.then(doAfterRecieving); */


steps()    // aync function by defaults return promise
.then((value)=>{console.log("We have completed steps with", value);})  // 12
console.log("outside");  // 2
for(let i = 0; i < 10000000000; i++){}
setTimeout(() => {console.log("Timer done");}, 7000);  // 13 
console.log("For loop done");  // 3