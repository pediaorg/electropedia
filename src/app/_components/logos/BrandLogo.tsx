import Logo from "./Logo";

export default function BrandLogo() {
  return (
    <div className="flex gap-1.5 items-center">
      <Logo />
      <span className="text-2xl font-bold">Electropedia</span>
    </div>
  );
}
