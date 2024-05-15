type bai9 = "success" | "error";
let xemDa: { status: bai9, message: string };
xemDa = { status: "success", message: "error" };
console.log(xemDa.status);
xemDa = { status: "error", message: "success" };
console.log(xemDa.status); 
