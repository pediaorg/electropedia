import { Dialog, DialogContent } from "../_shadcn/ui/dialog";

interface Props {
  product: string;
  open: boolean;
  onClose: () => void;
}

export default function ProductSelector({ product, open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#faf6ea]">
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
      </DialogContent>
    </Dialog>
  );
}
