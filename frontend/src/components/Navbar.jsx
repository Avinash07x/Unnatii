import React, { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import unnatii from "../assets/unnatti.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const navbarRef = useRef(null);

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "PROJECTS", hasDropdown: true },
    { name: "ABOUT US", link: "/about" },
    { name: "GALLERY", link: "/gallery" },
    { name: "CONTACT", link: "/contact" },
  ];

  const projects = [
    { name: "Govindam", link: "/Unnatii-govindam" },
    { name: "Unnatii Enclave", link: "/Unnatii-enclave" },
    { name: "Unnatii Residency", link: "/Unnatii-residency" },
    { name: "Unnatii Shiv Vilas", link: "/Unnatii-shiv-vilas" },
  ];

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <nav ref={navbarRef} className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={unnatii} alt="Unnatii" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Loop menu items */}
            {menuItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={toggleProjects}
                    className="flex items-center text-gray-700 hover:text-black font-medium"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isProjectsOpen && (
                    <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
                      <ul>
                        {projects.map((proj) => (
                          <li
                            key={proj.name}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <Link to={proj.link}>{proj.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-gray-700 hover:text-black font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {menuItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name}>
                <button
                  onClick={toggleProjects}
                  className="flex w-full items-center justify-between text-gray-700 font-medium"
                >
                  {item.name}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isProjectsOpen && (
                  <div className="pl-4">
                    {projects.map((proj) => (
                      <Link
                        key={proj.name}
                        to={proj.link}
                        className="block py-1 hover:text-black cursor-pointer"
                        onClick={() => setIsProjectsOpen(false)}
                      >
                        {proj.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.link}
                className="block py-1 text-gray-700 hover:text-black font-medium"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}




// import React, { useState, useRef } from "react";
// import { Search, Menu, X, ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";
// import unnatii from "../assets/unnatti.png";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedTypology, setSelectedTypology] = useState("Select Typology");
//   const [selectedLocation, setSelectedLocation] = useState("Select Location");
//   const [isTypologyOpen, setIsTypologyOpen] = useState(false);
//   const [isLocationOpen, setIsLocationOpen] = useState(false);
//   const [isProjectsOpen, setIsProjectsOpen] = useState(false);

//   const navbarRef = useRef(null);

//   const typologies = ["Apartment", "Villa", "Plot"];
//   const locations = ["Jaipur", "Ajmer", "Udaipur"];
//   const menuItems = [
//     { name: "HOME", hasDropdown: false , link: "/"},
//     { name: "PROJECTS", hasDropdown: true }, 
//     { name: "ABOUT US", hasDropdown: false, link: "/about" },
//     { name: "GALLERY", hasDropdown: false, link: "/gallery" },
//     { name: "CONTACT", hasDropdown: false, link: "/contact" },

//   ];
//   const dropdownContent = {
//     PROJECTS: [
//       { name: "Govindam", link: "/Unnatii-govindam" },
//       { name: "Unnatii Enclave", link: "/Unnatii-enclave" },
//       { name: "Unnatii Residency", link: "/Unnatii-residency" },
//       { name: "Unnatii Shiv Vilas", link: "/Unnatii-shiv-vilas" },
//     ],
//   };

//   const toggleTypology = () => {
//     setIsTypologyOpen(!isTypologyOpen);
//     setIsLocationOpen(false);
//     setIsProjectsOpen(false);
//   };

//   const toggleLocation = () => {
//     setIsLocationOpen(!isLocationOpen);
//     setIsTypologyOpen(false);
//     setIsProjectsOpen(false);
//   };

//   const toggleProjects = () => {
//     setIsProjectsOpen(!isProjectsOpen);
//     setIsTypologyOpen(false);
//     setIsLocationOpen(false);
//   };

//   return (
//     <nav ref={navbarRef} className="bg-white shadow-md fixed w-full z-50 top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img src={unnatii} alt="Unnatii" className="h-10 w-auto" />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {/* HOME */}
//             <Link to="/" className="text-gray-700 hover:text-black font-medium">
//               HOME
//             </Link>

//             {/* PROJECTS Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={toggleProjects}
//                 className="flex items-center text-gray-700 hover:text-black font-medium"
//               >
//                 PROJECTS
//                 <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//               {isProjectsOpen && (
//                 <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
//                   <ul>
//                     {projects.map((proj) => (
//                       <li
//                         key={proj}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         <Link to={`/projects/${proj.toLowerCase().replace(/\s/g, "-")}`}>
//                           {proj}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Other Links */}
//             {navLinks.map((link) => (
//               <Link
//                 key={link}
//                 to={`/${link.toLowerCase().replace(/\s/g, "")}`}
//                 className="text-gray-700 hover:text-black font-medium"
//               >
//                 {link}
//               </Link>
//             ))}

//             {/* Typology Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={toggleTypology}
//                 className="flex items-center text-gray-700 hover:text-black"
//               >
//                 {selectedTypology}
//                 <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//               {isTypologyOpen && (
//                 <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
//                   <ul>
//                     {typologies.map((type) => (
//                       <li
//                         key={type}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => {
//                           setSelectedTypology(type);
//                           setIsTypologyOpen(false);
//                         }}
//                       >
//                         {type}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Location Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={toggleLocation}
//                 className="flex items-center text-gray-700 hover:text-black"
//               >
//                 {selectedLocation}
//                 <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//               {isLocationOpen && (
//                 <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
//                   <ul>
//                     {locations.map((loc) => (
//                       <li
//                         key={loc}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => {
//                           setSelectedLocation(loc);
//                           setIsLocationOpen(false);
//                         }}
//                       >
//                         {loc}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Search Box */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search properties..."
//                 className="border rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
//               />
//               <Search className="absolute left-3 top-2 w-4 h-4 text-gray-500" />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-black"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
//           <Link to="/" className="block py-1 text-gray-700 hover:text-black font-medium">
//             HOME
//           </Link>

//           {/* Projects Mobile */}
//           <div>
//             <button
//               onClick={toggleProjects}
//               className="flex w-full items-center justify-between text-gray-700 font-medium"
//             >
//               PROJECTS
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>
//             {isProjectsOpen && (
//               <div className="pl-4">
//                 {projects.map((proj) => (
//                   <Link
//                     key={proj}
//                     to={`/projects/${proj.toLowerCase().replace(/\s/g, "-")}`}
//                     className="block py-1 hover:text-black cursor-pointer"
//                     onClick={() => setIsProjectsOpen(false)}
//                   >
//                     {proj}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Other Links Mobile */}
//           {navLinks.map((link) => (
//             <Link
//               key={link}
//               to={`/${link.toLowerCase().replace(/\s/g, "")}`}
//               className="block py-1 text-gray-700 hover:text-black font-medium"
//             >
//               {link}
//             </Link>
//           ))}

//           {/* Typology Mobile */}
//           <div>
//             <button
//               onClick={toggleTypology}
//               className="flex w-full items-center justify-between text-gray-700"
//             >
//               {selectedTypology}
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>
//             {isTypologyOpen && (
//               <div className="pl-4">
//                 {typologies.map((type) => (
//                   <p
//                     key={type}
//                     className="py-1 hover:text-black cursor-pointer"
//                     onClick={() => {
//                       setSelectedTypology(type);
//                       setIsTypologyOpen(false);
//                     }}
//                   >
//                     {type}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Location Mobile */}
//           <div>
//             <button
//               onClick={toggleLocation}
//               className="flex w-full items-center justify-between text-gray-700"
//             >
//               {selectedLocation}
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>
//             {isLocationOpen && (
//               <div className="pl-4">
//                 {locations.map((loc) => (
//                   <p
//                     key={loc}
//                     className="py-1 hover:text-black cursor-pointer"
//                     onClick={() => {
//                       setSelectedLocation(loc);
//                       setIsLocationOpen(false);
//                     }}
//                   >
//                     {loc}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Search Mobile */}
//           <div className="relative mt-2">
//             <input
//               type="text"
//               placeholder="Search properties..."
//               className="border rounded-full pl-10 pr-4 py-1 w-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//             <Search className="absolute left-3 top-2 w-4 h-4 text-gray-500" />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
