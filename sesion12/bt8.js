"use strict";
class Acount {
    constructor(id, name, pass, isLogin, role) {
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
    constructor(id, name, pass, isLogin, role, status) {
        super(id, name, pass, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            console.log("Cho phép hoạt động");
            this.isLogin = true;
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            this.isLogin = false;
        }
    }
}
class AdminAcc extends Acount {
    constructor(id, name, pass, isLogin, role) {
        super(id, name, pass, isLogin, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng có ID ${user.id} đã bị khóa.`);
    }
}
const user = new UserAcc(1, "john_doe", "password123", false, "user", "active");
const admin = new AdminAcc(2, "admin", "adminpass", true, "admin");
admin.banUser(user);
user.login(); // Kết quả: Tài khoản đã bị khóa
user.logout(); // Kết quả: Bạn không đăng nhập!
