import bcrypt from "bcrypt";

export default class Password {
    static encrypt(password: string) {
        const encryptedPassword = bcrypt.hashSync(password, 4);
        return encryptedPassword;
    }

    static toCompare(password: string, encryptedPassword: string) {
        const passwordCompared = bcrypt.compareSync(password, encryptedPassword);
        return passwordCompared;
    }
}