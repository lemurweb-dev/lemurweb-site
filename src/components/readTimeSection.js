import React from "react"

const ReadTimeSection = ({ time, setIsCountingReadTime }) => (
  <section id="read-time" className="hero mt-6 is-medium">
    <div className="hero-body my-6">
      <div className="container">
         <div className="columns is-mobile is-gapless is-vcentered is-centered">
            <div className="column is-narrow is-size-1">{`{`}</div>
            <div className="column has-text-centered is-narrow mx-4">
              <div className="heading mb-0">Grazie per aver dedicato</div>
              <div
                className="title my-3 is-clickable"
                onClick={() =>
                  setIsCountingReadTime(
                    isCountingReadTime => !isCountingReadTime
                  )
                }
              >
                {time}
              </div>
              <div className="heading">
                alla lettura della mia landing page!
              </div>
            </div>
            <div className="column is-narrow is-size-1">{`}`}</div>
         </div>

      </div>
    </div>
  </section>
)

export default ReadTimeSection
