import React, { useState } from 'react';
import { Card, Tooltip, Image } from 'antd';
import MemeForm from './MemeForm';
import { EditTwoTone, CopyTwoTone } from '@ant-design/icons';
import {
  DEFAULT_IMAGE_URL
} from '../utils/Constants';
import { copyImageUrlHandler } from '../helpers/CopyImageUrlHelper';

import 'antd/dist/antd.css';

const { Meta } = Card;

const Meme = (props) => {
  const { meme, fetchMemes } = props;
  const { name, url, caption, id } = meme;
  const [updateMeme, setupdateMeme] = useState(false);

  return (
    <div>
      {
        updateMeme ?
          <MemeForm
            visible={updateMeme}
            title='Update Meme'
            value={name}
            memeId={id}
            disabled={true}
            isUpdate={true}
            onClose={() => setupdateMeme(false)}
            fetchMemes={() => fetchMemes()}
          />
          :
          null
      }
      <Card
        style={{ width: 300 }}
        // hoverable
        cover={
          <Image
            width={300}
            height={300}
            src={url}
            preview={{
              src: url,
            }}
            fallback={DEFAULT_IMAGE_URL}
          />
        }
        actions={[
          <Tooltip title='Edit meme'>
            <EditTwoTone
              key='edit'
              onClick={() => setupdateMeme(true)}
            />
          </Tooltip>,
          <Tooltip title='Copy image URL'>
            <CopyTwoTone key='copy' onClick={() => copyImageUrlHandler(url)} />
          </Tooltip>,
        ]}
      >
        <Meta
          title={caption}
          description={`Posted by: ${name}`}
        />
      </Card>
      <br />
    </div>
  );
};

export default Meme;
