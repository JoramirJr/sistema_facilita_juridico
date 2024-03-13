export function Td({ children, colSpan }) {
  return (
    <td
      colSpan={colSpan}
      className={
        "font-light p-3 text-xs "
      }
    >
      {children}
    </td>
  )
}
