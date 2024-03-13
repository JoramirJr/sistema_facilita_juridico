import { Th } from "./Th";
import { Td } from "./Td";

export default function TableField({ 
  field,
  label = "",
  parse,
  record,
}) {

  if (record) {
    return (
      <Td>
          <>
            {!!parse ? (
              parse(record[field], record)
            ) : (
              record[field]
            )}
          </>
      </Td>
    )
  }

  return (
    <Th>{label}</Th>
  )
}