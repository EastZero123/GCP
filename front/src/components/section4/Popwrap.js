/* eslint-disable no-script-url */
import PopwrapItem from "./PopwrapItem"

const PopList = [
  {
    Id: "pop_sys",
    Image: ["pop_sys.svg"],
  },
  {
    Id: "pop_slide1",
    Image: ["pop_02.svg", "m_pop02.png"],
  },
  {
    Id: "pop_slide2",
    Image: ["pop_02.svg", "m_pop02.png"],
  },
  {
    Id: "pop_slide3",
    Image: ["pop_03.svg", "m_pop03.png"],
  },
  {
    Id: "pop_slide4",
    Image: ["pop_04.svg", "m_pop04.png"],
  },
  {
    Id: "pop_slide5",
    Image: ["pop_05.svg", "m_pop01.png"],
  },
  {
    Id: "pop_slide6",
    Image: ["pop_06.svg", "m_pop01.png"],
  },
]

const Popwrap = () => {
  return (
    <div className="popwrap">
      {PopList.map((p) => {
        return <PopwrapItem Item={p} />
      })}
    </div>
  )
}

export default Popwrap
