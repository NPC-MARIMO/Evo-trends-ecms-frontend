import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import '../../index.css'

function ProductDetailsDialog({ productDetails, open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="grid grid-cols-2 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src={productDetails?.image}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
            alt={productDetails?.title}
          />
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-extrabold">{productDetails?.title}</h1>
            <p className="text-zinc-600 mt-3 text-xl mb-5 ">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex mt-3 items-center justify-between">
            <p
              className={`text-3xl font-bold text-primary ${
                productDetails?.salePrice > 0 ? "line-through text-zinc-600" : ""
              }`}
            >
              {" "}
              ${productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className="text-3xl font-bold text-black">
                ${productDetails?.salePrice}
              </p>
            ) : null}
          </div>

          <div className="flex justify-between">
            <p className="text-zinc-600 mt-3 text-xl mb-5 ">
              <span className="text-black font-bold">Category</span> :{" "}
              {productDetails?.category}
            </p>
            <p className="text-zinc-600 mt-3 text-xl mb-5 ">
              <span className="text-black font-bold">Brand</span> :{" "}
              {productDetails?.brand}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0 5">
              <StarIcon className="w-5 h-5 fill-black" />
              <StarIcon className="w-5 h-5 fill-black" />
              <StarIcon className="w-5 h-5 fill-black" />
              <StarIcon className="w-5 h-5 fill-zinc-400 stroke-none" />
              <StarIcon className="w-5 h-5 stroke-none fill-zinc-400" />
            </div>
            <span>(3.5)</span>
          </div>
          <div className=" mt-5 mb-4">
            <Button className="w-full">Add to Cart</Button>
          </div>
          <Separator />
          <div className="max-h-[300px] reviewScrollBar overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Mosshead</h3>
                  </div>
                  <div className="flex items-center gap-0 5">
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 stroke-none fill-zinc-400" />
                  </div>
                  <p className="text-zinc-600">This is an amazing product</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Shivang Pandey</h3>
                  </div>
                  <div className="flex items-center gap-0 5">
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 stroke-none fill-zinc-400" />
                  </div>
                  <p className="text-zinc-600">This is an amazing product</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>Z</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Roronoa Zoro</h3>
                  </div>
                  <div className="flex items-center gap-0 5">
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 fill-black" />
                    <StarIcon className="w-5 h-5 stroke-none fill-zinc-400" />
                    <StarIcon className="w-5 h-5 stroke-none fill-zinc-400" />
                  </div>
                  <p className="text-zinc-600">This product is fine.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 gap-2 p-1 flex">
                <Input placeholder = "Write a review" className="w-full" />
                <Button>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;
