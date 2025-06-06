export const ButtonUtils = ({
  label,
  onClick,
  className = "",
  icon,
  disabled = false,
  bgColor = "bg-white",
  textColor = "text-black",
  hoverColor = "transition-colors",
  size = " max-md:text-xs text-md",
  font = "",
  disableColors = "",
  padding = "py-4 px-3",
}) => {
  return (
    <button
      className={`flex justify-center cursor-pointer gap-2 ${padding} font-bold  transition-all ${bgColor} ${textColor} ${font} ${hoverColor} ${className} rounded-xl ${disableColors} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};
