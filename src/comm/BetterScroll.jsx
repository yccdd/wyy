/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useRef, useEffect } from 'react';
import BScroll from '@better-scroll/core';
// eslint-disable-next-line import/no-unresolved
import { debounce } from 'loadsh';

export default function BetterScroll(props) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { refresh } = new BScroll(wrapperRef.current, props.config ?? {});
    const resizeFn = debounce(refresh, 300);
    window.addEventListener('resize', resizeFn);
    return () => {
      window.removeEventListener('resize', resizeFn);
    };
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  }, [props.config, props.children]);
  return (
    <div
      ref={wrapperRef}
      style={{
        overflow: 'hidden',
        height: '300px',
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        ...(props.wrapperStyle ?? {}),
      }}
    >
      <div style={{ ...(props.contentStyle ?? {}) }}>{props.children}</div>
    </div>
  );
}
