import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"



import { MdBuild, MdExplore, MdRemoveRedEye } from "react-icons/md"

const Header = ({ logo }) => (
  <section id="header" className="hero is-large">
    
    {/* <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://lemurweb.dev">
              <Image fixed={logo} />
            </a>
            <span className="navbar-burger" data-target="lemurnav">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="lemurnav" className="navbar-menu"></div>
        </div>
      </nav>
    </div> */}

    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="container has-text-centered is-family-secondary">
          <h1 className="mb-6 subtitle is-size-2-touch is-size-1-desktop has-text-primary-light is-unselectable">
            Il web è una <span className="has-text-secondary">giungla</span>!
          </h1>
          <h2 className="subtitle is-size-5-touch is-size-3-desktop has-text-secondary is-unselectable">
            Il <span className="has-text-primary-light">lemure digitale</span>{" "}
            può aiutarti a trovare la strada
          </h2>
        </div>
      </div>
    </div>

    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="">
              <AnchorLink to="/#portfolio">Portfolio</AnchorLink>
            </li>
            <li>
            <AnchorLink to="/#contact">Contatti</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  // <section id="header" className="hero is-dark is-large">
  //   {/* <div className="hero-head">
  //     <nav
  //       className="navbar is-fixed-top is-primary"
  //       role="navigation"
  //       aria-label="main navigation"
  //     >
  //       <div className="navbar-brand">
  //         <a className="navbar-item" href="https://lemurweb.dev">
  //           <Image fixed={logo} />
  //         </a>

  //         <a
  //           role="button"
  //           className="navbar-burger"
  //           aria-label="menu"
  //           aria-expanded="false"
  //           data-target="lemurnav"
  //         >
  //           <span aria-hidden="true"></span>
  //           <span aria-hidden="true"></span>
  //           <span aria-hidden="true"></span>
  //         </a>
  //       </div>

  //       <div id="lemurnav" className="navbar-menu">
  //         <div className="navbar-end">
  //           <Link className="navbar-item">Home</Link>
  //         </div>
  //       </div>
  //     </nav>
  //   </div> */}
  //   <div className="hero-body">
  //     <Background />
  //     <div className="container has-text-centered is-family-secondary">
  //       <h1 className="mb-6 subtitle is-size-2-touch is-size-1-desktop has-text-primary-light is-unselectable">
  //         Il web è una <span className="has-text-secondary">giungla</span>!
  //       </h1>
  //       <h2 className="subtitle is-size-5-touch is-size-3-desktop has-text-secondary is-unselectable">
  //         Il <span className="has-text-primary-light">lemure digitale</span> può
  //         aiutarti a trovare la strada
  //       </h2>
  //     </div>
  //   </div>
  //   <div className="hero-foot">
  //     <nav className="tabs is-boxed is-fullwidth">
  //       <div className="container">
  //         <ul>
  //           <li className="">
  //             <AnchorLink to="/#watch" className="is-flex-direction-column p-0">
  //               <div className="has-text-centered">
  //                 <MdRemoveRedEye />
  //               </div>
  //               <div className="is-size-7-mobile">Orientiamoci</div>
  //             </AnchorLink>
  //           </li>
  //           <li>
  //             <AnchorLink to="/#watch" className="is-flex-direction-column p-0">
  //               <div className="has-text-centered">
  //                 <MdExplore />
  //               </div>
  //               <div className="is-size-7-mobile">Esploriamo</div>
  //             </AnchorLink>
  //           </li>
  //           {/* <li>
  //             <AnchorLink to="/#watch" className="is-flex-direction-column p-0">
  //               <div className="has-text-centered">
  //                 <MdBuild />
  //               </div>
  //               <div className="is-size-7-mobile">Costruiamo</div>
  //             </AnchorLink>
  //           </li> */}
  //         </ul>
  //       </div>
  //     </nav>
  //   </div>
  // </section>
)

export default Header
