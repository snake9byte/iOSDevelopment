import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { useThemeContext } from "../Theme";
import { DropDownMenuUI, MenuWrapper } from "./DropDownMenu.styles";

const DropDownMenu = ({ children, changeValue, position, close }) => {
  const { theme } = useThemeContext();
  const menuRef = useRef(null);
  const handleKey = (e) => {
    if (e.code === "Space" || e.code === "Enter") changeValue(e);
  };

  useEffect(() => {
    setTimeout(() => menuRef.current.firstChild.focus(), 100);
  }, []);

  return (
    <DropDownMenuUI theme={theme} onClick={() => close(false)} tabIndex="-1">
      <MenuWrapper
        ref={menuRef}
        position={position}
        role="option"
        tabIndex="0"
        aria-selected="true"
        onClick={changeValue}
        onKeyUp={handleKey}
      >
        {children}
      </MenuWrapper>
    </DropDownMenuUI>
  );
};

export const DropDownMenuPortal = (props) => {
  const element = document.createElement("dialog");

  useEffect(() => {
    const body = document.querySelector("body");
    body.appendChild(element);
    element.showModal();

    return () => {
      element.close();
      body.removeChild(element);
    };
  }, [props.status, element]);

  return ReactDOM.createPortal(<DropDownMenu {...props} />, element);
};
