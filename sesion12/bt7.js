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
const userAccount = new UserAcc(1, "john_doe", "password123", false, "user", "active");
// Đăng nhập vào tài khoản
userAccount.login(); // Output: Cho phép hoạt động
// Kiểm tra trạng thái đăng nhập và thực hiện đăng xuất nếu cần
if (userAccount.isLogin) {
    userAccount.logout(); // Output: Đăng xuất thành công
}
// Thử đăng nhập vào một tài khoản bị khóa
const bannedAccount = new UserAcc(2, "banned_user", "bannedpass", false, "user", "banned");
bannedAccount.login(); // Output: Tài khoản đã bị khóa
