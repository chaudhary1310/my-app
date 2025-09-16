export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar for admin */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
        <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li><a href="/admin/products" className="hover:text-gray-300">Products</a></li>
          <li><a href="/admin/categories" className="hover:text-gray-300">Categories</a></li>
          <li><a href="/admin/orders" className="hover:text-gray-300">Orders</a></li>
        </ul>
      </aside>

      {/* Admin page content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
