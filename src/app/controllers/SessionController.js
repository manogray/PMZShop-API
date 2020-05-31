import User from '../models/User';
import * as Yup from 'yup'

import authConfig from '../../config/authConfig';
import jwt from 'jsonwebtoken';

class SessionController {
    async store(req, res){
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            passwd: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: "data is not valid" });
        }

        const { email, passwd } = req.body;

        const user = await User.findOne({ where: { email } });

        if(!user){
            return res.status(400).json({ error: "email not registered" });
        }

        if(!(await user.checkPassword(passwd))){
            return res.status(401).json({ error: "password is incorrect" });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });

    }
}

export default new SessionController();