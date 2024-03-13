import { clsx } from "clsx";

export function Tr({ children, onClick, isHeader = false }) {
  return (
    <tr
      onClick={onClick}
      className={clsx("border-b-gray-400 border-b-[1px]", {
        ["bg-gray-200"]: isHeader,
      })}
    >
      {children}
    </tr>
  )
}
