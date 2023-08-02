import { Check } from "@phosphor-icons/react";

interface Props {
  img?: string;
  alt: string
  description: string
  price: number
}

export function Card(props: Props) {
  return (
    <div className="gap-2 inline-flex my-10 items-center justify-center mx-4 pl-10">
      <div className="flex max-h-[525px] max-w-[430px] flex-col space-y-3 p-10 w-[430px] bg-pretu mx-auto rounded-lg text-white items-center justify-between">
        <div className="max-h-[325px] h-[325px] justify-center">
          <img src={props.img} alt={props.alt} className="" />
        </div>
        <p>{props.description}</p>
        <button className="bg-green-600 w-full rounded-lg flex items-center justify-center p-4 gap-2 hover:bg-green-500 transition-colors">
          <Check size={20} weight="bold" />
          R${props.price}
        </button>
      </div>
    </div>
  )
}