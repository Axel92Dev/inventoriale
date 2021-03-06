import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Product } from '../types/product';

interface Props {
  product: Product;
}

export const ProductNotification: React.FC<Props> = ({ product }) => (
  <Transition
    show={true}
    appear={true}
    enter="transition transform ease-out duration-500 bottom-0 sticky"
    enterFrom="opacity-0 translate-y-full"
    enterTo="opacity-100 translate-y-0"
  >
    <div className="flex justify-between px-3 py-1 bg-white items-center gap-1 sticky bottom-0">
      <div className="relative w-16 h-16 rounded-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
          <Image className="w-full h-full object-cover rounded-full" src={product.imageSrc} alt="" layout={'fill'} />
        </div>
      </div>
      <div>
        <span className="font-mono">{product.name}</span>
      </div>
      <div className="flex gap-2">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
);
