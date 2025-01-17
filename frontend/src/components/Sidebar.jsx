import { Button } from "@heroui/react";

const Sidebar = () => {
  return (
    <div className="p-4 bg-amber-100 h-screen min-w-[250px]">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">POS System</h1>
      </div>
      <nav>
        <Button className="mb-4 block px-4 py-2 rounded-2xl bg-amber-600 text-white">
          Menu
        </Button>
        <Button className="block px-4 py-2 rounded-2xl bg-gray-200">
          Orders
        </Button>
      </nav>
    </div>
  );
};

export default Sidebar;
