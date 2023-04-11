import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const Section2 = () => {
  const data = useContext(DataContext)

  return data ? ( // 여기 조건문 달지 않으면 웹통신하기전에 렌더링 시도해서 없는 값 출력할려고 시도해서 에러 발생 가능성 높음
    <div className="section fp-auto-height" id="section2">
      <div className="h950 a-c">
        <div className="inner">
          <strong className="tit">
            행복ICT 스마트로컬푸드
            <br className="m_blk" /> 시스템 사업실적
          </strong>
          <div className="walk_area">
            <ul>
              <li>
                <p>구축지역</p>
                <strong className="num num_01">{data.region}</strong>
                <span>개</span>
              </li>
              <li>
                <p>구축 직매장 수</p>
                <strong className="num num_02">{data.Store}</strong>
                <span>개</span>
              </li>
              <li>
                <p>누적 판매액</p>
                <strong className="num num_03">{data.revenue}</strong>
                <span>억원</span>
              </li>
              <li>
                <p>참여 생산자 수</p>
                <strong className="num num_04">{data.CreatorTotal}</strong>
                <span>명</span>
              </li>
              <li>
                <p>참여 회원 수</p>
                <strong className="num num_05">{data.UserTotal}</strong>
                <span>명</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default Section2
