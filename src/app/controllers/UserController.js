import User from '../models/User';
import * as Yup from 'yup';

class UserController {
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            passwd: Yup.string().required().min(6),
            confirmPasswd: Yup.string().required().when('passwd', (passwd, field) =>
                passwd ? field.oneOf([Yup.ref('passwd')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({ error: "data is not valid" });
        }

        const user = await User.findOne({ where: { email: req.body.email } });

        if(user){
            return res.status(400).json({ error: "email is already in use" });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email
        })
    }
}

export default new UserController();