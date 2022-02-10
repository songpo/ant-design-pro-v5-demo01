import React from 'react';
import { useIntl } from 'umi';
import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';

export type FormValueType = {
  name: string;
  code: string;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
};

export type CreateFormProps = {
  onCancel: (flag?: boolean) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  createModalVisible: boolean;
  handleModalVisible?: (visible: boolean) => void;
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  useIntl();
  return (
    <ModalForm
      title="新增数据源"
      visible={props.createModalVisible}
      onVisibleChange={props.handleModalVisible}
      onFinish={props.onSubmit}
    >
      <ProForm.Group>
        <ProFormText
          label="名称"
          width="md"
          name="name"
          rules={[{ required: true, message: '请输入数据源名称' }]}
        />
        <ProFormText
          label="编码"
          width="md"
          name="code"
          rules={[{ required: true, message: '请输入数据源编码' }]}
        />
      </ProForm.Group>

      <ProFormSelect
        label="数据库类型"
        width="md"
        name="type"
        valueEnum={{
          0: 'MySQL',
          1: 'SQLServer',
          2: 'Oracle',
          3: 'PostgreSQL',
        }}
        rules={[{ required: true, message: '请选择数据库类型' }]}
      />

      <ProForm.Group>
        <ProFormText
          label="数据库地址"
          width="md"
          name="host"
          rules={[{ required: true, message: '请输入数据库地址' }]}
        />
        <ProFormText
          label="数据库端口"
          width="md"
          name="port"
          rules={[{ required: true, message: '请输入数据库端口' }]}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          label="数据库用户名"
          width="md"
          name="usermame"
          rules={[{ required: true, message: '请输入数据库用户名' }]}
        />
        <ProFormText
          label="数据库密码"
          width="md"
          name="password"
          rules={[{ required: true, message: '请输入数据库密码' }]}
        />
      </ProForm.Group>

      <ProFormText
        label="数据库名称"
        width="md"
        name="database"
        rules={[{ required: true, message: '请选择数据库名称' }]}
      />
    </ModalForm>
  );
};

export default CreateForm;
