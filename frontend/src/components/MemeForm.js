import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import axios from 'axios';
import {
  BASE_URL,
  NAME_REGEX,
  URL_REGEX,
  CAPTION_REGEX,
  FORM_LAYOUT
} from '../utils/Constants';

const MemeForm = (props) => {
  const { visible, onClose, fetchMemes, title, isUpdate, disabled, value, memeId } = props;
  const [confirmLoading, setconfirmLoading] = useState(false);
  const [name, setname] = useState('');
  const [url, seturl] = useState('');
  const [caption, setcaption] = useState('');

  const handleCancel = () => {
    onClose();
  };

  let footerActions = [
    <Button key='back' onClick={handleCancel}>
      Cancel
    </Button>
  ];

  const handlePost = async () => {
    const validName = name && name.match(NAME_REGEX);
    const validURL = url && url.match(URL_REGEX);
    const validCaption = caption && caption.match(CAPTION_REGEX);
    if (validName && validURL && validCaption) {
      setconfirmLoading(true);
      await axios
        .post(`${BASE_URL}/memes`, {
          name: name,
          url: url,
          caption: caption,
        })
        .then(async (res) => {
          message.success('Meme created!');
          await new Promise((resolve) => setTimeout(resolve, 1000));
          onClose();
        })
        .then(() => {
          fetchMemes();
        })
        .catch((err) => {
          message.error('Meme already exists!');
          setconfirmLoading(false);
        });
      setconfirmLoading(false);
    }
    if (!name) {
      message.warning('Name cannot be empty');
    } else if (!validName) {
      message.error('Invalid name');
    }
    if (!url) {
      message.warning('Url cannot be empty');
    } else if (!validURL) {
      message.error('Invalid url');
    }
    if (!caption) {
      message.warning('Caption cannot be empty');
    } else if (!validCaption) {
      message.error('Invalid caption');
    }
  };

  const handleUpdateMeme = async () => {
    const validURL = url.match(URL_REGEX);
    const validCaption = caption.match(CAPTION_REGEX);

    if ((validURL && validCaption) || (validURL && !caption) || (!url && validCaption)) {
      const updateParams = {};
      if (validURL) {
        updateParams['url'] = url;
      }
      if (validCaption) {
        updateParams['caption'] = caption;
      }
      setconfirmLoading(true);
      await axios
        .patch(`${BASE_URL}/memes/${memeId}`, updateParams)
        .then(async (res) => {
          message.success('Meme updated!');
          await new Promise((resolve) => setTimeout(resolve, 1000));
        })
        .then(() => {
          fetchMemes();
          onClose();
        })
        .catch((err) => {
          message.error('Meme already exists!');
          setconfirmLoading(false);
        });
      setconfirmLoading(false);
    }
    if (!url && !caption) {
      message.warning('Fill atleast one field');
    } else if (url && !validURL) {
      message.error('Invalid url');
    }
    if (caption && !validCaption) {
      message.error('Invalid caption');
    }
  }

  if (isUpdate) {
    footerActions.push(
      <Button
        key='submit'
        type='primary'
        loading={confirmLoading}
        onClick={handleUpdateMeme}
      >
        Save
      </Button>
    );
  } else {
    footerActions.push(
      <Button
        key='submit'
        type='primary'
        loading={confirmLoading}
        onClick={handlePost}
      >
        Post
      </Button>
    );
  }

  return (
    <Modal
      title={title}
      visible={visible}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={footerActions}
    >
      <Form {...FORM_LAYOUT}>
        <Form.Item label='Name'>
          <Input
            placeholder='Name'
            onChange={(e) => setname(e.target.value)}
            value={value}
            disabled={disabled}
          />
        </Form.Item>
        <Form.Item label='URL'>
          <Input
            placeholder='URL'
            onChange={(e) => seturl(e.target.value)}
          />
        </Form.Item>
        <Form.Item label='Caption'>
          <Input
            placeholder='Caption'
            onChange={(e) => setcaption(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MemeForm;
