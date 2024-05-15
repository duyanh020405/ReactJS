interface IPlayer {
    id: number;
    name: string;
    score: number;
}

class Player implements IPlayer {
    id: number;
    name: string;
    score: number;

    constructor(id: number, name: string, score: number=10) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}
 /**

  * hàm thêm mới thông tin player
  * @param newPlayer đối tượng từ cilent
  * Ath : Bui Duy Anh

 */
class PlayerMain {
    players:Player[]=[]
    constructor(){
        const playerLocal = localStorage.getItem("players")
        console.log(playerLocal);
         
        this.players= playerLocal ? JSON.parse(playerLocal) :[]
    }
    // chay thong tin
      renderPlayer(){
        const playerInfo: string[]=this.players.map((player)=>{
            return `
             <tr>
                <td><button class ="deleteBtn" onclick="deletePlayerInfo(${player.id},${player.name})">x</button></td>
                <td>${player.name}</td>
                <td><button onclick="descreaseScore(${player.id})">-</button></td>
                <td>${player.score}</td> 
                <td><button onclick="increaseScore(${player.id})">+</button></td>
            </tr>
            `
        })
       let table=document.querySelector("table");
        if (table) {
              table.innerHTML=playerInfo.join("");
        }
        this.saveToLocalStorage();
     
       }
    // tao ra player
    creatPlayer(item:Player):void{
        this.players.push(item)
        this.saveToLocalStorage();
    }
    tang(id:number){
        // Tìm kiếm vị trí của player trong mảng
        const playerIndex = this.players.findIndex(player=> player.id === id)
        // cập nhật điểm
        if(playerIndex === -1){
            console.log("khong tim thay");
            return
        }
        else{
        this.players[playerIndex].score++;
        }
        this.renderPlayer()
        // Luu
        this.saveToLocalStorage();
    }
    giam(id:number){
         // Tìm kiếm vị trí của player trong mảng
         const index = this.players.findIndex(player =>  player.id === id );
         // cập nhật điểm
         if(index === -1){
             console.log("khong tim thay");
             return
         }
         else{
            if(this.players[index].score <=0){
                alert("liet roi")
            }
            else{
                this.players[index].score--
                this.renderPlayer()
            }
         }
         // Luu
         this.saveToLocalStorage();

    }
    // xoa player
    deletePlayer(id: number, name: string): void {
        const index = this.players.findIndex(player =>  player.id === id && player.name == name );
        if (index !== -1) {
            this.players.splice(index, 1);
            this.saveToLocalStorage();
        } else {
            console.log("Khong tim thay id ");
        }
        this.renderPlayer();
}
// ham tinh tong nguoi choi (player)
totalPlayer():number{
    return this.players.length

}
// ham tinh tong 
totalPoint():number{
    let sum:number = 0
    this.players.forEach((item:Player) => {
        sum+=item.score
        
    }
)
return sum
}
private saveToLocalStorage(): void {
    localStorage.setItem('players', JSON.stringify(this.players));
}
}

// Khởi tạo luu vao Local
let group_Player= new PlayerMain();
group_Player.renderPlayer()
let btnAdd=document.querySelector("#btnAdd");
btnAdd?.addEventListener("click",()=>{
    let input=document.getElementById("input") as HTMLInputElement;

    if(input.value){
        let player=new Player(generateRandomId(),input.value,0)
        group_Player.players.push(player) 
        group_Player.renderPlayer();
    }
    else{
        alert("khonggggggg")
        return
    }
})





// cac ham trien khai
let deleteBtn = document.querySelectorAll(".deleteBtn")
function deletePlayerInfo(id: number,name:string){
    group_Player.deletePlayer(id,name);
}
function increaseScore(id:number){
    group_Player.tang(id);
}
function descreaseScore(id:number){
    group_Player.giam(id);
}



//khởi tạo hàm
function generateRandomId(): number {
    const min = 100000; // 10^5
    const max = 999999; // 10^6 - 1
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
