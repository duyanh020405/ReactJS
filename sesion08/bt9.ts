function so(item: number) {
    return item * item;
}

function mangSo(item: number[]) {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        sum += item[i];
    }
    return sum;
}

function chuoi(item: string): number {
    return item.length;
}

function kiemTra(item: any): void {
    if (typeof item === "number") {
        console.log("binh phuong:", so(item));
    } else if (Array.isArray(item)) {
        console.log("tong:", mangSo(item));
    } else if (typeof item === "string") {
        console.log("chieu dai", chuoi(item));
    } else {
        console.log("khac");
    }
}

kiemTra(5); 
kiemTra([1, 2, 3]);
kiemTra("Hello"); 
kiemTra(true);
