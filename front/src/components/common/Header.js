import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="section fp-auto-height" id="section0">
      <div className="h950">
        <header id="header">
          <div className="logo">
            {/* a 태그를 쓰지 못하게 하는 리액트는 Link 기능을 사용해야한다 -> 렌더링시 a태그로 전환되어 css,js에 영향 안받음 */}
            <Link to="">smart localfood</Link>
          </div>
          <div className="nav_area">
            <div className="navbar_toggle">
              <Link to="">menu open</Link>
            </div>
            <div className="nav">
              <nav className="nav_hide">
                <div className="inner">
                  <div className="logo">
                    <Link to="">smart localfood</Link>
                  </div>
                </div>
                <div id="gnb">
                  <ul>
                    <li>
                      <a href="#anchor1">스마트로컬푸드 솔루션 미션</a>
                    </li>
                    <li>
                      <a href="#anchor2">스마트로컬푸드 솔루션 비전</a>
                    </li>
                    <li>
                      <a href="#anchor3">사업실적</a>
                    </li>
                    <li>
                      <a href="#anchor4">구축지역</a>
                    </li>
                    <li>
                      <a href="#anchor5">특장점</a>
                    </li>
                    <li>
                      <a href="#anchor6">문의하기</a>
                    </li>
                  </ul>
                </div>
                {/* // gnb */}
              </nav>
            </div>
            {/* // nav */}
          </div>
          {/* // nav_area */}
        </header>
        <div className="box">
          <div className="visual">
            <div>
              <div
                className="visual_img web"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/resources/img/visual/visual_1.png) no-repeat center / cover`, // public 폴더에 접근하기 위한 방법으로 이렇게 안하면 build시 경로 못찾음
                }}
              />
              <div
                className="visual_img m"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/resources/img/visual/m_visual_1.png) no-repeat center / cover`,
                }}
              />
              <div className="visual_cont">
                <p className="tag">스마트로컬푸드 솔루션 미션 하나!</p>
                <p className="text">
                  도농 상생을 통한
                  <br /> 지역 경제 활성화
                </p>
                <p className="text01">
                  행복ICT 스마트로컬푸드 솔루션을 도입한 전국{" "}
                  <strong>41개 매장과 1만여 생산자 분</strong>들과 함께
                  <br /> <strong>3,594억 누적 판매액을 달성</strong>하며 지역
                  사회 균형 발전이라는 사회적 가치 실현에 앞장 서고 있습니다.
                </p>
              </div>
            </div>
            <div>
              <div
                className="visual_img web"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/resources/img/visual/visual_2.png) no-repeat center / cover`,
                }}
              />
              <div
                className="visual_img m"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/resources/img/visual/m_visual_2.png) no-repeat center / cover`,
                }}
              />
              <div className="visual_cont">
                <p className="tag">스마트로컬푸드 솔루션 미션 둘!</p>
                <p className="text">
                  건강한 먹거리
                  <br /> 신선한 지역 생산물
                </p>
                <p className="text01">
                  행복 ict 로컬푸드 솔루션은{" "}
                  <strong>지난 10년간 22만의 회원들</strong>에게 믿고 먹을 수
                  있는
                  <br /> <strong>합리적인 가격의 친환경 농산물</strong>이
                  안정적으로 공급 될 수 있도록 노력하고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="dot">
            <div className="visual_btn">
              <button className="btn_play">정지</button>
            </div>
            <div className="slider-dots-box" />
          </div>
        </div>
        {/* // visual_wrap */}
      </div>
    </div>
  )
}

export default Header
