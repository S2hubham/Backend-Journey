/* function download(url, cb) {
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

function upload(newUrl, file, cb) {
    console.log("Uploading", file, "to", newUrl);
    setTimeout(function exec() {
        console.log("File uploaded successfully!");
        cb("Operation Successfull!!!");
    }, 3000);
}


download("www.xyz.com", function(data) {
    saveToFile(data, function(file) {
        upload("www.abc.com", file, function end(msg){
            console.log(msg);
        });
    });
}); */





/* function download(url) {
    return new Promise(function x(res, rej){
        console.log("Downloading from the URL:", url);
        console.log();
        setTimeout(function exec() {
            let data = "Shubham's Data <-_->";
            console.log("Data downloaded successfully!");
            console.log();
            res(data);
        }, 3000);
    })
}

function saveToFile(data) {
    return new Promise((res, rej) => {
        let file = "temp.js";
        console.log("Saving data", data, "to file", file);
        console.log();
        setTimeout(function exec() {
            console.log("Data saved successfully!");
            console.log();
            res(file);
        }, 3000);
    })
}

function upload(file) {
    return new Promise((res, rej) => {
        let newurl = "www.abc.com";
        console.log("Uploading", file, "to", newurl);
        console.log();
        setTimeout(function exec() {
            console.log("File uploaded successfully!");
            console.log();
            res("Operation Successfull!!!");
        }, 3000);
    })
} 


download("www.xyz.com")
.then(saveToFile)
.then(upload)
.then(function f3(data){
    console.log(data);
}) */ 


/* function getInt(x){
    return Math.floor(Math.random() * x);
}

function flight(name, cb){
    console.log("Searching for the flight...");
    let finder = getInt(Math.floor(Math.random()*10));
    setTimeout(function x(){
        if(finder % 2 == 0){
            console.log("Flight is available");
            cb(name);
        }
        else{
            console.log("Flight not available");
            return;
        }
    } ,2000);
}

function book(name, cb){
    console.log("Booking the flight", name);
    setTimeout(function x(){
        console.log("Booked successfully");
        let ticket = getInt(Math.floor(Math.random()*100));
        cb(ticket);
    }, 3000);
}


function sendTicket(ticket, cb){
    console.log("Getting ticket");
    setTimeout(function x(){
        console.log("Ticket number is", ticket);
        cb("Done <-_->")
    }, 2000);
}

flight("Emirates", function(name){
    book(name, function(ticket){
        sendTicket(ticket, function(data){
            console.log(data);
        })
    })
}) */



/* function getInt(x){
    return Math.floor(Math.random() * x);
}

function flight(name){
    return new Promise(function searching(res, rej) {
        console.log("Searching for the flight...");
        let finder = getInt(Math.floor(Math.random()*10));
        setTimeout(function x(){
            if(finder % 2 == 0){
                console.log("Flight is available");
                res(name);
            }
            else{
                rej("No filght available!!!");
            }
        } ,2000);
    })
}

function book(name){
    return new Promise(function booking(res, rej){
        console.log("Booking the flight", name);
        setTimeout(function x(){
            console.log("Booked successfully");
            let ticket = getInt(Math.floor(Math.random()*100));
            res(ticket);
        }, 3000);
    })
}


function sendTicket(ticket){
    return new Promise(function getTicket(res, rej){
        console.log("Getting ticket");
        setTimeout(function x(){
            console.log("Ticket number is", ticket);
            res("Done <-_->")
        }, 2000);
    })
}

flight("Emirates")
.then(book)
.then(sendTicket)
.then(console.log)
.catch(console.log) */