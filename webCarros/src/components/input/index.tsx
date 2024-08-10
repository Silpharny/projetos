import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

export function Input({
  type,
  name,
  placeholder,
  register,
  error,
  rules,
}: InputProps) {
  return (
    <div>
      <input
        className="w-full border-2 rounded-md h-11 px-2 outline-none"
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  )
}
