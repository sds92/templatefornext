import React from 'react';
/**
 * Handles outside clicks
 */
export function useClickOut(ref, show, cb) {
  const curNode = document.getElementById(`navlg${show.active}`)
  console.log("🚀 ~ file", curNode)
  React.useEffect(() => {
    function handleClickOut(event) {
      console.log('🚀 ref', ref.current, !ref.current.contains(curNode));
      if (ref.current && (!ref.current.contains(event.target) || !ref.current.contains(curNode))) {
        cb();
      }
    }
    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [ref]);
}
