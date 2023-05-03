import React from 'react'

type Props = {
    height?: number;
    width?: number;
}

export default function ({width, height}: Props) {
  return (
    <div style={{
        width: width,
        height: height
    }} />
  )
}
