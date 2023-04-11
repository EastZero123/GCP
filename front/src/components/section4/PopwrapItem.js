/* eslint-disable no-script-url */
import React from "react"
import { Link } from "react-router-dom"

const PopwrapItem = (props) => {
  return (
    <div className="pop_cont" id={props.Item.Id}>
      <Link to="javascript:" className="pop_close">
        팝업 닫기
      </Link>
      {props.Item.Image.length > 1 ? (
        <React.Fragment>
          <img
            className="p"
            src={`${process.env.PUBLIC_URL}/resources/img/content/${props.Item.Image[0]}`}
            alt=""
          />
          <img
            className="m"
            src={`${process.env.PUBLIC_URL}/resources/img/content/${props.Item.Image[1]}`}
            alt=""
          />
        </React.Fragment>
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/resources/img/content/${props.Item.Image}`}
          alt=""
        />
      )}
    </div>
  )
}

export default PopwrapItem
