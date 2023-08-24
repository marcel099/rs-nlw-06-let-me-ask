import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'
import { database } from '../services/firebase'

import '../styles/auth.scss'

export function NewRoom() {
  const history = useHistory()

  const [newRoom, setNewRoom] = useState('')
  
  const { user } = useAuth()

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault()

    try {
      if (newRoom.trim() === '' && user === undefined) {
        return
      }
  
      const roomRef = database.ref('rooms')
  
      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id
      })
  
      history.push(`/rooms/${firebaseRoom.key}`)
    } catch (error) {
      alert('Erro ao criar sala')
    }
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img
            src={logoImg}
            alt="let me ask"
          />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}