import React, { useEffect, useState } from 'react';
import MemeList from './components/MemeList';
import MemeForm from './components/MemeForm';
import {
  Button,
  Layout,
  Empty,
  Space,
  Typography,
  Spin,
  Tooltip
} from 'antd';
import {
  LinkedinFilled,
  GithubFilled,
  GlobalOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import axios from 'axios';
import {
  BASE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL
} from './utils/Constants';
import { openURL } from './helpers/OpenUrlHelper';
import Particles from 'react-particles-js';

import './App.css';

const { Footer } = Layout;
const { Title } = Typography;
const loadingIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

const App = () => {
  const [addMeme, setaddMeme] = useState(false);
  const [memes, setmemes] = useState([]);
  const [loadingMemes, setloadingMemes] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  const fetchMemes = () => {
    setloadingMemes(true);
    axios.get(`${BASE_URL}/memes`)
      .then((res) => {
        if (res.data.length === 0) {
          setisEmpty(true);
        } else {
          setisEmpty(false);
          setmemes(res.data);
        }
      })
      .then(() => setloadingMemes(false))
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
          <Button
            key='add-meme'
            type='primary'
            onClick={() => setaddMeme(true)}
            size={'large'}
          >
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
            isEmpty ?
              <div className='content-empty'>
                <Empty
                  description='No memes here..'
                />
              </div>
              :
              null
          }
          {
            loadingMemes ?
              <Spin indicator={loadingIcon} />
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
                  <LinkedinFilled
                    style={{ fontSize: 48 }}
                    onClick={() => openURL(LINKEDIN_URL)}
                  />
                </Tooltip>
                <Tooltip title='Github'>
                  <GithubFilled
                    style={{ fontSize: 48 }}
                    onClick={() => openURL(GITHUB_URL)}
                  />
                </Tooltip>
                <Tooltip title='Portfolio'>
                  <GlobalOutlined
                    style={{ fontSize: 48 }}
                    onClick={() => openURL(PORTFOLIO_URL)}
                  />
                </Tooltip>
              </Space>
            </div>
            <Title level={5}>
              X-Meme App ©2021 Created by Ankur Chaudhary
            </Title>
          </Footer>
        </div>
      </div>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 10,
              "random": true
            },
            "move": {
              "direction": "bottom",
              "out_mode": "out"
            },
            "line_linked": {
              "enable": false
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "remove"
              }
            },
            "modes": {
              "remove": {
                "particles_nb": 10
              }
            }
          }
        }} />
    </div>
  );
}

export default App;
