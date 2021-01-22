import React from "react"

import {
  SiReact,
  SiGatsby,
  SiBootstrap,
  SiStrapi,
  SiBulma,
  SiMongodb,
} from "react-icons/si"

const StackItem = ({ tech }) => {
  let title = ""
  let description = ""
  let icon = ""

  switch (tech) {
    case "react":
      title = "React"
      description =
        "Sito web dinamico, interattivo e potente con frontend React"
      icon = <SiReact />
      break
    case "gatsby":
      title = "Gatsby"
      description =
        "Sito web super ottimizzato e con tempi di caricamento inesistenti con frontend Gatsby"
      icon = <SiGatsby />
      break
    case "bootstrap":
      title = "Bootstrap"
      description = "Interfaccia responsive su qualsiasi dispositivo"
      icon = <SiBootstrap />
      break
    case "strapi":
      title = "Strapi"
      description =
        "Gestione dei contenuti del sito facile e in completa autonomia con backend e CMS Strapi"
      icon = <SiStrapi />
      break
    case "bulma":
      title = "Bulma"
      description = "Interfaccia moderna e responsive su qualsiasi dispositivo"
      icon = <SiBulma />
      break
    default:
      break
  }

  return (
    <div className="has-text-light mb-3">
      <span className="mx-2">{icon}</span>
      <span className="is-size-7-mobile ">{description}</span>
    </div>
  )
}

export default StackItem
