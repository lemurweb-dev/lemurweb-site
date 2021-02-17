import React from "react"

import {
  SiReact,
  SiGatsby,
  SiBootstrap,
  SiStrapi,
  SiBulma,
  SiNetlify,
  SiMongodb,
} from "react-icons/si"
import { IoLanguageOutline } from "react-icons/io5"

const StackItem = ({ tech }) => {
  let title = ""
  let description = ""
  let icon = ""

  switch (tech) {
    case "react":
      title = "React"
      description = "Sito web dinamico, interattivo e potente con frontend"
      icon = <SiReact />
      break
    case "gatsby":
      title = "Gatsby"
      description =
        "Sito web super ottimizzato e con tempi di caricamento inesistenti con frontend"
      icon = <SiGatsby />
      break
    case "bootstrap":
      title = "Bootstrap"
      description =
        "Interfaccia responsive su qualsiasi dispositivo con framework"
      icon = <SiBootstrap />
      break
    case "strapi":
      title = "Strapi"
      description =
        "Gestione dei contenuti facile e in completa autonomia con backend e CMS"
      icon = <SiStrapi />
      break
    case "bulma":
      title = "Bulma"
      description =
        "Interfaccia moderna e responsive su qualsiasi dispositivo con framework"
      icon = <SiBulma />
      break
    case "language":
      title = "linguaggio dinamico"
      description = "Internazionalizzazione con"
      icon = <IoLanguageOutline />
      break
    case "netlify-cms":
      title = "Netlify CMS"
      description = "Gestione dei contenuti facile e in completa autonomia con"
      icon = <SiNetlify />
      break
    default:
      break
  }

  return (
    <div className="has-text-light mb-3">
      <span className="mx-2">{icon}</span>
      <span className="is-size-7-mobile has-text-weight-light">
        {description}
        <span className="has-text-weight-normal">{` ${title}`}</span>
      </span>
    </div>
  )
}

export default StackItem
