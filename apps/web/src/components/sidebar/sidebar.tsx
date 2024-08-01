import NavLinks from '../navlinks';

export default function SideBar() {
  return (
    <div className="grid h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r py-6 bg-muted/40 md:block">
        <NavLinks />
      </div>
    </div>
  );
}
