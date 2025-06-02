import Logo from "./Logo";

export default function BrandLogo() {
  return (
    <div className="flex gap-3 items-center">
      <Logo />
      <span className="text-2xl font-bold">Electropedia</span>
    </div>
  );
}
