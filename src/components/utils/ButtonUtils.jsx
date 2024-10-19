export const ButtonUtils = ({
  label,
  onClick,
  className = "",
  icon,
  disabled = false,
  bgColor = "bg-white",
  textColor = "text-black",
  hoverColor = "transition-colors",
  size = " max-sm:text-xs text-md",
  font = "",
  disableColors = "",
}) => {
  return (
    <button
      className={`flex flex-row items-center justify-center cursor-pointer gap-2 py-4 px-3 font-bold  transition-all ${bgColor} ${textColor} ${font} ${hoverColor} ${className} rounded-xl ${disableColors} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};
