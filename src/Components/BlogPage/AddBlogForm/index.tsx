import React, { FC } from "react";

import style from "./AddBlogForm.module.scss";

interface IProps {
  setImgSrc: any;
  setBlogText: any;
}

const AddBlogForm: FC<IProps> = (props: IProps) => {
  const { setImgSrc, setBlogText } = props;
  let imgSrc = "";
  let blogText = "";

  const isImage = (imgSrc: any) => {
    imgSrc = imgSrc.split(".");
    return !!(
      imgSrc[imgSrc.length - 1] == "jpg" || imgSrc[imgSrc.length - 1] == "jpeg"
    );
  };
  return (
    <>
      <div className={style.wrapper_search}>
        <div className={style.search_box}>
          <form id={style.data} />
          <p>Адрес изображения</p>
          <p>
            <input
              placeholder="Адрес изображения"
              name="img"
              onChange={(e) => {
                imgSrc = e.currentTarget.value;
              }}
            />
          </p>
          <p>Описание</p>
          <p>
            <textarea
              name="text"
              placeholder="Описание"
              onChange={(e) => {
                blogText = e.currentTarget.value;
              }}
            />
          </p>
          <p>
            {" "}
            <button
              onClick={() => {
                if (blogText != "" && imgSrc != "") {
                  if (isImage(imgSrc)) {
                    setImgSrc(imgSrc);
                    if (blogText.length > 80) {
                      setBlogText(`${blogText.substr(0, 80)} ...`);
                    } else {
                      setBlogText(blogText);
                    }
                  } else {
                    alert("Это не картинка (.jpg,jpeg)");
                  }
                } else {
                  alert("Заполните все поля");
                }
              }}>
              Отправить
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default AddBlogForm;
