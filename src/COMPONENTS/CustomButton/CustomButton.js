import "./styles.css";
function CustomButton({ backgroundColor, color, title, onClick }) {
  return (
    <div
      className="CustomButtonBaseContainer"
      style={{ backgroundColor, color }}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
export default CustomButton;
