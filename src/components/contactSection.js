import React, { useState } from "react"

import { HiMail } from "react-icons/hi"

import * as emailjs from "emailjs-com"

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [emailSentMessage, setEmailSentMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    let templateParams = {
      from_name: name + ": (" + email + ")",
      to_name: "service_gmail",
      message: message,
      reply_to: email,
    }
    emailjs.send(
      "service_gmail",
      "template_lemur",
      templateParams,
      process.env.GATSBY_EMAILJS_KEY
    )
    resetForm()
  }

  const resetForm = () => {
    setEmailSentMessage(`Grazie per avermi contattato ${name}! ;)`)
    setName("")
    setEmail("")
    setMessage("")
    setPrivacyAccepted(false)
    setTimeout(() => setEmailSentMessage(""), 10000)
  }

  return (
    <section id="contact" className="section">
      <div className="container is-max-desktop">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <form onSubmit={event => handleSubmit(event)}>
                <div className="field">
                  <label className="label">Nome</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      required
                      placeholder="..."
                      value={name}
                      onChange={event => setName(event.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      required
                      placeholder="@"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Messaggio</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      required
                      placeholder="..."
                      value={message}
                      onChange={event => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        required
                        checked={privacyAccepted}
                        onChange={event => setPrivacyAccepted(!privacyAccepted)}
                      />{" "}
                      Autorizzo il trattamento dei dati personali secondo la{" "}
                      <a href="https://www.iubenda.com/privacy-policy/66929200">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
                <div className=" is-flex is-justify-content-center mt-5">
                  {emailSentMessage && emailSentMessage.length > 0 && (
                    <article className="message is-warning">
                      <div className="message-header">
                        <p>{emailSentMessage}</p>
                      </div>
                      <div className="message-body">
                        Sarai ricontattato al più presto
                      </div>
                    </article>
                  )}
                  {(!emailSentMessage || emailSentMessage.length === 0) && (
                    <button type="submit" className="button is-success">
                      <HiMail className="mr-2" /> Invia
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
