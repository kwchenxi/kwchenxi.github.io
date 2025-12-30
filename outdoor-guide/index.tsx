import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 确保在 DOM 完全加载后再挂载应用
const initializeApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Could not find root element to mount to");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// 如果 DOM 已经加载完成，立即初始化
if (document.readyState === 'loading') {
  // DOM 还在加载中，等待 DOMContentLoaded 事件
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM 已经加载完成，立即初始化
  initializeApp();
}