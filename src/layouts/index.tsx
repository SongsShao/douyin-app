import GreenWhite from "@/pages/modules/GreenWhite";
import "./index.less";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useState } from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
window.domtoimage = domtoimage;
window.saveAs = saveAs;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
export default function Layout() {
  const [form] = useForm();
  const [isPublish, changeIsPublish] = useState(false);
  const [data, changeData] = useState({});
  return (
    <div className='navs'>
      {!isPublish ? (
        <div className='form-text'>
          <Form
            form={form}
            {...layout}
            onFinish={(values) => {
              console.log("values", values);
              changeData(values);
              if (!!values?.context) changeIsPublish(true);
            }}>
            <h3 className='h3-text'>生成图片</h3>
            {/* <Form.Item label='标题' name={"title"}>
              <Input></Input>
            </Form.Item> */}
            <Form.Item label='内容' name={"context"}>
              <Input.TextArea style={{ height: "400px" }}></Input.TextArea>
            </Form.Item>
            <Form.Item label='粉丝' name={"name"}>
              <Input></Input>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <GreenWhite data={data} changeIsPublish={changeIsPublish}></GreenWhite>
      )}
    </div>
  );
}
