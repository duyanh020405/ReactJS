type Personhihi = [name: string, age: number];

type Address = {
    street: string;
    city: string;
}
type Information = Address & { person: Personhihi };
const duyAnh: Information = {
    person: ["Duy Anh", 18],
    street: "Thái Bình",
    city: "Thái Bình"
};
console.log(duyAnh);
