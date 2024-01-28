import "./SectionTitle.css"

export type TTitle = {
  title: string
  desc: string
}
const SectionTitle = ({ title, desc }: TTitle) => {
  return (
    <div>
      <div className="text-white w-full sm:max-w-[600px] mx-auto text-center ">
        <h2 className=" serviceTitle">{title} </h2>
        <p className="text-[18px]">{desc}</p>
      </div>
    </div>
  )
}

export default SectionTitle
