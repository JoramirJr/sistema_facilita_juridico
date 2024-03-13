import ImSearch from "./Icons/ImSearch";
import clsx from  "clsx";

export default function SearchInput({ placeholder, onChange }) {
  return (
    <div className={clsx(
      "bg-white overflow-hidden px-1 h-[30px] min-w-[200px]",
      "border-[1px] border-gray-400 rounded-full",
      "flex flex-row justify-start items-center",
      "text-gray-600 text-xs max-sm:w-full",
    )}>
    <ImSearch />
    <input className="pl-1 h-full w-full" placeholder={placeholder} onChange={e => {
      onChange(e.target.value);
    }} />
    </div>
  );
}
