
function check <T extends boolean>(item:T){
    if(item === true){
        console.log("xin chao");
    }
    else{
        console.log("tam biet");
        
    }
}
check(true)
check(false)