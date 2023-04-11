/* eslint-disable jsx-a11y/no-distracting-elements */
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const Section1 = () => {
  const data = useContext(DataContext)

  return data ? ( // 여기 조건문 달지 않으면 웹통신하기전에 렌더링 시도해서 없는 값 출력할려고 시도해서 에러 발생 가능성 높음
    <div className="section fp-auto-height" id="section1">
      <div className="h950 a-c">
        <marquee id="marque" scrollamount={20}>
          <img
            src={`${process.env.PUBLIC_URL}/resources/img/content/img_smart.png`}
            alt=""
          />
        </marquee>
        <div className="inner">
          <div className="cont">
            <strong className="tit">스마트로컬푸드 솔루션 비전</strong>
            <p>
              ESG 실현을 위해
              <br /> 전국 <strong>{data.region}개</strong> 매장과 동반성장하고
              있습니다
            </p>
            <span>
              행복ICT 스마트로컬푸드 솔루션은 전국{" "}
              <strong>
                {data.region}개지역, {data.Store}개 매장
              </strong>
              에서 <strong>환경개선과 지역사회 균형 발전</strong>이라는
              <br className="m_non" /> <strong>사회적 가치를 실현</strong> 하며
              함께 성장 하고 있습니다.
            </span>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/resources/img/content/local_img01.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default Section1
