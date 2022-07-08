import bcrypt from 'bcrypt';
import dotenv from "dotenv";

dotenv.config({path: "../../"});

class Password{
    // return cypferTxt of passwrd
    static encryptPassword(pswd){
        
        return bcrypt.hashSync(pswd, parseInt (process.env.SALT));

    }

    // return if password is matching return true or false
    static checkPassword(hashedPswd, normalPswd){
        return bcrypt.compareSync(normalPswd,hashedPswd);
    }
}


export default Password;
