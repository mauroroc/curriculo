import React from 'react';
import Link from 'next/link';

const MenuItem = ({ href, label }) => {
  return (
    <li className="inline-block p-4"><Link href={href}><a className="hover:underline">{label}</a></Link></li>
  )
}

const Header = () => {
  return (
    <div>
      <h1 className="inline-block"><Link href='/'><a className="font-mono xl:text-5xl">Mauro Rocha</a></Link></h1>
      <ul className="inline-block">
        <MenuItem href='/perfil' label='Perfil' />
        <MenuItem href='/empresas' label='Empresas' />
        <MenuItem href='/projetos' label='Projetos' />
        <MenuItem href='/artigos' label='Artigos' />
        <MenuItem href='/contato' label='Contato' />
      </ul>
      <ul className="float-right">
        <li className="inline-block px-2 py-4"><img src="img/facebook.png" /></li>
        <li className="inline-block px-2 py-4"><img src="img/linkedin.png" /></li>
      </ul>
    </div>
  );
}

export default Header;