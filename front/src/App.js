import { useEffect, useState } from "react"
import Header from "./components/common/Header"
import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"
import PopupStore from "./components/section3/PopupStore"
import Section3 from "./components/section3/Section3"
import Section4 from "./components/section4/Section4"
import Privacy from "./components/section5/Privacy"
import Section5 from "./components/section5/Section5"
import { DataContext } from "./context/DataContext"

function App() {
  const [localData, setLocalData] = useState([])

  useEffect(() => {
    // 각종 수치 백엔드에서 불러오기
    fetch("http://localhost:6565/lowdb/section2")
      .then((response) => response.json())
      .then((data) => {
        setLocalData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    //  데이터 값 컴포넌트 오르락 내리락 할 필요없이 전체 공유하는 기능
    <DataContext.Provider value={localData}>
      <div className="wrap">
        <div className="container">
          <div className="content">
            <div id="fullpage">
              <Header />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
            </div>
          </div>
        </div>
        <PopupStore />
        <Privacy />
      </div>
    </DataContext.Provider>
  )
}

export default App
