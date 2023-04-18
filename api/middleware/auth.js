const { verifyToken } = require("../helper/jwt");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
    try {
        let { access_token } = req.headers;
        if (!access_token) {
            throw { name: "InvalidToken" };
        }
        const userId = verifyToken(access_token);

        const user = await User.findByPk(userId.id);

        if (!user) {
            throw { name: "InvalidToken" };
        }

        req.userLogin = {
            id: user.id,
            username: user.username,
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { authentication }