function download(url) {
    return new Promise(function x(res, rej){
        console.log("Downloading from the URL:", url);  // 1
        setTimeout(function execd() {
            let data = "Shubham's Data <-_->";
            console.log("Data downloaded successfully!");  // 4
            rej("No data found!!!");
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


download("abc.com")
.then(
    function processDownload(value){
        console.log("Downloaded data", value);
    },
    // function rejectDownload(error){
    //     console.log("Download error", error);
    //     throw error;
    // }
)
.then(
    function processWrite(value){
        console.log("Written data", value);
    },
    // function rejectWrite(error){
    //     console.log("Write error", error);
    //     throw error;
    // }
)
.then(
    function processUpload(value){
        console.log("Uploaded data", value);
    },
    // function rejectUpload(error){
    //     console.log("Upload error", error);
    // }
)
// better way to catch error
.catch(function f(error){
    console.log("Catching error", error);
})
.finally(function final(){
    console.log("Executing finally");
})

/* 

O/P
Downloading from the URL: abc.com
Data downloaded successfully!
Download error Shubham's Data <-_->
Written data undefined
Uploaded data undefined

Note : 
    even after rejecting promise in the download only still the further fullfillment handlers in .then chains get executed and undefined value is passed as the functions are not called 
    so in next .then fulfillmeent handlers get executed rather than rejection handlers 
    which typically should not happen so we have to manually throw error in each rejection handler then only the next rejection handlers gets executed 

    More better way is to use .catch() at the end
    
    .finally() gets executed even the promise is resolved or rejected at the end
    

*/