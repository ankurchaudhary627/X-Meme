import React, { useEffect, useState } from 'react';
import Meme from './Meme';
import { Row, Col, Pagination } from 'antd';
import {
  MEMES_PER_PAGE,
  MIN_RESIZE_WIDTH
} from '../utils/Constants';

import '../css/Memelist.css';

const MemeList = (props) => {
  const { memes, fetchMemes } = props;
  const [pageNumber, setpageNumber] = useState(1);
  const [currMemes, setcurrMemes] = useState([]);
  const [displaySize, setdisplaySize] = useState(false);
  const rowGutter = [16, { xs: 8, sm: 16, md: 24, lg: 32 }];

  const onPageChange = (pageNumber) => {
    setpageNumber(pageNumber);
    const last = pageNumber * MEMES_PER_PAGE;
    const first = last - MEMES_PER_PAGE;
    setcurrMemes(memes.slice(first, last));
    document.documentElement.scrollTop = 0;
  };

  const resize = () => {
    setdisplaySize(window.innerWidth <= MIN_RESIZE_WIDTH);
  }

  useEffect(() => {
    setcurrMemes(memes.slice(0, MEMES_PER_PAGE));
    setpageNumber(1);
    window.addEventListener('resize', resize.bind(this));
    resize();
  }, [memes]);

  return (
    <div className='meme-list'>
      <Row
        gutter={rowGutter}
        justify='center'
        style={{
          display: 'flex', flexDirection: displaySize ? 'column' : ''
        }}>
        {
          currMemes.map((meme, index) => {
            return (
              <Col className='gutter-row' span={6}>
                <Meme
                  meme={meme}
                  index={index}
                  fetchMemes={fetchMemes}
                />
              </Col>
            )
          })
        }
      </Row>
      <Pagination
        current={pageNumber}
        onChange={onPageChange}
        total={(memes.length / MEMES_PER_PAGE) * 10}
      />
    </div>
  );
};

export default MemeList;
