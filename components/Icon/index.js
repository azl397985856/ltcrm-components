import React from 'react';

function flat(arg) {

}
export default props => {
  let { type, className = '' } = props;
  className += ` anticon anticon-${type}`;
  return <i className={className} />;
};
