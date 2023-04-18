const { User } = require("../models/index");
const { compare } = require("../helper/bcryptjs");
const { createToken } = require("../helper/jwt");

class Controller {
    static async registerUser(req, res, next) {
        try {
            await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });

            res.status(201).json({ message: "Account has been created" });
        } catch (err) {
            next(err);
        }
    }
    static async loginUser(req, res, next) {
        try {
            let { email, password } = req.body;

            if (!email || !password) {
                throw { name: "badRequest" };
            }

            let user = await User.findOne({ where: { email } });

            if (!user) {
                throw { name: "Unauthorized" };
            } else {
                let compareResult = compare(password, user.password);

                if (!compareResult) {
                    throw { name: "Unauthorized" };
                } else {
                    const { id } = user;
                    let token = createToken({
                        id,
                    });

                    res
                        .status(200)
                        .json({ access_token: token, username: user.username });
                }
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller;
