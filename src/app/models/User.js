import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            pass: Sequelize.VIRTUAL,
            password: Sequelize.STRING,
        },
        {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if(user.pass){
                user.password = await bcrypt.hash(user.pass,8);
            }
        });

        return this;
    }

    checkPassword(password){
        return bcrypt.compare(password,this.password);
    }

}

export default User;