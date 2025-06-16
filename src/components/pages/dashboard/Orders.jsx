import { useState, useEffect } from 'react'
import { axiosInstance } from '../../../utils'

import { Modal } from '../../universalComponents/index.js'

export default function Orders() {

  const [orders, setOrders] = useState([])
  const token = localStorage.getItem("userAccessToken")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedOrder, setSelectedOrder] = useState({})

  async function fetchOrders() {
    const { data } = await axiosInstance.get("/orders/getUserOrders", {
      headers: { "Authorization": `Bearer ${token}` }
    })
    setOrders(data.allOrders)
  }

  useEffect(() => {
    fetchOrders()
  }, [])



  return (
    <div className="col-span-12 breakpoint-900:col-span-8 lg:pe-5  mt-10 breakpoint-900:mt-0 overflow-auto">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} orderData={selectedOrder} />

      <table className='w-full border border-neutral-200 !rounded-full'>
        {/* heading rows */}
        <thead>

          <tr className='py-10 border-b border-neutral-200'>
            <th className='text-start px-5 py-5'>Tracking No.</th>

            <th className='text-center px-10 py-5'>Date</th>
            <th className='text-center px-10 py-5'>Status</th>
            <th className='text-center px-10 py-5'>Total Price</th>
          </tr>
        </thead>

        {orders.length == 0 ?
          <tbody>
            <tr className='py-4'>
              <td colSpan={6} className='py-7 text-center border-b border-neutral-200 text-neutral-700'> No Active Orders</td>
            </tr>
          </tbody>
          :
          <tbody>
            {((orders || []).map((order) => (
              <tr key={order._id} className="border-b border-neutral-200">
                <td className="px-5 py-4 line-clamp-1 text-[18px] text-neutral-800 font-medium"> {order.trackingNumber} </td>
                <td className="font-medium text-center text-neutral-800"> {new Date(order.createdAt).toLocaleDateString()}</td>
                <td className={`text-center capitalize ${order.orderStatus == "delivered" ? "text-green-600" : order.orderStatus == "cancelled" ? "text-red-600" : order.orderStatus == "processing" ? "text-amber-500" : order.orderStatus == "on-the-way" ? "bg-blue-600" : "text-purple-700"}`}
                > {order.orderStatus}</td>
                <td className="font-medium text-center text-neutral-800">${Math.floor(order.totalPrice)} / {order.items.length} item(s)</td>
                <td className="font-medium text-center text-neutral-800">
                  <button
                    data-modal-trigger
                    onClick={() => {
                      setIsModalOpen(prev => !prev)
                      setSelectedOrder(order)
                    }}
                    className='border cursor-pointer border-black rounded-full px-4 py-1 hover:bg-black hover:text-white font-medium duration-200'>Details</button>
                </td>
              </tr>
            )))}
          </tbody>
        }
      </table>
    </div>
  )
}
