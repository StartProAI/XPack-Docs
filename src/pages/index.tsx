import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    // 当组件加载时，重定向到目标文档页面
    history.push('/docs/overview');
  }, [history]);

  return null; // 因为会重定向，所以不需要返回任何内容
}