/* eslint-disable no-script-url */
import Section4Item from "./Section4Item"
import Popwrap from "./Popwrap"
import { useEffect, useState } from "react"

const SectionCart = [
  {
    background: "benefit_slide01.png",
    comment: [
      "웹 기반으로 언제 어디서나",
      "장소에 상관없이,",
      "효율적인 매장관리가 가능합니다.",
    ],
    isLink: true,
    LinkId: "slide1",
    Link: "자세히보기",
  },
  {
    background: "benefit_slide02.png",
    comment: [
      "현업(매장 운영자 등) 의견을",
      "반영한 지속적인 업데이트를",
      "진행합니다.",
    ],
    isLink: false,
    LinkId: "slide1",
    Link: "현업 의견을 수렴하고 우선순위에 의거해서 지속 업데이트 진행",
  },
  {
    background: "benefit_slide03.png",
    comment: ["체계적인 생산자 조직화 및", "기획생산을 할 수 있습니다."],
    isLink: true,
    LinkId: "slide2",
    Link: "자세히보기",
  },
  {
    background: "benefit_slide04.png",
    comment: ["프랜차이즈 관리 기능을", "제공합니다."],
    isLink: true,
    LinkId: "slide3",
    Link: "자세히보기",
  },
  {
    background: "benefit_slide05.png",
    comment: [
      "직매장 판매에 최적화된 POS시스템 및",
      "생산자앱을 통한 실시간 판매내역/정산정보",
      "확인이 가능합니다.",
    ],
    isLink: true,
    LinkId: "slide4",
    Link: "자세히보기",
  },
  {
    background: "benefit_slide06.png",
    comment: [
      "생산자 자율 바코드(가격표) 출력,",
      "소비자 구매시 소비쿠폰, 농식품바우처카드,",
      "그린POS시스템을 지원합니다.",
    ],
    isLink: true,
    LinkId: "slide5",
    Link: "자세히보기",
  },
  {
    background: "benefit_slide07.png",
    comment: ["다양한 통계 제공 및", "엑셀로 다운로드가 가능합니다."],
    isLink: true,
    LinkId: "slide6",
    Link: "자세히보기",
  },
]

const Section4 = () => {
  // const [SectionCart, setSectionCart] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:6565/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSectionCart(data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [])

  // console.log(SectionCart)

  return SectionCart ? (
    <div className="section fp-auto-height" id="section4">
      <div className="h950 a-c">
        <div className="inner">
          <strong className="tit">스마트로컬푸드 솔루션 특장점</strong>
          <div className="benefit">
            {SectionCart.map((p) => {
              return <Section4Item SectionCart={p} />
            })}
          </div>
          <div className="btn">
            <button className="" id="" download>
              소개자료다운로드
            </button>
            <button className="pop" id="sys">
              시스템 구성도
            </button>
          </div>
          <Popwrap />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default Section4
