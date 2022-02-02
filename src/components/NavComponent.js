import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../scss/nav.scss';
import Logo from '../../src/logo.svg';
export default function NavComponent() {
    const [activeMenu, setActiveMenu] = useState('');
    const menus = [
        {key: '', title: 'Dashboard'},
        {key: 'swap', title: 'Swap'},
        {key: 'staking', title: 'Staking'},
        {key: 'ai-scanner', title: 'AI Scanner'},
        {key: 'ai-tracker', title: 'AI Tracker'},
        {key: 'ai-trader', title: 'AI Trader'},
    ];

    const menusTemplate = menus.map((item) => {
        return (
            <li className={item.key === activeMenu ? 'active' : ''} key={item.key} onClick={() => {setActiveMenu(item.key)}}>
                <Link to={`/${item.key}`} className='nav-link text-white'>
                    {item.title}
                </Link>
            </li>
        );
    });
    return (
        <Fragment>
            <div className='nav-wrapper px-4 py-2'>
                <div className="header-menu justify-content-lg-start">
                    <Link to="/" className="col-lg-4 d-flex text-decoration-none" onClick={() => {setActiveMenu('')}}>
                        <img src={Logo} style={{width: '160px'}} alt="dark-logo"/>
                    </Link>
                    <ul className="nav col-sm-12 col-lg-6 mb-2 d-flex align-items-center justify-content-between mb-md-0 p-2">
                        {menusTemplate}
                    </ul>

                    <div className="dropdown" style={{paddingLeft: '10px'}}>
                        <i className="text-white bi bi-three-dots-vertical" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: '24px'}}>
                        </i>
                        <ul className="dropdown-menu main-bg" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li>
                            <Link className="dropdown-item text-white" to="/" target="_blank">Docs</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item text-white" to="/" target="_blank">Audit</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item text-white" to="/" target="_blank">Github</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}