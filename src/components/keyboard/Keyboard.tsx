import { useEffect } from 'react'
import { DELETE_TEXT, ENTER_TEXT } from '../../constants/strings'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'

const listofletters = ['ա',
                       'բ',
                       'գ',
                       'դ',
                       'ե',
                       'զ',
                       'է',
                       'ը',
                       'թ',
                       'ժ',
                       'ի',
                       'լ',
                       'խ',
                       'ծ',
                       'կ',
                       'հ',
                       'ձ',
                       'ղ',
                       'ճ',
                       'մ',
                       'յ',
                       'ն',
                       'շ',
                       'ո',
                       'չ',
                       'պ',
                       'ջ',
                       'ռ',
                       'ս',
                       'վ',
                       'տ',
                       'ր',
                       'ց',
                       'ու',
                       'փ',
                       'ք',
                       'և',
                       'օ',
                       'ֆ']

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && listofletters.includes(key)) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {['Չ', 'Է', 'Ռ', 'Թ', 'Օ', 'Փ', 'Շ', 'Ջ', 'Ղ', 'Ժ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {['Ք', 'Ւ', 'Ե', 'Ր', 'Տ', 'Յ', 'Ը', 'Ի', 'Ո', 'Պ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {['Ա', 'Ս', 'Դ', 'Ֆ', 'Գ', 'Հ', 'Ձ', 'Կ', 'Լ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        {['Զ', 'Խ', 'Ծ', 'Ց', 'Վ', 'Բ', 'Ն', 'Մ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
