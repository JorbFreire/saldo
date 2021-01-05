import { useState } from 'react';

import logo from '../../assets/logo.svg';

import arrow from '../../assets/icons/arrow.svg'
import copy from '../../assets/icons/copy.svg';
import eye from '../../assets/icons/eye.svg';
import searchIcon from '../../assets/icons/search.svg';

import message from '../../assets/icons/message.svg';
import calendar from '../../assets/icons/calendar.svg';
import bell from '../../assets/icons/bell.svg';

import './styles.css';

export default function Header() {
  const [ search, setSearch ] = useState('');
  return (
    <header className='mainHeader'>
      <div className="info">
        <img
          className='logo'
          alt='DualBank'
          src={logo}
        />

        <div className='divider' />

        <section className="account">
          <div>
            <p className='title'>Conta Corrente</p>
            <img
              className='arrow'
              alt='open something'
              src={arrow}
            />
          </div>

          <div>
            <p className='agency'>Ag. 00005-1</p>
            <p className='number'>C.C. 00000000000000000020-1</p>
            <img
              className='copy'
              alt='copy'
              src={copy}
            />
          </div>
        </section>

        <section className="balance">
          <div className="label">
            <p>Saldo</p>
            <img
              alt='hide balance'
              src={eye}
            />
          </div>

          <p className='money'> R$40.0000,00 </p>
        </section>
      </div>

      <div className="utils">
        <form
          className="inputBox"
          onSubmit={e => {
            e.preventDefault();
            alert(`pesquisando por "${search}"`)
          }}
        >
          <input
            id='search'
            type="text"
            placeholder='Pesquisar'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <label htmlFor="search">
            <img src={searchIcon} alt={search}/>
          </label>
        </form>

        <img
          src={message}
          className="action"
        />
        <img
          src={calendar}
          className="action"
        />
        <img
          src={bell}
          className="action"
        />

        <img
          className='profilePhoto'
          alt='profile'
          src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
        />
      </div>
    </header>
  )
}
