const AuthModel = require("../models/auth.model");
const { loginService } = require("../services/auth.services");

async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const user = await loginService({ email, password })
        res.send({ data: user })
    } catch (error) {
        console.log(error);
        res.send({ message: "Unexpected Error!" })
    }
}

const registerController = async (req, res) => {
    try {
        const { email, password, name, age } = req.body;
        console.log(email, password)

        const user = await AuthModel.create({
            email: email,
            password: password,
            name: name,
            age: age
        })

        res.send({ data: user })
    } catch (error) {
        console.log(error);
        res.send({ message: "Unexpected Error!" })
    }
}

const logoutController = (req, res) => {
    res.send({ data: "logout" })
}


module.exports = {
    loginController,
    registerController,
    logoutController
}