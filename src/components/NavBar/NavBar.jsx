import logo from '../../assets/logo.svg';

import "./index.css";


const ListItem = (link = "/", title) => {
  return (
    <li className='ListItem'>
      <a className='ListItem__link' href={link}>{title}</a>
    </li>
  )
}

const NavBar = () => {
  const linkList = [
    {
      id: 1,
      title: "Home",
      url: "#",
    },
    {
      id: 2,
      title: "About",
      url: "#",
    },
    {
      id: 3,
      title: "Contacts",
      url: "#",
    }
  ];

  return (
    <div className="NavBar">
      <img className="NavBar__img" src={logo} alt="logo" />
      <ul className="NavBar__list">
     {/* {
        linkList.map(link => <ListItem title={link.title} link={link.url} key={link.id}/>)
      
     } */}
      </ul>
    </div>
  );
};

export default NavBar;
