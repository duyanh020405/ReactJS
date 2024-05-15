class Acount {
    id: number;
    name: string;
    pass: string;
    isLogin: boolean;
    role: string;

    constructor(id: number, name: string, pass: string, isLogin: boolean, role: string) {
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.isLogin = isLogin;
        this.role = role;
    }

    logout() {
        if (this.isLogin === true) {
            console.log("Đăng xuất thành công");
        }
    }
}

class UserAcc extends Acount {
    status: string;

    constructor(id: number, name: string, pass: string, isLogin: boolean, role: string, status: string) {
        super(id, name, pass, isLogin, role);
        this.status = status;
    }

    login() {
        if (this.status === "active") {
            console.log("Cho phép hoạt động");
            this.isLogin = true;
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            this.isLogin = false;
        }
    }
}
class AdminAcc extends Acount {
    constructor(id: number, name: string, pass: string, isLogin: boolean, role: string) {
        super(id, name, pass, isLogin, role);
    }

    banUser(user: UserAcc): void {
        user.status = "banned";
        console.log(`Người dùng có ID ${user.id} đã bị khóa.`);
    }
}
const user: UserAcc = new UserAcc(1, "john_doe", "password123", false, "user", "active");
const admin: AdminAcc = new AdminAcc(2, "admin", "adminpass", true, "admin");

admin.banUser(user);
user.login(); // Kết quả: Tài khoản đã bị khóa
user.logout(); // Kết quả: Bạn không đăng nhập!