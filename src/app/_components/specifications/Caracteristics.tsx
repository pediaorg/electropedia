import Image from "next/image";

export default function Caracteristics() {
  return (
    <div className="DEBUG flex flex-col md:flex-row gap-3">
      <div className="shadow rounded">
        <Image
          src="https://placehold.co/192x256"
          alt="Producto"
          width={192}
          height={256}
        />
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">
            BESPOKE French Door con Family Hub 32" de 699L
          </h2>
          <h3 className="text-lg text-muted-foreground">Heladera Samsung</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Body text for your whole article or post. We'll put in some lorem
          ipsum to show how a filled-out page might look: Excepteur efficient
          emerging, minim veniam anim aute carefully curated Ginza conversation
          exquisite perfect nostrud nisi intricate Content. Qui international
          first-class nulla ut. Punctual adipiscing, essential lovely queen
          tempor eiusmod irure.
        </p>
      </div>
    </div>
  );
}
