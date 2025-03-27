function download(url) {
    return new Promise(function x(res, rej){
        console.log("Downloading from the URL:", url);  
        setTimeout(function execd() {
            let data = "Shubham's Data <-_->";
            let errMsg = "No message found"; 
            rej(errMsg);
        }, 3000);
    })
}


async function steps(){
    try{
        const downloadedData = await download("www.xyz.com");
        console.log("Downloaded data is", downloadedData); 
        return "Done";
    } 
    catch(error){
        console.log("We have handled the error", error);
    }
    finally{
        console.log("Executing the finally");
    }
}


steps();


// we write the code in try block that can potentially throw error
// whatever error that is thrown from try will be caatched in catch no need to manually throw error like in promises 
// finally works as same as in promises