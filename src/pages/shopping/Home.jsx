import { Button } from '@/components/ui/button';
import banner1 from '../../assets/banner-1.webp'
import banner2 from '../../assets/banner-2.webp'
import banner3 from '../../assets/banner-3.webp'
import nike from '../../assets/nike.png'
import puma from '../../assets/puma.png'
import adidas from '../../assets/adidas.png'
import handm from '../../assets/handm.svg'
import zara from '../../assets/zara.svg'
import levi from '../../assets/levi.jpg'
import { BabyIcon, ChevronLeftIcon, ChevronRightIcon, Cloud, FootprintsIcon, ShirtIcon, WatchIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts } from '@/store/shop/products-slice';
import ShoppingProductTile from '@/components/shopping/product-tile';
import { useNavigate } from 'react-router-dom';

const categoriesWithIcon = [
    { id: "men", label: "Men" , icon : ShirtIcon },
    { id: "women", label: "Women", icon : Cloud },
    { id: "kids", label: "Kids" , icon :BabyIcon},
    { id: "accessories", label: "Accessories", icon : WatchIcon },
    { id: "footwear", label: "Footwear", icon : FootprintsIcon },
  ]

const brandWithIcon = [
    { id: "nike", label: "Nike" , image : nike },
    { id: "adidas", label: "Adidas" , image : adidas },
    { id: "puma", label: "Puma" , image : puma },
    { id: "levi", label: "Levi's" , image : levi },
    { id: "zara", label: "Zara" , image : zara },
    { id: "h&m", label: "H&M" , image : handm },
]
function ShoppingHome() {

    const slides = [banner1, banner2, banner3]
    const [currentSlide, setCurrentSlide] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {productList} = useSelector(state => state.shopProducts)

    function handleGetProdctDetails() {}

    function handleNavigateToListingPage(item, section) {
        sessionStorage.removeItem("filters")
        const currentFilter = {
            [section] : [item.id]
        }

        sessionStorage.setItem("filters", JSON.stringify(currentFilter))
        navigate(`/shop/listing`)

    }

    function handleAddToCart() {}
    
    useEffect(() => {
        dispatch(fetchAllFilteredProducts({filterParams : {}, sortParams : "price-lowtohigh"}))
    }, [dispatch ])


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer)
    }) 

    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full h-[600px] overflow-hidden" >
            {
                slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index}`}
                        className={`absolute w-full h-full top-0 left-0 object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} `}
                    />
                ))
            }
            <Button 
            onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
            variant = 'outline' 
            size ="icon" 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black"
            >
                <ChevronLeftIcon className="h-4 text-white w-4" />
            </Button>

            <Button 
               onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
               variant = 'outline' size ="icon" 
               className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black"
               >
                <ChevronRightIcon className="h-4 text-white w-4" />
            </Button>
            </div>

            <section className='py-12 bg-gray-50 '>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {
                            categoriesWithIcon.map((item) => (
                                <Card onClick={() => handleNavigateToListingPage(item, 'category')} className="cursor-pointer hover:shadow-lg transition-shadow" key={item.id} >
                                    <CardContent className="flex flex-col items-center justify-center p-6" >
                                    <item.icon className="w-8 h-8 mb-4 text-primary" />

                                        <span className='font-bold'>{item.label}</span>
                                    </CardContent>

                                </Card>
                            ) )
                        }
                    </div>
                </div>

            </section>

            <section className='py-12 bg-gray-50 '>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {
                            brandWithIcon.map((item) => (
                                <Card onClick={() => handleNavigateToListingPage(item, 'brand')} className="cursor-pointer hover:shadow-lg transition-shadow" key={item.id} >
                                    <CardContent className="flex flex-col items-center justify-center p-6" >
                                        <img src={item.image} alt={item.label} className="w-20 h-20" />
                                        <span className='font-bold'>{item.label}</span>
                                    </CardContent>

                                </Card>
                            ) )
                        }
                    </div>
                </div>

            </section>

            <section className='py-12 '>
            <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            productList && productList.length > 0 ?
                            productList.map((item) => (
                                <ShoppingProductTile
                                    handleGetProdctDetails={handleGetProdctDetails}
                                    product={item}
                                    handleAddToCart={handleAddToCart}
                                />
                            ))
                            : null
                         }  
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShoppingHome;