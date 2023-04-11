/* eslint-disable no-script-url */
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer_wrap">
      <div className="inner_f">
        <div className="l_logo">
          <Link to="http://happyict.co.kr/" target="_blank" title="새 창 열림">
            <span className="blind">행복ICT 로고</span>
          </Link>
        </div>
        <div className="m_area">
          <Link to="javascript:" data-modal-id="private_pop">
            개인정보취급방침
          </Link>
          <p>
            서울시 성동구 성수일로6길 33, 2층 (성수동2가, 아연디지털타워)
            <br /> ⓒ The Happy ICT Foundation. All rights reserved.
          </p>
        </div>
        <div className="r_logo">
          <ul>
            <li>
              <span className="blind">사회적기업 로고</span>
            </li>
            <li>
              <span className="blind">장애인표준사업장 로고</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
