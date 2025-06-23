// app/product/[id]/page.tsx

import Image from "next/image";
import { Search } from "lucide-react";

const product = {
  name: "Condensador Whirlpool",
  price: "$23.00",
  reviews: 15,
  rating: 5,
  img: "https://placehold.co/400x300",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit augue tortor, interdum risus sociosqu fames nullam volutpat cubilia dictum eros, magna pharetra",
};

const similarProducts = [
  {
    name: "Ensamblaje de máquina de hielo del refrigerador-congelador Samsung",
    price: "$104.00",
    rating: 5,
    img: "https://placehold.co/100x100",
  },
  {
    name: "Sensor de temperatura Samsung",
    price: "$11.99",
    rating: 5,
    img: "https://placehold.co/100x100",
  },
  {
    name: "Ventilador Bosch",
    price: "$84.20",
    rating: 5,
    img: "https://placehold.co/100x100",
  },
  {
    name: "Ensamblaje de válvula de agua LG",
    price: "$57.00",
    rating: 5,
    img: "https://placehold.co/100x100",
  },
  {
    name: "Ensamblaje de puerta de heladera Samsung",
    price: "$147.00",
    rating: 5,
    img: "https://placehold.co/100x100",
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto p-4 text-foreground">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Imagen principal */}
        <div className="col-span-1">
          <Image
            src={product.img}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto object-contain border"
          />
        </div>

        {/* Info producto */}
        <div className="col-span-2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 text-sm">
            <div className="text-red-500">{'★'.repeat(product.rating)}</div>
            <p className="text-muted-foreground">{product.reviews} Reviews</p>
          </div>

          <p className="text-xl font-semibold">{product.price}</p>

          {/* Compatibilidad */}
          <div>
            <p className="font-semibold mb-1">Compatibilidad</p>
            <div className="flex items-center gap-2 border rounded px-3 py-2 w-full max-w-md bg-primary-foreground">
              <input
                placeholder="Encuentra tu dispositivo..."
                className="bg-transparent outline-none w-full"
              />
              <Search size={16} />
            </div>
          </div>

          {/* Recomendaciones */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Recomendaciones</p>
            <div className="space-y-2">
              <div className="flex justify-between p-2 border rounded bg-primary-foreground">
                <span>Mercado Libre</span>
                <span>$23.00</span>
              </div>
              <div className="flex justify-between p-2 border rounded bg-primary-foreground">
                <span>Mercado Libre</span>
                <span>$23.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Especificaciones */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Especificaciones</h2>
        <hr className="border-border mb-2" />
        <p className="italic">{product.description}</p>
      </div>

      {/* Productos similares */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Productos similares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {similarProducts.map((p) => (
            <div key={p.name} className="border rounded p-3 bg-primary-foreground text-center">
              <Image
                src={p.img}
                alt={p.name}
                width={100}
                height={100}
                className="mx-auto object-contain"
              />
              <p className="text-sm mt-2 font-semibold">{p.name}</p>
              <div className="text-red-500">{'★'.repeat(p.rating)}</div>
              <p className="font-medium">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
