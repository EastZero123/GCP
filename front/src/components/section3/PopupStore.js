const PopupStore = () => {
  return (
    <div id="popview" className="popup store_pop">
      <div className="modal_container">
        <button className="cancel">팝업 닫기</button>
        <div className="modal_contents">
          <img src="" alt="" />
          <div className="inner">
            <table cellPadding={0} cellSpacing={0}>
              <colgroup>
                <col width="25%" />
                <col width="75%" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">구축지역</th>
                  <td className="pop_1" />
                </tr>
                <tr>
                  <th scope="row">직매장명</th>
                  <td className="pop_2" />
                </tr>
                <tr>
                  <th scope="row">주소</th>
                  <td className="pop_3" />
                </tr>
                <tr>
                  <th scope="row">솔루션운영현황</th>
                  <td className="pop_4" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupStore
