import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/59924607?s=460&u=c4df0415019c7b765e1ae672ba7ebc69986159ac&v=4" alt="filipe" />
        <div>
          <strong>Filipe Dias</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        A bronca é comigo
            <br /> <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$60,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
          </button>
      </footer>
    </article>
  );
}

export default TeacherItem;