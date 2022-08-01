/**
 * @author shaosong
 * @description 绿白文案低
 */
import React, { useEffect } from "react";
import "./index.less";
import Title from "@/assets/IMG_1752.JPG";

export class GreenWhiteProps {
  data: any;
  changeIsPublish!: Function;
}
// 过滤掉所有<i>元素
function filter(node) {
  return node.tagName !== "i";
}
const GreenWhite: React.FC<GreenWhiteProps> = (props) => {
  const bodyDiv = document.getElementById("body-text");
  // 转为SVG图片---手动下载 （自动下载调用saveAs(defaultUrl, '自动保存.png'))
  const getSVG = () => {
    const node = document.getElementById("page-green-white");
    window.domtoimage.toJpeg(node, { quality: 0.95 }).then((defaultUrl) => {
      var link = document.createElement("a");
      link.download = "wwwwwwwww.jpeg";
      link.href = defaultUrl;
      link.click();
    });
  };

  return (
    <div id='page-green-white' className='page-green-white'>
      <div className='bg'></div>
      <div className='context'>
        <img className='img' src={Title}></img>
        <div className='title'>
          <span className='text'>樊兮文案</span>
        </div>
        <div
          className='body'
          id='body-text'
          dangerouslySetInnerHTML={{
            __html: String(props?.data?.context).replaceAll("\n", `<br />`),
          }}></div>
        {!!props?.data?.name && (
          <div className='footer'>
            粉丝笔者：<span style={{ color: "red" }}>{props?.data?.name}</span>
          </div>
        )}
      </div>
      <button className='go-back' onClick={() => props?.changeIsPublish(false)}>
        返回
      </button>
      <button onClick={getSVG} className='download'>
        下载图片
      </button>
    </div>
  );
};

GreenWhite.defaultProps = new GreenWhiteProps();
export default GreenWhite;
