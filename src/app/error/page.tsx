import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className="h-content w-full grid place-items-center">
      <div className="text-center container">
        <h1 className="font-bold text-6xl">Error 505</h1>
        <p className="text-2xl font-medium mt-3 mb-6">
          Ha ocurrido un error inesperado, inténtelo nuevamente más tarde.
        </p>
        <Image
          src="https://placehold.co/600x400"
          alt="Imagen de un soldador reparando algo"
          width="600"
          height="400"
          className="mx-auto max-w-screen"
        />
      </div>
    </div>
  );
}
