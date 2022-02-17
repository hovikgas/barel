export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Ապրես', 'Հիանալի', 'Գերազանց']
export const GAME_COPIED_MESSAGE = 'Խաղը պատճենվեց clipboard-ում'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Tառերը շատ քիչ են'
export const WORD_NOT_FOUND_MESSAGE = 'Բառը չգտնվեց'
export const HARD_MODE_ALERT_MESSAGE =
  'Միայն սկզբում կարող եք միացնել դժվար ձեվը'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Բառը ${solution} էր`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Պետք է օգտագործել ${guess}, ${position} դիրքում`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Գուշակությունը պետք է պարունակի ${letter} տառը`
export const ENTER_TEXT = 'Տող'
export const DELETE_TEXT = 'Ջնջել'
export const STATISTICS_TITLE = 'Տվյալներ'
export const GUESS_DISTRIBUTION_TEXT = 'Գուշակության բաշխումը'
export const NEW_WORD_TEXT = 'Նոր բառ կլինի'
export const SHARE_TEXT = 'Ուղարկել'
export const TOTAL_TRIES_TEXT = 'Ընդհանուր փորձեր'
export const SUCCESS_RATE_TEXT = 'Հաջողության տոկոսը'
export const CURRENT_STREAK_TEXT = 'Ընթացիկ շարանը'
export const BEST_STREAK_TEXT = 'Լավագույն շարանը'
