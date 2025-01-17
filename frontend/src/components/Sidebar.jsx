const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-200 h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">POS System</h1>
      </div>
      <nav>
        <button className="mb-4 block px-4 py-2 rounded bg-green-500 text-white">
          Menu
        </button>
        <button className="block px-4 py-2 rounded bg-gray-200">Orders</button>
      </nav>
    </div>
  );
};

export default Sidebar;
