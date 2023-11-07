import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import Item from "../models/Item.js"
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constant.js";

export const getAllItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get all users
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const addItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // I have to retrieve stuff from the body to put into sign up (like what skills do they want, location etc.)
  try {
    //user signup
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(401).send("user already registered");

    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // create token and store cookie.

    res.clearCookie(COOKIE_NAME, {
      domain: "localhost",
      httpOnly: true,
      signed: true,
      path: "/",
    });

    const token = createToken(user._id.toString(), user.email, "7d");

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    // change domain to the proper frontend.
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    return res.status(201).json({ message: "OK", is: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const findItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user login
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("User not registered");
    }
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect Password");
    }

    res.clearCookie(COOKIE_NAME, {
      domain: "localhost",
      httpOnly: true,
      signed: true,
      path: "/",
    });

    const token = createToken(user._id.toString(), user.email, "7d");

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    // change domain to the proper frontend.
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    return res.status(200).json({ message: "OK", is: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const modifyItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user login
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send("User not registered");
      }
      const isPasswordCorrect = await compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(403).send("Incorrect Password");
      }
  
      res.clearCookie(COOKIE_NAME, {
        domain: "localhost",
        httpOnly: true,
        signed: true,
        path: "/",
      });
  
      const token = createToken(user._id.toString(), user.email, "7d");
  
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      // change domain to the proper frontend.
      res.cookie(COOKIE_NAME, token, {
        path: "/",
        domain: "localhost",
        expires,
        httpOnly: true,
        signed: true,
      });
  
      return res.status(200).json({ message: "OK", is: user._id.toString() });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };
  
export const deleteItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user login
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send("User not registered");
      }
      const isPasswordCorrect = await compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(403).send("Incorrect Password");
      }
  
      res.clearCookie(COOKIE_NAME, {
        domain: "localhost",
        httpOnly: true,
        signed: true,
        path: "/",
      });
  
      const token = createToken(user._id.toString(), user.email, "7d");
  
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      // change domain to the proper frontend.
      res.cookie(COOKIE_NAME, token, {
        path: "/",
        domain: "localhost",
        expires,
        httpOnly: true,
        signed: true,
      });
  
      return res.status(200).json({ message: "OK", is: user._id.toString() });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };