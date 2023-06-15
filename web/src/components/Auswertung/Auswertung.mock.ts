import type { AuswertungProps } from './Auswertung'

export const standart = (): AuswertungProps => {
  return {
    list: [
      {
        datum: new Date().toISOString(),
        bezeichnung: 'Test',
        auslauf: new Date().toISOString(),
        fehlerText: 'Lack nicht deckend',
        lack: 'Bunt',
        skid: 117,
        skidposition: '2',
        skidseite: 'B',
        fehlerOrt: 'F0302',
      },
      {
        datum: new Date().toISOString(),
        bezeichnung: 'Test',
        auslauf: new Date().toISOString(),
        fehlerText: 'Lack nicht deckend',
        lack: 'Bunt',
        skid: 117,
        skidposition: '1',
        skidseite: 'B',
        fehlerOrt: 'F0304',
      },
    ],
    sumByGeometrie: [{ bezeichnung: 'Test', sum: 20 }],
  }
}
