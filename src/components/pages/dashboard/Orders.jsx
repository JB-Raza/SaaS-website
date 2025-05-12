import React, {useState} from 'react'
export default function Orders() {
      // const [cartItems, setCartItems] = useState(samplecartItems)
  
  return (
    <div className="col-span-12 lg:col-span-8 lg:pe-5 overflow-auto">
      <table className='w-full border border-neutral-200 !rounded-full'>
        {/* heading rows */}
        <thead>

          <tr className='py-10 border-b border-neutral-200'>
            <th className='text-start px-5 py-5'>Order ID</th>
            <th className='text-center py-5'>Title</th>

            <th className='text-center px-10 py-5'>Date</th>
            <th className='text-center px-10 py-5'>Status</th>
            <th className='text-center px-10 py-5'>Total</th>
          </tr>
        </thead>

        <tbody>

          {/* data rows */}
          {((samplecartItems || []).map((product) => (
            <tr key={product.id} className=" border-b border-neutral-200">
              <td className=" px-5 py-4 text-[18px] text-neutral-800 font-medium"> {product.id+"12asdv"} </td>
              <td className="font-medium text-center text-neutral-800"> {product.name}</td>
              <td className="font-medium text-center text-neutral-800"> {product.date}</td>
              <td className={`text-center capitalize ${product.status == "delivered"? "text-green-600":"text-red-600"}`}> {product.status}</td>
              <td className="font-medium text-center text-neutral-800"> ${product.price * product.quantity} / {product.quantity} items</td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  )
}


const samplecartItems = [
    { id: 0, name: "Apple Watch", date: "22 August 2021", price: 120, quantity: 13,status: "delivered" },
    { id: 1, name: "samsung handset", date: "22 August 2021", price: 112, quantity: 3,status: "delivered" },
    { id: 2, name: "Tata brand car", date: "22 August 2021", price: 102, quantity: 1,status: "on the way" },
    { id: 3, name: "Ear Buds Audionic", date: "22 August 2021", price: 102, quantity: 1,status: "on the way" },
]