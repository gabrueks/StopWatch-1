import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Stopwatch from './Stopwatch'

import { getClass } from './stopwatch.service'

import facebookURL from './img/facebook.png'
import instagramURL from './img/instagram.png'
import youtubeURL from './img/youtube.png'
import linkedinURL from './img/linkedin.png'
import binahkiFooterURL from './img/binahki-footer.png'
import binahkiHeaderURL from './img/binahki-header.png'

function ClassStopWatches() {
  const [stopwatches, setStopWatches] = useState([])
  const { id = false } = useParams()

  function addStopwatch() {
    setStopWatches([...stopwatches, Stopwatch])
  }

  if (!id) {
    return <h1>Por favor insira o ID da turma.</h1>
  }

  function removeStopwatch(id) {
    setStopWatches(stopwatches.filter((_stopwatch, index) => index !== id))
  }

  return (
    <>
      <header>
        <nav className="navigation">
          <h1 className="titulo">Time Manager</h1>
          <a href="https://mineiroc4.github.io/StopWatch/">
            <div className="title">
              <img src={binahkiHeaderURL} alt="Logo Binahki" className="logo" />
            </div>
          </a>
        </nav>
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Equipe</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </header>
      <div className="add-button">
        {stopwatches.map(function (Stopwatch, index) {
          return (
            <Stopwatch
              removeStopwatch={removeStopwatch}
              index={index}
              key={index.toString()}
            />
          )
        })}
        <button onClick={addStopwatch}>+</button>
      </div>
      <footer className="contato">
        <div
          className="contatos-footer"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row'
          }}
        >
          <a href="https://binahki.com.br/" target="_blank">
            <img
              src={binahkiFooterURL}
              alt="Logo Binahki"
              className="logo-footer"
            />
          </a>
          <div className="contato-binahki" style={{ display: 'flex' }}>
            <p>CNPJ: 36145616000106</p>
            <p>Whats App: (19) 98389-1756</p>
            <p>Email: contato@binahki.com.br</p>
          </div>
          <div>
            <a href="https://www.facebook.com/binahkioficial/" target="_blank">
              <img width={30} height={30} src={facebookURL} alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCukFOT0NVykIcHbwvp6nT_A"
              target="_blank"
            >
              <img width={30} height={30} src={youtubeURL} alt="" />
            </a>
            <a href="https://www.instagram.com/binahki/" target="_blank">
              <img width={30} height={30} src={instagramURL} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/binahki/" target="_blank">
              <img width={30} height={30} src={linkedinURL} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ClassStopWatches
