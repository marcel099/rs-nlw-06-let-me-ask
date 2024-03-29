import { useState, FormEvent } from 'react'
import { useHistory } from 'react-router'

// webpack (snowpak, vite, ...) foi o estopim pra coisas como importação de imagem
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { database } from '../services/firebase'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'


import '../styles/auth.scss'

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle, signOut } = useAuth()

  const [roomCode, setRoomCode] = useState('')
  
  async function handleCreateRoom() {
    try {
      if (!user) {
        await signInWithGoogle()
      }
  
      history.push('/rooms/new')
    } catch (error) {      
      const firebaseError = error as any;
      if (firebaseError?.code !== 'auth/popup-closed-by-user') {
        alert('Erro ao realizar login')
      }
    }
  }

  async function handleSignOut() {
    try {
      await signOut()
      history.push('/')
    } catch (error) {
      alert('Não foi possível sair')
    }
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault()

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exist.')
      return
    }

    if (roomRef.val().closedAt) {
      alert('Room already closed.')
      return
    }

    history.push(`/admin/rooms/${roomCode}`)
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
          <button
            className="create-room"
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <button
            className="sign-out-button"
            onClick={handleSignOut}
          >
            Sair
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}