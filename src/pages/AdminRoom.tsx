import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'

import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'

import { database } from '../services/firebase'

import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import '../styles/room.scss'
import { Question } from '../components/Question'

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const [newQuestion, setNewQuestion] = useState('')

  const {
    title,
    questions,
  } = useRoom(roomId)


  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>{questions.length} pergunta(s)</span>
          )}
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}