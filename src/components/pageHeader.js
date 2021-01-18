import React from "react"

const PageHeader = ({title, subtitle}) => (
  <section className="hero">
    <div className="hero-body pb-3">
      <div className="container has-text-centered">
        <h1 className="subtitle is-family-secondary is-size-1 has-text-dark">
          {title}
        </h1>
        <h2 className="subtitle has-text-weight-bold is-size-5 has-text-dark">{subtitle}</h2>
      </div>
    </div>
  </section>
)

export default PageHeader