const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/ankurchaudhary627/';
const GITHUB_URL = 'https://github.com/ankurchaudhary627';
const PORTFOLIO_URL = 'https://ankurchaudhary627.netlify.app';
const DEFAULT_IMAGE_URL = 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
const NAME_REGEX = '^[A-Za-z]+[\\s,]?[A-Za-z0-9]+$';
const URL_REGEX = '(http(s)?:\/\/)[-a-zA-Z0-9@:%._\+~#=]+(\/).*';
const CAPTION_REGEX = '^[A-Za-z]+[\\s,]?[A-Za-z0-9]+.*$';
const MEMES_PER_PAGE = 8;
const MIN_RESIZE_WIDTH = 760;
const FORM_LAYOUT = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

export {
  BASE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  PORTFOLIO_URL,
  DEFAULT_IMAGE_URL,
  NAME_REGEX,
  CAPTION_REGEX,
  URL_REGEX,
  MEMES_PER_PAGE,
  MIN_RESIZE_WIDTH,
  FORM_LAYOUT
};
