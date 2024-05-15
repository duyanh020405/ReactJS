type a = {
    name: string;
    address: string;
}

type b = {
    id: number;
}

function ketHop(obj:a,obj2:b){
    return {...obj,...obj2}
}
const obj:a={
    name:"duy",
    address:"thai binh"
}
const obj2:b={
    id:8
}
console.log(ketHop(obj,obj2));
//s

