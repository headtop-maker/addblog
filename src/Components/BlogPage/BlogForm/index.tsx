import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getContent } from "../../../store/selectors";
import style from "./BlogForm.module.scss";

interface IProps {

  id: number,
  imgSrc: string,
  imgText: string,
  blogText: string,
  author: string,
  thisDate:string,
  setDeleteId:any,
 
}
const BlogForm: FC<IProps> = (props: IProps) => {
    let {setDeleteId}=props;

  return (
    <>
    <div className={style.wrapper}>
      <div className={style.item1}>
        <img src={props.imgSrc} alt="" />
        <h3>{props.imgText}</h3>
      </div>
      <div className={style.item2}>
      <div className={style.delete} onClick={()=>{}}>Удалить</div>
        <h3>
        {props.blogText}
        </h3>
        <div className={`${style.item_box} ${style.date}`}>{props.thisDate}</div>
        <div className={`${style.item_box} ${style.author}`}>Автор: {props.author}</div>
        <div className={`${style.item_box} ${style.like}`}>
          <img
            src="https://avatanplus.com/files/resources/original/5893fa49929a515a0209af80.png"
            alt=""
          />
          <img
            src="https://www.msche.org/wp-content/uploads/2019/02/kisspng-bluebeam-software-inc-computer-icons-computer-so-comment-5acc483ba835d7.424793771523337275689.png"
            alt=""
          />
        </div>
      </div>
    </div>

    </>
  );
};

export default BlogForm;