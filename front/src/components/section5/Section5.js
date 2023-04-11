import { Link } from "react-router-dom"
import Footer from "../common/Footer"
import { useRef } from "react"

const Section5 = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const unitedRef = useRef()
  const telRef = useRef()
  const categoryRef = useRef()
  const contentRef = useRef()
  const checkRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const nameValue = nameRef.current.value
    const emailValue = emailRef.current.value
    const unitedValue = unitedRef.current.value
    const telValue = telRef.current.value
    const categoryValue = categoryRef.current.value
    const contentValue = contentRef.current.value
    const checkValue = checkRef.current.checked

    console.log(
      `${nameValue}`,
      `${emailValue}`,
      `${unitedValue}`,
      `${telValue}`,
      `${categoryValue}`,
      `${contentValue}`,
      `${checkValue}`
    )

    if (
      nameValue.trim() === "" ||
      emailValue.trim() === "" ||
      unitedValue.trim() === "" ||
      telValue.trim() === "" ||
      categoryValue.trim() === "" ||
      contentValue.trim() === "" ||
      checkValue === false
    ) {
      console.log("빈값이 있습니다")
      return
    }

    // fetch("https://example.com/api/data", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: nameValue,
    //     email: emailValue,
    //     unitedValue: unitedValue,
    //     tel: telValue,
    //     category: categoryValue,
    //     content: contentValue,
    //     check: checkValue,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error))
  }

  return (
    <div className="section fp-auto-height" id="section5">
      <div className="h950">
        <div className="inner">
          <div className="tit">
            <strong>문의하기</strong>
            <p>
              로컬푸드와 관련된 궁금하신 점을
              <br /> 전해주세요.
            </p>
          </div>
          <div className="form">
            <ul>
              <li className="n2">
                <input
                  type="text"
                  name=""
                  id=""
                  title="이름"
                  placeholder="이름"
                  ref={nameRef}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  title="이메일"
                  placeholder="이메일"
                  ref={emailRef}
                />
              </li>
              <li className="n2">
                <input
                  type="text"
                  name=""
                  id=""
                  title="소속"
                  placeholder="소속"
                  ref={unitedRef}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  title="연락처"
                  placeholder="연락처"
                  ref={telRef}
                />
              </li>
              <li>
                <select
                  id=""
                  name=""
                  className="select-m"
                  title="문의 카테고리 선택"
                  ref={categoryRef}
                >
                  <option value="솔루션 신규도입">솔루션 신규도입</option>
                  <option value="솔루션 추가개발">솔루션 추가개발</option>
                  <option value="사업협력 제안">사업협력 제안</option>
                  <option value="기타">기타</option>
                </select>
              </li>
              <li>
                <textarea
                  name=""
                  id=""
                  cols={10}
                  rows={210}
                  title="내용"
                  placeholder="내용"
                  defaultValue={""}
                  ref={contentRef}
                />
              </li>
            </ul>
            <div className="btm">
              <div className="check-privacy">
                <input type="checkbox" id="test" ref={checkRef} />
                <label for="test"></label>
                <p>
                  개인정보 수집 및 이용에 동의하십니까?{" "}
                  <Link to="" data-modal-id="private_pop">
                    더보기&nbsp;&gt;
                  </Link>
                </p>
              </div>
              <button
                type="button"
                name=""
                id=""
                value="보내기"
                onClick={submitHandler}
              >
                보내기
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Section5
