export const InputName = ({
  isMaxFromLimitReachedH,
  charCountFrom,
  id,
  name,
  value,
  onChange,
  maxLength,
  placeholder,
  className = "",
  placeholderColor,
  maxLengthColor,
  from,
  fromColor,
  classNameBG,
}) => {
  return (
    <div className="my-5">
      <label className={`flex float-start text-sm mb-2 ${fromColor}`}>
        {from}
      </label>
      <div
        className={`text-xs mb-2 float-end ${
          isMaxFromLimitReachedH
            ? "text-red-600 font-extrabold"
            : maxLengthColor
        }`}
      >
        {isMaxFromLimitReachedH && (
          <span className="text-red-600">Too long!</span>
        )}{" "}
        {charCountFrom}/15
      </div>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none ${classNameBG} ${placeholderColor} border ${
          isMaxFromLimitReachedH
            ? "border-red-800 text-red-600"
            : "border-gray-300"
        } ${className}`}
      />
    </div>
  );
};
