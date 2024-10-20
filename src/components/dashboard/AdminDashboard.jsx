import React from 'react';
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-zinc-900 text-white">
      <Header />
      <h1 className="text-4xl font-semibold mb-6 text-center">Admin Panel</h1>
      <div className="container mx-auto mt-6 max-w-4xl">
        <div className="p-6 bg-zinc-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 text-center">Create a New Task</h2>
          <form action="" className="grid grid-cols-2 gap-8">
            
            {/* Left Side: Task Title, Date, Assign To, Category */}
            <div className="grid grid-cols-1 gap-4">
              {/* Task Title */}
              <div className="flex flex-col">
                <label htmlFor="title" className="text-sm font-medium mb-1">Task Title</label>
                <input 
                  type="text" 
                  id="title" 
                  className="p-2 bg-zinc-700 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Task title"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col">
                <label htmlFor="date" className="text-sm font-medium mb-1">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="p-2 bg-zinc-700 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Assign To */}
              <div className="flex flex-col">
                <label htmlFor="assignTo" className="text-sm font-medium mb-1">Assign To</label>
                <input 
                  type="text" 
                  id="assignTo" 
                  className="p-2 bg-zinc-700 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Employee name"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label htmlFor="category" className="text-sm font-medium mb-1">Category</label>
                <input 
                  type="text" 
                  id="category" 
                  className="p-2 bg-zinc-700 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Design, Dev, etc."
                />
              </div>
            </div>

            {/* Right Side: Description and Create Task Button */}
            <div className="grid grid-cols-1 gap-4">
              {/* Description */}
              <div className="flex flex-col">
                <label htmlFor="description" className="text-sm font-medium mb-1">Description</label>
                <textarea 
                  id="description" 
                  rows="5" 
                  className="p-2 bg-zinc-700 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Task description"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-4">
                <button 
                  type="submit" 
                  className="bg-blue-600 py-1 px-4 text-white  rounded-md hover:bg-blue-700 transition-all text-md font-semibold"
                >
                  Create Task
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
