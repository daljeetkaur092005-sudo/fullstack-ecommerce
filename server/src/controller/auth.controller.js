import authModel from "../models/auth.model.js";
import { generateToken, verifyRefreshToken } from "../utils/auth.utils.js";
import bcrypt from "bcryptjs";
export const registerController = async (req, res) => {
  const { email, password, name } = req.body;
  const isExist = await authModel.findOne({ email });
  if (isExist) {
    return res.status(400).json({
      message: "user already exist",
      errors: [
        {
          field: "email",
          message: "email is already exist",
        },
      ],
    });
  }
  const user = await authModel.create({
    email,
    passwordHash: await bcrypt.hash(password, 10),
    name
  });

  const { accessToken, refreshToken } = generateToken({
    userId: user._id,
    role: "user",
  });
  await authModel.findByIdAndUpdate(user._id, {
    refreshToken,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  return res.status(201).json({
    message: "user created successfully",
    data: {
      user: {
        email: user.email,
        name: user.name,
      },
      accessToken,
    },
  });
};

export const loginController = async (req, res) => {
  const { password, email } = req.body;
  const user = await authModel.findOne({ email });
  

  if (!user) {
    return res.status(404).json({
      message: "email and password is wrong",
    });
  }
 

  const isPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isPassword) {
    return res.status(404).json({
      message: "email and password is wrong",
    });
  }

  const { accessToken, refreshToken } = generateToken({
    userId: user._id,
    role: "user",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  await authModel.findOneAndUpdate(
    { email },
    {
      refreshToken,
    },
  );

  return res.status(200).json({
    message: "user logged in successfully",
    data: {
      user: {
        email: user.email,
        name: user.name,
        userId: user._id,
      },
      accessToken,
    },
  });
};

export const currentUserController = async (req, res) => {
  const { userId, role } = req.user;
  const user = await authModel.findById(userId);
  return res.status(200).json({
    message: "user get successfully",
    data: {
      user: {
        email: user.email,
        name: user.name,
        userId: user._id,
      },
    },
  });
};

export const refreshController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
  try {
    const { userId, role } = verifyRefreshToken(refreshToken);
    const user = await authModel.findById(userId);
    if (refreshToken != user.refreshToken) {
      await authModel.findByIdAndUpdate(userId, {
        refreshToken: null,
      });
      return res.status(401).json({
        message: "invalid refresh token",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateToken({
      userId: user._id,
      role: "user",
    });
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });
    return res.status(200).json({
      message: "refresh token created successfully",
      accessToken,
    });
  } catch (err) {
    return res.status(401).json({
      message: "unauthorized user or invalid user",
    });
  }
};
