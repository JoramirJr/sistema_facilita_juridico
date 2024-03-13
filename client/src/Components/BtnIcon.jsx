import { clsx } from "clsx"
import { Link } from "react-router-dom";

export default function BtnIcon() {
  return (
    <Link className="m-2 bg-[#003399] shadow-sm rounded-full" to={"/new"} >
      <span className={clsx(
        "p-2",
        "flex justify-center items-center text-md p-2",
      )}>
        <svg stroke="#fff" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4">
        </path>
        </svg>
      </span>
    </Link>
  )
}

