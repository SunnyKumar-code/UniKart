import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';

const CollectionPage = () => {
    const [products, setProduct] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)

    const toggleSidebar=()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }
   
   const handleClickOutside=(e)=>{
        //Close sidebar if clicked Outside
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSidebarOpen(false)
        }
    }
    useEffect(()=>{
        //add Event listener for clicks
        document.addEventListener("mousedown",handleClickOutside);
        //clean event listener
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    },[])
  



    useEffect(() => {
        setTimeout(() => {
            const fetchedProduct = [
                {
                    _id: 1,
                    name: "Product1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=1" }]
                },
                {
                    _id: 2,
                    name: "Product2",
                    price: 120,
                    images: [{ url: "https://picsum.photos/500/500?random=2" }]
                },
                {
                    _id: 3,
                    name: "Product3",
                    price: 150,
                    images: [{ url: "https://picsum.photos/500/500?random=3" }]
                },
                {
                    _id: 4,
                    name: "Product4",
                    price: 90,
                    images: [{ url: "https://picsum.photos/500/500?random=4" }]
                },
                {
                    _id: 5,
                    name: "Product5",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=5" }]
                },
                {
                    _id: 6,
                    name: "Product6",
                    price: 120,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }]
                },
                {
                    _id: 7,
                    name: "Product7",
                    price: 150,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }]
                },
                {
                    _id: 8,
                    name: "Product8",
                    price: 90,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }]
                },

            ];

            setProduct(fetchedProduct)
        }, 1000)
    }, [])

    return (
        <div className='flex flex-col lg:flex-row'>
            {/*Mobile Filter Button */}
            <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2'/>Filters
            </button>
            {/*Filter Sidebar */}
            <div 
            ref={sidebarRef} 
            className={`${isSidebarOpen?"translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 `}>
                <FilterSidebar/>
            </div>
        </div>
    )
}

export default CollectionPage