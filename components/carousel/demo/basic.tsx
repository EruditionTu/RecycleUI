import * as React from "react";
import Carousel from "../../carousel";
export default () => {
  const style = { width: "1200px", height: "480px" };
  return (
    <Carousel>
      <img
        style={style}
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90495f43f9a067b47b36c07d0bd2b4ff.jpg?thumb=1&w=1103&h=414&f=webp&q=90"
        alt=""
      />
      <img
        style={style}
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9778fda5f48d1aae93c4747a5274a1a1.jpg?w=2452&h=920"
        alt=""
      />
      <img
        style={style}
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e169482b8cbf7a68daaef1464881446.jpg?thumb=1&w=1103&h=414&f=webp&q=90"
        alt=""
      />
      <img
        style={style}
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1a326a1a5db9d8be9c5767aab1b08c6.jpg?thumb=1&w=1103&h=414&f=webp&q=90"
        alt=""
      />
      <img
        style={style}
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e169482b8cbf7a68daaef1464881446.jpg?thumb=1&w=1103&h=414&f=webp&q=90"
        alt=""
      />
    </Carousel>
  );
};
