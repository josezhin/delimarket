import React from 'react';

const Order = () => {
  // Función para generar un tiempo aleatorio de entrega
  const getRandomDeliveryTime = () => {
    const minTime = 30; // Tiempo mínimo de entrega en minutos
    const maxTime = 120; // Tiempo máximo de entrega en minutos
    const deliveryTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return deliveryTime;
  };

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6 mx-auto">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Shopping Cart</h2>

      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">Throwback Hip Bag</a>
                  </h3>
                  <p className="ml-4">$90.00</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Salmon</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty 1</p>
              </div>
            </div>
          </li>
          <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">Medium Stuff Satchel</a>
                  </h3>
                  <p className="ml-4">$32.00</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Blue</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty 1</p>
              </div>
            </div>
          </li>

          {/* More products... */}
        </ul>
      </div>

      <div className="border-t border-gray-200 py-6">
        <div className="mt-6 text-center">
          <p className="text-gray-500">Estimated Delivery Time: {getRandomDeliveryTime()} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Order;