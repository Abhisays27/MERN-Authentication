import asyncHandler from "express-async-handler";
//@desc Auth user/set token
//route POST/api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//@desc Register a new user
//route POST/api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//@desc Logout User
//route POST/api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout User" });
});

//@desc Get user Profile
//route POST/api/users/profile
//@access Private- we need Tokens
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " User Profile" });
});
//@desc Update user Profile
//route PUT/api/users/profile
//@access Private- we need Tokens
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
