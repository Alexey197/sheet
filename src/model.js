import {CellBlock, TextBlock} from './core/blocks'

export const model = [
  {
    cell: new CellBlock([
      '',
      `ПРЕМИАЛЬНЫЙ<br>(будет выполнен самыми лучшими материалам)`,
      'ОПТИМАЛЬНЫЙ<br>(лучшее соотношение цена/качество)',
      'БЮДЖЕТНЫЙ<br>(вариант, если нужно сэкономить)',
      'ЭКОНОМИЧНЫЙ<br>(вариант без утепления)'
    ]),
    text: new TextBlock('')
  },
  
  
    {
      cell: new CellBlock([
        'Грунт концентрат',
        'Baumit Multiprimer',
        'Baumit Multiprimer',
        'Baumit Multiprimer',
        'Baumit Multiprimer'
      ]),
      text: new TextBlock('Улучшает адгезию клея к основанию')
    },
  
  
  {
    cell: new CellBlock([
      'Клей для утеплителя',
      'Baumit StarContact',
      'Baumit ProContact',
      'Baumit NivoFix',
      ''
    ]),
    text: new TextBlock('Обеспечивает надежное крепление утеплителя к поверхности стены')
  },
  
  
  {
    cell: new CellBlock(
      [
        'Утеплитель',
        'Rockwool 100 мм',
        'Rockwool 50 мм',
        'Пенопласт 50 мм',
        ''
      ]),
    text: new TextBlock('Слой, который непосредственно обеспечивает утепление')
  },
  
  
  {
    cell: new CellBlock(
      [
        'Дюбель',
        'Rockwool 100 мм',
        'Rockwool 50 мм',
        'Пенопласт 50 мм',
        ''
      ]),
    text: new TextBlock('Обеспечивает дополнительное крепление утеплителя к стене')
  },
  
  
  {
    cell: new CellBlock(
      [
        'Армирующий слой',
        'Baumit StarContact',
        'Baumit ProContact',
        'Baumit DuoContact',
        'Baumit DuoContact'
      ]),
    text: new TextBlock('Слой, который предотвращает растрескивание')
  },
  
  
  {
    cell: new CellBlock(
      [
        'Фасадная сетка',
        'Сетка фасадная 165 гр',
        'Сетка фасадная 160 гр',
        'Сетка фасадная 160 гр',
        'Сетка фасадная 160 гр'
      ]),
    text: new TextBlock('Важная составляющая армирующего слоя, правильно распределяющая нагрузки на поверхность')
  },
  
  
  {
    cell: new CellBlock(
      [
        'Грунтовка кварц.',
        'Baumit UniPrimer',
        'Baumit UniPrimer',
        'Baumit UniPrimer',
        'Baumit UniPrimer'
      ]),
    text: new TextBlock('Гарантирует более надежное сцепление декоративного слоя, что предотвращает его дальнейшее отслоение')
  },
  {
    cell: new CellBlock(
      [
        'Декоративный слой',
        'Baumit NanoporTop 2R',
        'Baumit SilikonTop 2K',
        'Baumit SilikonTop 2K',
        'Baumit GranoporTop 1,5K'
      ]),
    text: new TextBlock('Слой, который радует глаз и заставляет соседей завидовать')
  }
]


export const row = {
  0: [
    '',
    `ПРЕМИАЛЬНЫЙ<br>(будет выполнен самыми лучшими материалам)`,
    'ОПТИМАЛЬНЫЙ<br>(лучшее соотношение цена/качество)',
    'БЮДЖЕТНЫЙ<br>(вариант, если нужно сэкономить)',
    'ЭКОНОМИЧНЫЙ<br>(вариант без утепления)'
  ],
  1: [
    'Грунт концентрат',
    'Baumit Multiprimer',
    'Baumit Multiprimer',
    'Baumit Multiprimer',
    'Baumit Multiprimer'
  ],
  2: [
    'Клей для утеплителя',
    'Baumit StarContact',
    'Baumit ProContact',
    'Baumit NivoFix',
    ''
  ],
  3: [
    'Утеплитель',
    'Rockwool 100 мм',
    'Rockwool 50 мм',
    'Пенопласт 50 мм',
    ''
  ],
  4: [
    'Утеплитель',
    'Rockwool 100 мм',
    'Rockwool 50 мм',
    'Пенопласт 50 мм',
    ''
  ],
  5: [
    'Армирующий слой',
    'Baumit StarContact',
    'Baumit ProContact',
    'Baumit DuoContact',
    'Baumit DuoContact'
  ],
  6: [
    'Фасадная сетка',
    'Сетка фасадная 165 гр',
    'Сетка фасадная 160 гр',
    'Сетка фасадная 160 гр',
    'Сетка фасадная 160 гр'
  ],
  7: [
    'Грунтовка кварц.',
    'Baumit UniPrimer',
    'Baumit UniPrimer',
    'Baumit UniPrimer',
    'Baumit UniPrimer'
  ],
  8: [
    'Декоративный слой',
    'Baumit NanoporTop 2R',
    'Baumit SilikonTop 2K',
    'Baumit SilikonTop 2K',
    'Baumit GranoporTop 1,5K'
  ]
}

export const text = {
  0: '',
  1: 'Улучшает адгезию клея к основанию',
  2: 'Обеспечивает надежное крепление утеплителя к поверхности стены',
  3: 'Слой, который непосредственно обеспечивает утепление',
  4: 'Обеспечивает дополнительное крепление утеплителя к стене',
  5: 'Слой, который предотвращает растрескивание',
  6: 'Важная составляющая армирующего слоя, правильно распределяющая нагрузки на поверхность',
  7: 'Гарантирует более надежное сцепление декоративного слоя, что предотвращает его дальнейшее отслоение',
  8: 'Слой, который радует глаз и заставляет соседей завидовать'
}
