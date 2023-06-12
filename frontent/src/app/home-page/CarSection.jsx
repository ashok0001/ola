import React from 'react';

const CarSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Choose Your Ride</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="car-image-1.jpg" alt="Car 1" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-bold mb-2">Car 1</h3>
            <p className="text-gray-700">Description of Car 1</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="car-image-2.jpg" alt="Car 2" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-bold mb-2">Car 2</h3>
            <p className="text-gray-700">Description of Car 2</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="car-image-3.jpg" alt="Car 3" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-bold mb-2">Car 3</h3>
            <p className="text-gray-700">Description of Car 3</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSection;
