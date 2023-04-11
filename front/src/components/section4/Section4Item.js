/* eslint-disable no-script-url */
import React from "react"
import { Link } from "react-router-dom"

const Section4Item = (props) => {
  return (
    <div>
      <div
        className="cont"
        style={{
          background: `url(${process.env.PUBLIC_URL}/resources/img/content/${props.SectionCart.background}) no-repeat center / cover`,
        }}
      >
        <strong>
          {props.SectionCart.comment.map((idx) => {
            return (
              <React.Fragment>
                {idx}
                <br />
              </React.Fragment>
            )
          })}
        </strong>
        {props.SectionCart.isLink ? (
          <Link
            to="javascript:"
            className="pop view"
            id={props.SectionCart.LinkId}
          >
            <span>{props.SectionCart.Link}</span>
          </Link>
        ) : (
          <p>{props.SectionCart.Link}</p>
        )}
      </div>
    </div>
  )
}

export default Section4Item
