import { Children, useCallback, cloneElement, isValidElement } from "react"
import { clsx } from "clsx"

import { Td } from "./Td";
import { Tr } from "./Tr";

import Loading from "../Segments/Loading";
import NotFound from "../Segments/NotFound";

export default function TableContainer({
  records,
  children,
  className,
  hideMobile,
  hideDesktop,
  fieldsSection,
  footerData,
  footerDataParse,
  footerDataParseFields,
  isLoading = false,
  header = true,
}) {

  const renderRows = useCallback(() => {
    if (isLoading) {
      const colSpan = Children.count(children)
      return (
        <Tr>
          <Td colSpan={colSpan}>
            <Loading />
          </Td>
        </Tr>
      )
    }
    if (records.length === 0) {
      const colSpan = Children.count(children)
      return (
        <Tr>
          <Td colSpan={colSpan}>
            <NotFound message="Nenhum registro encontrato." />
          </Td>
        </Tr>
      )
    }
    return records.map((record,
      index) => {
      const tds = Children.map(children,
        (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, { record, key: `row_child_${index}` });
          }
          return child;
        })
      return (<Tr key={`row_${index}`}>{tds}</Tr>)
    })
  }, [records, children, isLoading])

  return (
    <div className={"w-full mx-2"}>
      <table className={clsx(
        "w-full mt-4 overflow-x-auto border-2 rounded-md",
        {
          ["max-sm:hidden"]: hideMobile,
          ["sm:hidden"]: hideDesktop,
          ["border-t-gray-400 border-t-[1px]"]: !header
        },
        className
      )}>
        {header && (
          <thead>
            {!!fieldsSection && fieldsSection.length !== 0 && (
              <Tr isHeader>
                {fieldsSection.map(section => <th colSpan={section.colSpan} >{section.label}</th>)}
              </Tr>
            )}
            <Tr isHeader>
              {children}
            </Tr>
          </thead>
        )}

        <tbody>
          {renderRows()}
        </tbody>
        {!!footerData && (
          <tfoot>
            <Tr isHeader>
              {Object.keys(footerData).map(dataKey => <Td>
                {footerDataParse && footerDataParseFields.includes(dataKey) ? footerDataParse(footerData[dataKey]) : footerData[dataKey]}</Td>)}
            </Tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}
