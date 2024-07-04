
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import './barranav.css'
import logo from '../icon/logo.png'
export default function BarraNav() {
  return (
    <Navbar fluid rounded className="absolute bg-transparent  absolutely-centered mt-7">
      <NavbarBrand href="">
        <img src={logo} className="w-32" alt="Logo" />
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className=" bg-white bg_hover_ef text-black me-5 ">Contactar</Button>
        <NavbarToggle  />
      </div>
      <NavbarCollapse >
        <NavbarLink href="#"  className="text-white mx-7 nav__hover_ef  text-base">
          Trámites
        </NavbarLink>
        <NavbarLink href="#" className="text-white mx-7 nav__hover_ef text-base">Fotografías</NavbarLink>
        <NavbarLink href="#" className="text-white mx-7 nav__hover_ef text-base">Servicios Web</NavbarLink>
        <NavbarLink href="#" className="text-white mx-7 nav__hover_ef text-base">Documentos</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
