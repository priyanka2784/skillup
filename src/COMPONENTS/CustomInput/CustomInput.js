import { useState } from "react";
import "./styles.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function CustomInput({
  type,
  placeholder,
  Icon,
  iconColor,
  isSecureEntry = false,
  inputValue,
  onChangeText,
}) {
  const [showText, setShowText] = useState(false);
  return (
    <div className="customInputBaseContainer">
      <div className="customInputIconcontainer">
        {Icon ? <Icon color={iconColor} size={15} /> : null}
      </div>
      <div className="customInputInputcontainer">
        <input
          value={inputValue}
          type={isSecureEntry ? (showText ? "text" : "password") : type}
          placeholder={placeholder}
          onChange={onChangeText}
        />
      </div>
      {isSecureEntry && (
        <div
          className="customPasswordcontainer"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          {showText ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
