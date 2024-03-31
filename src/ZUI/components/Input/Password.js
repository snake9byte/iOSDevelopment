import { Input } from "./Input";
import { useState } from "react";

export const Password = props => {
  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
  const handleClick = () => setIsPasswordVisible(!isPasswordVisible);
  return (
  <Input {...props} handleButtonClick={handleClick} isPasswordVisible={isPasswordVisible} />
)};

Password.defaultProps = {
  icon: "secure",
  is_password: true,
  type: "password",
}