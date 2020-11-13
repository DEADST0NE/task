import React, { useState, FC } from 'react';
import { Input } from 'antd';
import { UserOutlined, DownloadOutlined } from '@ant-design/icons';

import './UploadFileAvatar.scss';

const UploadFileAvatar: FC<{ initial?: File }> = ({ initial = null }) => {

  const [file, setFile] = useState(initial);
  console.log(file);
  return (
    <div className="upload-file-avatar">
      <label htmlFor="img" className={file ? 'p-0' : ''}>
        {!file ? <UserOutlined />  : <img src={URL.createObjectURL(file)} alt="avatar"/>}
        <span className="download-file">
          <DownloadOutlined />
        </span>
      </label>
      <Input id="img" type="file" name="avatar" className="d-none" onChange={ (el) => el.target.files && setFile(el.target.files[0])}/>
    </div> 
  )
}

export default UploadFileAvatar