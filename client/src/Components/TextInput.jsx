export default function TextInput({ placeholder, register }) {
  return (
    <input placeholder={placeholder} className="w-full my-3 p-3 outline-none border-[1px] rounded" {...register} />
  );
}
