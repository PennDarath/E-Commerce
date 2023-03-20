import React from 'react'
type Props = {
    title: string;
    };
export default function Title({title}: Props) {
  return (
    <div>

        <div className="flex text-size p-3">
          <p>{title}</p>
        </div>
    </div>
  );
}
