export default function Loading({ message = "Carregando..." }) {
  return (
    <div className="w-full pb-3 pt-3 flex flex-col items-center justify-center">
      <div className="h-[20px] w-[300px] bg-gray-200 rounded-full mb-3 overflow-hidden">
        <div className="relative h-[20px] bg-transparent overflow-hidden">
          <div className="bg-orange absolute top-[0] bottom-[0] left-[0] animate-loadbar1" />
          <div className="bg-orange absolute top-[0] bottom-[0] left-[0] animate-loadbar2" />
        </div>
      </div>
      <span ><h2>{message}</h2></span>
    </div>
  )
}
