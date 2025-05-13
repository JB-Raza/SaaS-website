import React, { useState } from 'react'
import { InputBox, Button, Alert } from '../../universalComponents/index.js'
import { useSelector } from 'react-redux'

import { toast } from 'react-toastify'

export default function AccountDetails() {

  const user = useSelector((state) => state.user.user)

  const [userData, setUserData] = useState({ _id: user?._id, name: user?.name, username: user?.username, email: user?.email, oldPassword: "", newPassword: "" })

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value
    })
  }

  // function to change password
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/auth/${userData._id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(userData)
      })
      const data = await res.json()
      
      if (data.success) toast(<Alert type='success' heading={"Success"} message={data.message} />)
      else toast.error(<Alert type='failure' heading={"Failure"} message={data.message} />)

    } catch (error) {
      toast.error(<Alert type='failure' heading={"Failure"} message={error?.message} />)
    }
  }

  return (
    <div className="col-span-12 md:col-span-9 px-5">

      <form
        onSubmit={handleSubmit}
        className='mx-auto max-w-[600px]'>
        <InputBox
          name={"name"}
          id={"name"}
          value={userData.name}
          placeholder='Your Name'
          label={"Your Name"}
          onChange={handleInputChange}
          readOnly={true}
        />
        <InputBox
          name={"username"}
          id={"username"}
          value={userData.username}
          placeholder='Your Name'
          label={"Your Username"}
          onChange={handleInputChange}
          readOnly={true}
        />
        <InputBox
          name={"email"}
          id={"email"}
          value={userData.email}
          placeholder='Your Email'
          label={"Your Email"}
          onChange={handleInputChange}
          readOnly={true}
        />
        <InputBox
          type='password'
          name={"oldPassword"}
          id={"oldPassword"}
          value={userData.oldPassword}
          placeholder='Enter your old Password'
          label={"Old Password"}
          onChange={handleInputChange}
        />
        <InputBox
          type='password'
          name={"newPassword"}
          id={"newPassword"}
          placeholder='Enter New Password'
          value={userData.newPassword}
          label={"New Password"}
          onChange={handleInputChange}
        />

        <Button
          content={"Submit"}
          bgColor='bg-blue-600'
          hoverBg='bg-[var(--darkIndigo)]'
          className={"w-full"}
        />
      </form>
    </div>
  )
}
