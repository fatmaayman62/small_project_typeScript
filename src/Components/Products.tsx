import img1 from '../assets/phone-01.jpg';
import img2 from '../assets/phone-02.jpg';
import img3 from '../assets/phone-03.png';
import img4 from '../assets/phone-04.jpg';
import img5 from '../assets/phone-05.jpg';
import img6 from '../assets/phone-06.jpg';
import img7 from '../assets/phone-07.jpg';
import img8 from '../assets/phone-08.jpg';
import img9 from '../assets/phone-09.jpg';
import img10 from '../assets/phone-10.png'; 
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
interface Product{
    id:number;
    name:string;
    price:number|string;
    img:string
}
function Products() {
    const Collections:Product[]=[
        {
            id:0,
            name:'Iphone 1',
            price:'1000 EGP',
            img:img1
        },
        {
            id:1,
            name:'Iphone 2',
            price:'2000 EGP',
            img:img2
        },
        {
            id:2,
            name:'Iphone 3',
            price:'15000 EGP',
            img:img3
        },
        {
            id:3,
            name:'Iphone 4',
            price:'15000 EGP',
            img:img4
        },
        {
            id:4,
            name:'Iphone 5',
            price:'12000 EGP',
            img:img5
        },
        {
            id:5,
            name:'Iphone 6',
            price:'15000 EGP',
            img:img6
        },
        {
            id:6,
            name:'Iphone 7',
            price:'15000 EGP',
            img:img7
        },
        {
            id:7,
            name:'Iphone 8',
            price:'12000 EGP',
            img:img8
        },
        {
            id:8,
            name:'Iphone 9',
            price:'12000 EGP',
            img:img9
        },
        {
            id:9,
            name:'Iphone 10',
            price:'12000 EGP',
            img:img10
        },
    ]
 

  return (
    <div className='sm:container my-4'>
        <header>
            <h2 className='text-4xl font-bold'>Products</h2>
            <p className='w-[80px] my-0.5 rounded-2xl h-1 bg-gradient-to-r from-orange-500 to-red-500'></p>
            <p className='w-[50px] my-0.5 rounded-2xl h-1 bg-gradient-to-r from-orange-500 to-red-500'></p>
        </header>
        <section className='my-4 flex flex-wrap'>
            {
                Collections.length!=0&&Collections?.map(item=><div key={item.id} className="lg:w-1/3 md:w-1/2 w-full  p-2" >
            <div className="rounded-2xl border border-gray-200 shadow duration-75 hover:cursor-pointer hover:border-orange-400 p-4">
                <figure className='h-70'><img src={item?.img} className='w-full h-full object-contain' alt="" /></figure>
                <div className="my-2">
                    <h3 className='text-2xl font-bold'>{item?.name}</h3>
                    <p className='font-medium my-0.5'>{item?.price}</p>
                </div>
                <div className="my-2 flex justify-between items-center">
                    <FaHeart className='text-red-500' />
                    <IoCart className='text-orange-400 text-xl' />
                </div>

            </div>
            </div>)
          
            }


        </section>
        



    </div>
  )
}

export default Products
