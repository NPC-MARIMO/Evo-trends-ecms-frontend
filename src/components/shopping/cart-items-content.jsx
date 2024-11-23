import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";

function UserCartItemsContent({item}) {

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)

    function handleItemUpdate (parameter, action){
        dispatch(updateCartQuantity(
            { 
                userId : user?.id, 
                productId : item?.productId, 
                quantity : action === 'add' ? 
                parameter.quantity + 1 : 
                parameter.quantity -1
                 
            }))
    }
    function handleCartItemDelete (parameter){
        dispatch(deleteCartItem({userId: user?.id, productId: parameter?.productId}))
    }

    return ( 
        <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 rounded object-cover" />
            <div className="flex-1">
                <h3 className="font-extrabold">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <Button 
                    onClick={() => 
                    handleItemUpdate(item, 'sub')} 
                    variant='outline' 
                    className="w-8 h-8 rounded-full" 
                    size='icon'
                    disabled = {item?.quantity === 1}
                    >
                        <Minus className="w-4 h-4" />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <span className="font-semibold">{item.quantity}</span>
                    <Button onClick={() => handleItemUpdate(item, 'add')}  variant='outline' className="w-8 h-8 rounded-full" size='icon'>
                        <Plus className="w-4 h-4" />
                        <span className="sr-only">Decrease</span>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-end ">
                <p className="font-semibold">
                    ${((item.salePrice > 0 ? item.salePrice : item.price) * item.quantity).toFixed(2)}
                </p>
                <Trash onClick={() => handleCartItemDelete(item)} size={25} className="cursor-pointer p-1 text-red-500 rounded-sm border mt-1" />
            </div>
        </div>
     );
}

export default UserCartItemsContent;