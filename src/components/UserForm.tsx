import { createUser } from '@/actions/actions';
import React from 'react'

const UserForm = () => {
  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";
  return (
    <div>

      <form action={createUser} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <label htmlFor="userName" className={labelCssStyles}>
          User Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={inputCssStyles}
          required
        />
        <label htmlFor="email" className={labelCssStyles}>
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={inputCssStyles}
          required
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default UserForm


