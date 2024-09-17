import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div> 

      <div className=" bg-[#FF7906]  py-2 text-white text-sm">
  <div className=" text-xl lg:pl-36 md:pl-36 sm:pl-20">
    <img src="" alt="" />
    121 King Street,Melbourne       |    example@gmai.com  </div>
</div>

<div className="navbar bg-[#FFFFFF]    py-2 ">
  <button className=" ">
    <img className=" container mx-32 w-32 h-auto py-5" src="https://i.postimg.cc/MGC2vKfp/logo.png" alt="loxicat" />
  </button>

  
  <div className="grid grid-flow-col text-end gap-1 flex-auto container mx-auto pr-40">

  <p className="mx-5">Address</p>
  <p className="mx-5">Email us</p>
  <p className="mx-5">Call Us</p>
  
  </div>

</div>


<div className="  bg-[#F5F5F5]  py-2 "> 
<div className="navbar ">
  <div className="navbar-start">
    


    <div className="container mx-auto font-bold  ">
    <ul className="menu menu-horizontal px-1 ">
    <li>
        <details>
          <summary>Home</summary>
          <ul className="p-2">
            <li><a>Layout 1</a></li>
            <li><a>Layout 2</a></li>
            <ul className="p-2">

            


            <summary>Header Styles</summary>
            <ul className="p-2">
            <li><a>Layout 1</a></li>
            <li><a>Layout 2</a></li>
            

            </ul>

            
            
          </ul>
          </ul>
        </details>
      </li>

      <li>
        <NavLink to={'/about'}>
        About
        </NavLink>
      </li>
      
      <li>
        <details>
          <summary>Page</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Projects</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>News</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  </div>
  
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Navbar