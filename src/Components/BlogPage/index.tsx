import React, { FC, useEffect, useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../store/addImage/selectors";
// import { addContentAction, userLoginAction } from "../../store/addImage/actions";

// import { getContent, getUserLogin } from "../../store/selectors";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import AddBlogForm from "./AddBlogForm";
import BlogForm from "./BlogForm";
import style from "./BlogPage.module.scss";


 
const BlogPage: FC = () => {
  
  const onStore = useSelector(getContent);

 const postParamToBlogForm = onStore.map((blogParam) => (
    <BlogForm
      id={blogParam.id}
      imgSrc={blogParam.imgSrc}
      imgText={blogParam.imgText}
      blogText={blogParam.blogText}
      author={blogParam.author}
      thisDate={blogParam.thisDate}
      setDeleteId={blogParam.delId}
    />
  ));

  return (
    <>
      <div >
        <Header />
        <AddBlogForm  />
        {postParamToBlogForm}
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;

// let pushToObject = (id: number, imgSrc: any, imgText: string, blogText: any, author: string) => {
//   let obj = {
//     id: id,
//     imgSrc: imgSrc,
//     imgText: imgText,
//     blogText: blogText,
//     author: author
//   }
//   content.push(obj);
// }

// const [items, setItems] = useState<any[]>([]);
// const addMoreItem = () => {
//   setItems(prevItems => [...prevItems, {
//     id: prevItems.length,
//     value:5
//   }]);
//   console.log(items);
// }
// <button onClick ={addMoreItem}>TKNI</button>

// let item = [
//   {index:1, name: 'miraje'},
//   {index:2, name: 'alamin'},
//   {index:3, name: 'behestee'},
//   {index:4, name: 'arif'},
//   {index:5, name: 'riad'}
//   ];

//   item.splice(0, 1)
//   item.forEach((e, i) => e.index = i + 1)
//   console.log(item)

  //////////////////////////// работа с redux
  // const dispatch = useDispatch();
  // dispatch(userLoginAction("ТЫРК"));
  // const login = useSelector(getUserLogin);
  // console.log(login);
  ////////////////////////////

  // const addMoreBlog = (imgSrc: string, blogText: string) => {
  //   if (imgSrc !== "") {
  //     setContent((prevContent) => [
  //       ...prevContent,
  //       {
  //         id: prevContent.length,
  //         imgSrc,
  //         imgText: "Фото дня",
  //         blogText,
  //         author: "Undef",
  //         thisDate,
  //       },
  //     ]);
  //   }
    
  // }; 
   // useEffect(() => { addMoreBlog(imgSrc, blogText)}, [imgSrc, blogText]);
  // useEffect(() => { removeBlog(deleteId); }, [deleteId]);


  // const removeBlog = (deleteId: any) => {
  //   const temp = [...content];
  //   temp.splice(deleteId, 1);
  //   setContent(temp);
  // };

  // console.log(useSelector(getContent));
  // let [imgSrc, setImgSrc] = useState<string>("");
  // let [blogText, setBlogText] = useState<string>("");
  // const [deleteId, setDeleteId] = useState<any>();
  // const [content, setContent] = useState<any[]>([]); //??????