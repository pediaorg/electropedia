export default function ProductSelector() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center">Productos</h1>
      <p className="text-center text-gray-500 mt-1 mb-1">¿A dónde vamos?</p>
      <hr className="my-2" />
      <div className="flex gap-4 justify-center mt-2">
        <button className="bg-[#cfc7bb] text-2xl font-semibold px-8 py-2 rounded w-40 focus:outline-none">
          Guías
        </button>
        <button className="bg-[#cfc7bb] text-2xl font-semibold px-8 py-2 rounded w-40 focus:outline-none">
          Repuestos
        </button>
      </div>
    </div>
  );
}
