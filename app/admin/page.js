export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="font-semibold">Total Products</h2>
          <p className="text-2xl">12</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="font-semibold">Categories</h2>
          <p className="text-2xl">4</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="font-semibold">Orders</h2>
          <p className="text-2xl">25</p>
        </div>
      </div>
    </div>
  );
}
