import React, { useState } from "react"
import Image from "gatsby-image"

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
      process.env("GATSBY_EMAILJS_KEY")
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
            <div class="content">
              <form onSubmit={event => handleSubmit(event)}>
                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      required
                      placeholder="..."
                      value={name}
                      onChange={event => setName(event.target.value)}
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      required
                      placeholder="@"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Messaggio</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      required
                      placeholder="..."
                      value={message}
                      onChange={event => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
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
                    <article class="message is-warning">
                      <div class="message-header">
                        <p>{emailSentMessage}</p>
                      </div>
                      <div class="message-body">
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
