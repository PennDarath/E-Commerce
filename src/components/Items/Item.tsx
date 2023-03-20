import React from 'react'
import NavbarItems from '../HeaderSection/NavbarItems';
import Title from './Title'


export default function Item({title}: {title: string}) {
  return (
    <> 
    <div className='flex p-2 '>

    <Title title='Feature'/>
    <Title title='Popular'/>
    <Title title='New Added'/>
    </div>
</>
  );
}
