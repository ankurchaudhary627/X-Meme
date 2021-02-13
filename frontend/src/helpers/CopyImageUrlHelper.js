import { message } from 'antd';

export const copyImageUrlHandler = (url) => {
  const el = document.createElement('textarea');
  el.value = url;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  message.success('Copied!');
};