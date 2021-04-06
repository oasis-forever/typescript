"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const UserAccount = class {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
};
exports.UserAccount = UserAccount;
const user = new UserAccount(1, "User1");
console.log(`ID: ${user.id}, Name: ${user.name}`);
//# sourceMappingURL=user_account.js.map