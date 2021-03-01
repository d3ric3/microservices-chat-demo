import bcrypt from "bcryptjs";
import passwordCompareSync from "./passwordCompareSync";

const hashPassword = (password: string) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;
