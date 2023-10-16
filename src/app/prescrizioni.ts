// export class Paziente {
export interface Paziente {
  Nome: string;
  // constructor() {
  //   this.Nome = 'NA';
  // }
}

// export class Farmaco {
export interface Farmaco {
  Nome: string;
  Formato: string;
  // constructor() {
  //   this.Nome = 'NA';
  //   this.Formato = 'NA';
  // }
}

// export class Prescr {
export interface Prescr {
  Paziente: Paziente;
  PrFarmaco: Farmaco;
  Qta: number;
  Giorni: number[];
  // constructor() {
  //   this.Paziente = { Nome: 'NA' };
  //   this.PrFarmaco = { Nome: 'NA', Formato: 'NA' };
  //   this.Qta = 0;
  //   this.Giorni = [];
  // }
}

export var Pazienti: Paziente[] = [
  {
    Nome: 'Paziente 1',
  },
  {
    Nome: 'Paziente 2',
  },
  {
    Nome: 'Paziente 3',
  },
];

export var Farmaci: Farmaco[] = [
  {
    Nome: 'Farmaco 1',
    Formato: '25mg, compresse',
  },
  {
    Nome: 'Farmaco 2',
    Formato: '25mg, gocce',
  },
  {
    Nome: 'Farmaco 3',
    Formato: '25mg,compresse',
  },
];

// export const Prescrizioni: Prescr[] = [
export const Prescrizioni = [
  {
    Paziente: Pazienti[0],
    PrFarmaco: Farmaci[0],
    Qta: 2,
    Giorni: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 39, 31],
  },
  {
    Paziente: Pazienti[0],
    PrFarmaco: Farmaci[1],
    Qta: 1,
    Giorni: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  },
  {
    Paziente: Pazienti[0],
    PrFarmaco: Farmaci[2],
    Qta: 3,
    Giorni: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  },
  {
    Paziente: Pazienti[1],
    PrFarmaco: Farmaci[1],
    Qta: 1,
    Giorni: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  },
];
