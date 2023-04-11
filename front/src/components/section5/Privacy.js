const Privacy = () => {
  return (
    <div id="popview" className="popup private_pop">
      <div className="modal_container">
        <button className="cancel">팝업 닫기</button>
        <div className="modal_contents">
          <div className="inner">
            <div className="cont-privacy">
              <h2>개인정보취급방침</h2>
              <ul className="main">
                <li>
                  <h3>개인정보 수집 및 이용에 대한 안내</h3>
                  <ul className="sub">
                    <li>
                      행복ICT는『정보통신망 이용촉진등에 관한 법률』을 준수하고
                      있습니다.
                    </li>
                    <li>
                      행복ICT의 개인정보보호방침을 통하여 귀하께서 제공하시는
                      개인정보가 어떠한 용도와 방식으로 이용되고 있으며
                      개인정보보호를 위해 어떠한 조치가 취해지고 있는지
                      알려드립니다.
                    </li>
                  </ul>
                </li>
              </ul>
              <ol className="main">
                <li>
                  <h3>1. 개인정보의 수집 및 이용목적</h3>
                  <p>
                    행복ICT는 다음과 같은 목적으로 귀하의 개인정보를
                    수집ㆍ이용하고 있습니다.
                  </p>
                  <ul className="sub">
                    <li>
                      <h4>업무 의뢰, 협업 및 자사의 보유 솔루션에 대한 문의</h4>
                      <ul className="sub_1">
                        <li>
                          - 최적의 서비스를 제공하기 위한 견적, 기간, 방법 등
                          문의에 대한 답변
                        </li>
                        <li>- 잠재 파트너 관리 및 마케팅 활용</li>
                      </ul>
                    </li>
                    <li>
                      <h4>채용 문의</h4>
                      <ul className="sub_1">
                        <li>
                          - 입사를 원하는 이용자의 채용 문의에 대한 정확한 답변
                        </li>
                        <li>- 상시 인력 채용을 위한 인재 풀 유지</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>2. 수집하는 개인 정보의 항목</h3>
                  <ul className="sub">
                    <li>
                      <h4>이름, 회사명</h4>
                      <ul className="sub_1">
                        <li>- 상담 신청자 확인에 이용</li>
                      </ul>
                    </li>
                    <li>
                      <h4>이메일, 연락처</h4>
                      <ul className="sub_1">
                        <li>
                          - 상담 신청 처리 등을 위한 원활한 의사소통 경로 확보
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>문의 카테고리, 문의 내용</h4>
                      <ul className="sub_1">
                        <li>
                          - 최적의 상담 처리를 위한 담당자 연결을 위한 정보
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>3. 개인정보의 보유 및 이용기간</h3>
                  <p>
                    원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당
                    정보를 지체없이 파기합니다. 단, 다음의 정보에 대해서는
                    아래의 이유로 명시한 기간 동안 보존합니다.
                  </p>
                  <p className="last">내부 방침에 의한 정보보유 사유</p>
                  <ul className="sub">
                    <li>
                      <h4>- E-mail</h4>
                      <ul className="sub_1">
                        <li>보존 이유 : 신규서비스 안내 등의 뉴스레터 발송</li>
                        <li>보존 기간 : 메일 수신 거부 시까지</li>
                      </ul>
                    </li>
                    <li>
                      <h4>- 채용정보</h4>
                      <ul className="sub_1">
                        <li>보존 이유 : 회원님의 동의를 통한 인재정보 유지</li>
                        <li>보존 기간 : 회원정보 삭제 요청 시까지</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>4. 개인정보의 파기절차 및 방법</h3>
                  <p>
                    행복ICT는 원칙적으로 개인정보 수집 및 이용목적이 달성된
                    후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은
                    다음과 같습니다.
                  </p>
                  <ul className="sub">
                    <li>
                      <h4>파기절차</h4>
                      <ul className="sub_1">
                        <li>
                          - 업무 의뢰 및 채용 문의를 위해 입력하신 정보는 목적이
                          달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호
                          사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후
                          파기되어집니다.
                        </li>
                        <li>
                          - 동 개인정보는 법률에 의한 경우가 아니고서는
                          보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                        </li>
                        <li>
                          - 개인정보 관리자에게 서면, 전화, e-Mail등으로
                          연락하시면 신속하게 개인정보 삭제 등 필요한 조치를
                          합니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>파기방법</h4>
                      <ul className="sub_1">
                        <li>
                          - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수
                          없는 기술적 방법을 사용하여 삭제합니다.
                        </li>
                        <li>
                          - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
                          통하여 파기합니다.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>5. 개인정보 관리 책임자</h3>
                  <p className="last">
                    귀하께서는 재단법인 행복ICT 홈페이지 서비스를 이용하시며
                    발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자
                    혹은 담당부서로 신고하실 수 있습니다.
                  </p>
                  <p>
                    회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을
                    드릴 것입니다.
                  </p>
                  <p>
                    <strong>
                      경영지원팀 유민경 팀장 / qna.etc@happyict.co.kr
                    </strong>
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
