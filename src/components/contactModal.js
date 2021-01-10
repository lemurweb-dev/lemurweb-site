import React, { useState } from "react"
import Image from "gatsby-image"

import { HiMail } from "react-icons/hi"

import * as emailjs from "emailjs-com"

const ContactModal = ({ showModal, setSentMail }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
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
      "user_kKsgdkD8chyj0ZVlO1vMp"
    )
    resetForm()
    setSentMail(true)
    showModal(false)
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setMessage("")
    setEmailSentMessage("")
    setTimeout(() => setEmailSentMessage(""), 5000)
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Contattami ;)</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => showModal(false)}
          ></button>
        </header>
        <section className="modal-card-body">
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
                  <input type="checkbox" required /> Autorizzo il trattamento
                  dei dati personali secondo la{" "}
                  <a href="https://www.iubenda.com/privacy-policy/66929200">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
            <div className=" is-flex is-justify-content-center mt-5">
              <button
                type="submit"
                className="button is-success is-large"
              >
                <HiMail className="mr-2"/> Invia
              </button>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot"></footer>
      </div>
    </div>
  )
}

export default ContactModal
