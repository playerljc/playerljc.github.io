import { Button, Form } from 'antd-mobile';
import React from 'react';

import { DateFormatValueHOC, DateModal } from '@baifendian/adhere-mobile-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button
          block
          type="submit"
          color="primary"
          size="middle"
          onClick={() => {
            const values = form?.getFieldsValue();
            alert(JSON.stringify(values));
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item name="birthDay" label="生日" rules={[{ required: true, message: '请选择生日' }]}>
        <DateFormatValueHOC>
          <DateModal
            // precision="week-day"
            locale="en"
            // modalTriggerProps={{
            //   title: 'DateModal',
            // }}
          />
        </DateFormatValueHOC>
      </Form.Item>
    </Form>
  );
};
