
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import './barranav.css'
export default function BarraNav() {
  return (
    <Navbar fluid rounded className="absolute bg-transparent  absolutely-centered mt-7">
      <NavbarBrand href="">
        <img src="" className="mr-3 h-6 sm:h-9 ms-5 me-5" alt="Logo" />
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className=" bg-white bg_hover_ef text-black me-5">Contactar</Button>
        <NavbarToggle  />
      </div>
      <NavbarCollapse >
        <NavbarLink href="#"  className="text-white mx-7 nav__hover_ef">
          Trámites
        </NavbarLink>
        <NavbarLink href="#" className="text-white mx-7 nav__hover_ef">Fotografías</NavbarLink>
        <NavbarLink href="#" className="text-white mx-7 nav__hover_ef">Servicios Web</NavbarLink>
        <NavbarLink href="#" className="text-white mx-7 nav__hover_ef">Documentos</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
