enum Weekend{
    monday = "Monday",
    tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}
function inRa(item:any):void{
    for(const values in item){
        console.log(item[values]);
        
    }
}
inRa(Weekend)