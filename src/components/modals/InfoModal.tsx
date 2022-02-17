import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Ինչպես խաղալ" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Գուշակիր բառը 6 փորձից: Յուրաքանչյուր գուշակությունից հետո սալիկների գույնը կփոխվի՝ ցույց տալու համար, թե որքան մոտ էր ձեր գուշակությունը բառին:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Լ" status="correct" />
        <Cell value="Ի" />
        <Cell value="Ն" />
        <Cell value="Ե" />
        <Cell value="Լ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Լ տառը բառի մեջն է և ճիշտ տեղում:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ա" />
        <Cell value="Պ" />
        <Cell value="Ո" status="present" />
        <Cell value="Ւ" />
        <Cell value="Շ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ո տառը բառի մեջն է, բայց սխալ տեղում:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Հ" />
        <Cell value="Ո" />
        <Cell value="Վ" />
        <Cell value="Ի" status="absent" />
        <Cell value="Կ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ի տառը բառի մեջ ոչ մի տեղում չկա:
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
      Սա բառի գուշակության խաղի բաց կոդով տարբերակն է, որը մենք բոլորս գիտենք և սիրում ենք-{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          ստուգեք կոդը այստեղ
        </a>{' '}
      </p>
    </BaseModal>
  )
}
