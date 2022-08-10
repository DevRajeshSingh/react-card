import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../context/dataContext";

const Card = (props) => {
  const {
    deleteItem,
    moveItem,
    categories,
    seteditItemInfo,
    selectedItem,
    setselectedItem,
  } = useContext(DataContext);

  return (
    <div className="card">
      <img src={props.item.Poster} alt={props.item.Title} />
      <div className="card-body">
        <h2>{props.item.Title}</h2>
        <p>{props.item.Desc}</p>
        <Link to={`/view/${props.item.linkId}`} className="btn-coloured">
          View
        </Link>
        <div className="card-actions">
          <div className="select-action">
            <input
              type="checkbox"
              className="chb chb-1"
              id={`${props.item.id}-${props.item.category}`}
              onChange={(e) => {
                setselectedItem(e.target.checked ? [...selectedItem, props.item] : selectedItem.filter((item) => item.id !== props.item.id));
              }}
            />
            <label
              className="action-label"
              htmlFor={`${props.item.id}-${props.item.category}`}
            >
              Select
            </label>
          </div>

          <div className="card-action-icons">
            <div
              className="move-action card-actions-item"
              onClick={() => {
                document
                  .getElementById(`${props.item.category}${props.item.id}`)
                  .classList.toggle("flex-active");
              }}
            >
              <svg
                aria-hidden="true"
                role="img"
                width="20px"
                height="20px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4a1 1 0 0 0 .8.4a1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2Zm16 7H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21a1 1 0 0 0 .79-.39a1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2Z"
                />
              </svg>
            </div>

            <div className="edit-action card-actions-item">
              <Link
                to={"/edit"}
                className="edit-link"
                onClick={() => {
                  seteditItemInfo(props.item);
                }}
              >
                <svg
                  aria-hidden="true"
                  role="img"
                  width="20px"
                  height="20px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M33.87 8.32L28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0l8.29-1.9l20.78-20.76a2.07 2.07 0 0 0 0-2.92ZM12.09 30.2l-7.77 1.63l1.77-7.62L21.66 8.7l6 6ZM29 13.25l-6-6l3.48-3.46l5.9 6Z"
                    className="clr-i-outline clr-i-outline-path-1"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              </Link>
            </div>

            <div
              className="delete-action card-actions-item"
              onClick={() => {
                deleteItem(props.item.category, props.item.id);
              }}
            >
              <svg
                aria-hidden="true"
                role="img"
                width="20px"
                height="20px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="move-actions-main"
          id={`${props.item.category}${props.item.id}`}
        >
          {categories.map((category) => {
            return (
              category !== props.item.category && (
                <div
                  className="move-action-item"
                  key={category}
                  onClick={() => {
                    moveItem(props.item.category, category, props.item.id);
                  }}
                >
                  Move to <span>{category}</span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
