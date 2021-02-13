import React, { useEffect, useState } from 'react';
import MemeList from './components/MemeList';
import MemeForm from './components/MemeForm';
import { Button, Layout, Empty, Space, Typography, Tooltip } from 'antd';
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';
import axios from 'axios';
import {
  BASE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL
} from './utils/Constants';
import { openURL } from './helpers/OpenUrlHelper';

import './App.css';

const { Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [addMeme, setaddMeme] = useState(false);
  const [memes, setmemes] = useState([]);

  const fetchMemes = () => {
    axios.get(`${BASE_URL}/memes`)
      .then((res) => {
        setmemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setaddMeme(false);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div>
      <div className='app'>
        <div className='header'>
          <h1>Welcome to X-Meme</h1>
          <Button key='add-meme' type='primary' onClick={() => setaddMeme(true)}>
            Add meme
          </Button>
        </div>
        <div className='content'>
          {
            addMeme ?
              <MemeForm
                visible={addMeme}
                onClose={handleClose}
                fetchMemes={fetchMemes}
                title='Post Meme'
              />
              :
              null
          }
          {
            memes.length === 0 ?
              <div className='content-empty'>
                <Empty
                  description='No memes here..'
                />
              </div>
              :
              <MemeList
                memes={memes}
                fetchMemes={fetchMemes}
              />
          }
        </div>
        <div className='footer'>
          <Footer>
            <div className='footer-links'>
              <Space size='middle'>
                <Tooltip title='Linkedin'>
                  <LinkedinFilled onClick={() => openURL(LINKEDIN_URL)} />
                </Tooltip>
                <Tooltip title='Github'>
                  <GithubFilled onClick={() => openURL(GITHUB_URL)} />
                </Tooltip>
                <Tooltip title='Portfolio'>
                  <MailFilled onClick={() => openURL(PORTFOLIO_URL)} />
                </Tooltip>
              </Space>
            </div>
            <Title level={5}>
              X-Meme App ©2020 Created by Ankur Chaudhary
            </Title>
          </Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
