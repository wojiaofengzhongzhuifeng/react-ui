import * as React from 'react';
import './importIcons'


const Icon = () => {
  return (
    <div>
      <svg>
        <use xlinkHref="#aliyun" />
      </svg>

      <svg>
        <use xlinkHref="#wechat" />
      </svg>
    </div>
  );
};

export default Icon;
