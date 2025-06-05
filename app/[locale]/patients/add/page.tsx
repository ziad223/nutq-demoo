import React from 'react';


interface LayoutProps {
    params: Promise<{ locale: string | any }>;
  }

const page = async ({ params }: LayoutProps) => {
    const { locale } = await params;

 
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-center text-[#09adce] mb-6">Patient Form</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Nationality</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Gender</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Age</label>
                    <input
                        type="number"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Civil Number</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Paid Bills</label>
                    <input
                        type="text"                        
                        className="w-full border border-green-300 rounded-md outline-none text-black px-4 py-2 bg-green-50"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Unpaid Bills</label>
                    <input
                        type="text"                        
                        className="w-full border border-red-300 rounded-md outline-none text-black px-4 py-2 bg-red-50"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Last Visit</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1 opacity-0">Last Visit</label>

                    <button  
                     className="bg-[#09adce] text-white px-6 py-2 rounded-md hover:bg-blue-400 w-full"

                    >
                        Add Patient
                    </button>
                </div>
                
            </form>
        </div>
    );
};

export default page;
