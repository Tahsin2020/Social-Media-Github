import { Router } from "express";
import {
  getAllPrivateProfiles,
  privateprofileLogin,
  privateprofileLogout,
  privateprofileSignup,
  verifyPrivateProfile,
} from "../controllers/private-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const privateRoutes = Router();

privateRoutes.get("/", getAllPrivateProfiles);
// Should I delete the above route?
privateRoutes.post("/signup", validate(signupValidator), privateprofileSignup);
privateRoutes.post("/login", validate(loginValidator), privateprofileLogin);
privateRoutes.get("/auth-status", verifyToken, verifyPrivateProfile);
privateRoutes.get("/logout", verifyToken, privateprofileLogout);

export default privateRoutes;
