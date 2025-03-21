import { formartCurrency } from "../helpers"

type AmountDisplayProps = {
  label: string
  amount: number
}
export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <p className="text-2xl text-custom-blue font-medium dark:text-slate-300">
       {label}: {" "}
       <span className="font-bold text-black dark:text-white">{formartCurrency(amount)}</span>
    </p>
  )
}