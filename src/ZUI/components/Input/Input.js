import {
  InputContainer,
  LabelUI,
  ErrorMessage,
  InputWrapper,
  HelpMessage,
  IconWrapper,
} from "./Input.style";
import { Icon } from "../Icons";
import { Button } from "../Button";
import { useRef } from "react";

export const Input = (props) => {
  const inputProps = { ...props };
  const inputRef = useRef(null);
  delete inputProps.is_password;
  delete inputProps.error;
  delete inputProps.isPasswordVisible;
  delete inputProps.handleButtonClick;
  delete inputProps.help_text;
  delete inputProps.clearable;
  const inputTypes = ["email", "number", "text", "url", "time", "date", "password"];

  if (!inputTypes.includes(props.type))
    return console.error(
      "Invalid input type, supported types are: email, number, text, url, time, date"
    );

  return (
    <InputContainer>
      {props.label && (
        <LabelUI is_required={props.required}>{props.label}</LabelUI>
      )}
      <InputWrapper
        color={props.color}
        size={props.size}
        variant={props.variant}
        icon={props.icon}
        type={props.type}
        is_password={props.is_password}
      >
        <input
          {...inputProps}
          placeholder={props.placeholder ? props.placeholder : props.label}
          type={props.isPasswordVisible ? "text" : props.type}
          ref={inputRef}
        />
        {props.icon && props.is_password && (
          <Button
            icon={props.icon}
            size={props.size}
            onClick={props.handleButtonClick}
          ></Button>
        )}
        {props.icon && !props.is_password && (
          <IconWrapper>
            <Icon name={props.icon} size={props.size} />
          </IconWrapper>
        )}
      </InputWrapper>
      {props.help_text && <HelpMessage>{props.help_text}</HelpMessage>}
      {props.error && <ErrorMessage>{props.error_message}</ErrorMessage>}
    </InputContainer>
  );
};

Input.defaultProps = {
  type: "text",
  variant: "default",
  color: "gray",
  disabled: false,
  size: "md",
  required: false,
  error: false,
  error_message: "",
  is_password: false,
};
