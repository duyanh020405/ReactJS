function kiemTraEmei(input:any){
    if(Number.isInteger(input)){
        console.log("so nguyen");
        
    }
     else if(typeof input ==="number" && !isNaN(input)){
        console.log("so thuc");
        

    }
    else{ 
        console.log("khac");
        
    }
}
kiemTraEmei(78)
kiemTraEmei("duy")
kiemTraEmei(5.5)

// Hàm Number.isInteger(number) là một phương thức tích hợp trong 
//JavaScript/TypeScript được sử dụng để 
// kiểm tra xem một giá trị có phải là một số nguyên không.