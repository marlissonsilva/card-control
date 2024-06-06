import "dotenv/config";
import {Request, Response} from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Validate from "../utils/validateUser";

const userController = {
  getAll: async (req: Request, res: Response) => {
    const users = await User.find();
    return res.status(200).send(users);
  },

  create: async (req: any, res: any) => {
    const {error} = Validate.createValidate(req.body);
    if (error) {
      return res.status(400).send(error);
    }

    const selectedUser = await User.findOne({email: req.body.email});
    if (selectedUser) {
      return res.status(400).send("Email já cadastrado");
    }

    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 5),
    });

    try {
      const savedUser = await user.save();
      res.status(200).send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async (req: any, res: any) => {
    const {error} = Validate.loginValidate(req.body);
    if (error) {
      return res.status(400).send(error);
    }

    const selectedUser = await User.findOne({email: req.body.email});
    if (!selectedUser) {
      return res.status(400).send("Email ou senha incorretos");
    }

    const passwordAndUserMatch = bcrypt.compareSync(
      req.body.password,
      selectedUser.password
    );
    if (!passwordAndUserMatch) {
      return res.status(400).send("Email ou senha incorretos");
    }

    const token = jwt.sign(
      {_id: selectedUser._id, email: selectedUser.email},
      process.env.ACCESS_TOKEN_SECRET as "Secret"
    );
    res.status(200).json(token);
  },
};

export default userController;
