import React from 'react'
import NavbarItems from '../HeaderSection/NavbarItems';
import Title from './Title'
import ItemCard from './ItemCard';

const Data = [{
  brand: 'nike',
  image: '/images/anime6-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 330,
  discount: 25
},
{
  brand: 'puma',
  image: '/images/chainsaw2-removebg.png',
  description: 'Pluto T-Shirts',
  price: 76,
  discount: 20,
},
{
  brand: 'adidas',
  image: '/images/anime7-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 209,
  discount: 30
},
{
  brand: 'bata',
  image: '/images/anime4-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 59,
  discount: 89
},
{
  brand: 'bata',
  image: '/images/chainsaw-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 59,
  discount: 89
},
{
  brand: 'bata',
  image: '/images/new3-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 59,
  discount: 89
},
{
  brand: 'bata',
  image: '/images/new2-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 59,
  discount: 89
},
{
  brand: 'bata',
  image: '/images/new-removebg-preview.png',
  description: 'Cartoon Asrtronaut T-Shirts',
  price: 59,
  discount: 89
},
]

export default function Item() {
  return (
    <div className='width-padding pb-52'>
      <div className='flex '>
        <Title title='Feature' />
        <Title title='Popular' />
        <Title title='New' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {Data.map((item, index) => (
          <ItemCard brand={item.brand} description={item.description} discount={item.discount} image={item.image} price={item.price} />
        ))}
      </div>

    </div>
  );
}
