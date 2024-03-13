
export function Th({ children, colSpan }) {
  return (
    <th colSpan={colSpan} className="font-light p-3 text-xs text-left">
      {children}
    </th>
  )
}
