// import fs from 'fs';
// import products from './products.json'
type Input = {
  article: number;
  visible: boolean;
  id: string;
  title: string;
  cost: number;
  club_cost: number;
  options: { key: string; value: string }[];
  images: string[];
  path: string;
  unit: string;
  coef: number;
  description: string;
  slug: string;
};

interface Option extends IProductOption {
  slices: string;
  collection: string;
  color: string;
}

export const transform = (input: Input[]) => {
  return input.reduce(
    // @ts-ignore
    (pre: IProduct[], cur: Input, i: number) => {
      let _newOption = {} as Option;
      // @ts-ignore
      _newOption = {
        slices: cur.options.find(({ key }) => key === 'Количество слоев')?.value as string,
        collection: cur.options.find(({ key }) => key === 'Коллекция')?.value as string,
        // @ts-ignore
        color: cur.options.find(({ key }) => key === 'Оттенок')?.value || null,
        formSlices: cur.options.find(({ key }) => key === 'Форма нарезки')?.value || null,
        prices: [
          {
            city: 'square',
            value: cur.cost,
          },
        ],
      };
      let _product: IProduct = {
        id: `${i}`,
        info: {
          position: i,
          slug: `${i}`,
          title: cur.title,
          userTitle: cur.title,
        },
        desc: [{title: 'Описание', value: cur.description}],
        options: [_newOption],
      };
      return pre.concat(_product);
    },
    [] as IProduct[]
  );
};

export const makeFilters = (input: IProduct[]) => {
  // @ts-ignore
  return input.reduce(
    // @ts-ignore
    (pre, cur, i) => {
      // @ts-ignore
      let _res = [];
      for (const [key, value] of Object.entries(cur.options[0])) {
        switch (key) {
          case 'slices':
            {
              let _slices = pre.find((item) => item.key === key);
              // @ts-ignore
              let _values = new Set(_slices.values);
              _values.add(value);
              // @ts-ignore
              _slices.values = [..._values];
              _res.push(_slices);
            }
            break;
          case 'collection':
            {
              let _slices = pre.find((item) => item.key === key);
              // @ts-ignore
              let _values = new Set(_slices.values);
              _values.add(value);
              // @ts-ignore
              _slices.values = [..._values];
              _res.push(_slices);
            }
            break;
          case 'color':
            {
              let _slices = pre.find((item) => item.key === key);
              // @ts-ignore
              let _values = new Set(_slices.values);
              _values.add(value);
              // @ts-ignore
              _slices.values = [..._values];
              _res.push(_slices);
            }
            break;

          default:
            break;
        }
      }
      switch (cur.options[0].slices) {
        case 'Однослойная':
          {
            let _structure = pre.find((item) => item.key === 'structure');
            let _values = new Set(_structure?.values[0]);
            // @ts-ignore
            _values.add(cur.options[0].collection);
             // @ts-ignore
            _structure?.values[0] = [..._values];
            _res.push(_structure);
          }

          break;
        case 'Многослойная':
          {
            let _structure = pre.find((item) => item.key === 'structure');
            let _values = new Set(_structure?.values[1]);
             // @ts-ignore
            _values.add(cur.options[0].collection);
             // @ts-ignore
            _structure?.values[1] = [..._values];
            _res.push(_structure);
          }

          break;
        default:
          break;
      }
      return _res;
    },
    [
      {
        key: 'slices',
        title: 'Количество слоев',
        values: [],
      },
      {
        key: 'collection',
        title: 'Коллекция',
        values: [],
      },
      {
        key: 'color',
        title: 'Оттенок',
        values: [],
      },
      {
        key: 'structure',
        values: [[], []],
      },
    ]
  );
};

let a = {
  id: 0,
  info: {
    slug: 'top',
    position: '1',
    title: 'Белтермо Top2',
    userTitle: 'БЕЛТЕРМО Top (200 кг/м3). Ветро-влагозащитная плита для кровли, фасада, полов.',
  },
  options: [
    {
      a: 2490,
      b: 590,
      h: 20,
      show: true,
      prices: [
        {
          city: 'square',
          value: '500',
        },
        {
          city: 'spb',
          value: 500,
        },
        {
          city: 'kazan',
          value: 535,
        },
        {
          city: 'krasnodar',
          value: 550,
        },
        {
          city: 'rostov',
          value: 535,
        },
        {
          city: 'volvograd',
          value: 536,
        },
        {
          city: 'astrahan',
          value: 550,
        },
        {
          city: 'crimea',
          value: 550,
        },
      ],
      coef: 1.4691,
      connectionType: 'шип-паз',
      density: 200,
    },
    {
      a: 2490,
      b: 590,
      h: 25,
      show: true,
      prices: [
        {
          city: 'square',
          value: 620,
        },
        {
          city: 'spb',
          value: 600,
        },
        {
          city: 'kazan',
          value: 660,
        },
        {
          city: 'krasnodar',
          value: 675,
        },
        {
          city: 'rostov',
          value: 660,
        },
        {
          city: 'volvograd',
          value: 662,
        },
        {
          city: 'astrahan',
          value: 680,
        },
        {
          city: 'crimea',
          value: 679,
        },
      ],
      coef: 1.4691,
      connectionType: 'шип-паз',
      density: 200,
    },
    {
      a: 2490,
      b: 590,
      h: 28,
      show: true,
      prices: [
        {
          city: 'square',
          value: 725,
        },
        {
          city: 'spb',
          value: 730,
        },
        {
          city: 'kazan',
          value: 740,
        },
        {
          city: 'krasnodar',
          value: 755,
        },
        {
          city: 'rostov',
          value: 740,
        },
        {
          city: 'volvograd',
          value: 741,
        },
        {
          city: 'astrahan',
          value: 760,
        },
        {
          city: 'crimea',
          value: 760,
        },
      ],
      coef: 1.4691,
      connectionType: 'шип-паз',
      density: 200,
    },
    {
      a: 2480,
      b: 580,
      h: 35,
      show: false,
      prices: [
        {
          city: 'square',
          value: 870,
        },
        {
          city: 'spb',
          value: 820,
        },
        {
          city: 'kazan',
          value: 915,
        },
        {
          city: 'krasnodar',
          value: 935,
        },
        {
          city: 'rostov',
          value: 915,
        },
        {
          city: 'volvograd',
          value: 917,
        },
        {
          city: 'astrahan',
          value: 942,
        },
        {
          city: 'crimea',
          value: 942,
        },
      ],
      coef: 1.4384,
      connectionType: 'шип-паз',
      density: 200,
    },
  ],
  desc: [
    {
      title: 'consists',
      value: [
        'Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%).',
      ],
    },
    {
      title: 'options',
      value: [
        'Паропроницаемая ветрозащита',
        'Перекрестное утепление и звукоизоляция стен под сайдинг, блок-хаус, кедрал и.т.д.',
        'Звукоизоляция СИП домов',
        'Утепление и звукоизоляция скатной кровли под стропила',
        'Утепление каркасных и кирпичных/пеноблок стен под штукатурный фасад (толщина от 35 мм)',
        'Звукоизоляция каркасных перегородок',
        'Деревянных перекрытий (потолок)',
        'Тепло и шумоизоляция бетонных перекрытий под стяжку',
        'Звукоизоляция многоквартирных домов (квартиры).',
      ],
    },
    {
      title: 'advantages',
      value: [
        'Влагозащитная плита',
        'Исключает перегрев мансарды',
        'Снижает шум от металлочерепицы (эффект барабана)',
        'Низкая теплопроводность и высокая теплоемкость',
        'Исключает сквозняки',
        'Регулирует влажность в помещении',
        'Простота монтажа',
        'Теплопроводность не снижается при увлажнении',
        'Отличная паропроницаемость',
        'Экологически чистый материал',
        'Не нужны ветрозащитные пленки на фасаде',
      ],
    },
    {
      title: 'functions',
      value: [
        'Тепло и звукоизоляция',
        'Перекрытие «мостиков» холода',
        'Ветронепроницаемый контур здания',
        'Выведение пара изнутри помещения наружу',
        'Влагорегуляция.',
      ],
    },
    {
      title: 'tech',
      value: [
        {
          title: 'Вид кромки',
          value: ['прямая кромка', 'шип-паз', 'ступень'],
        },
        {
          title: 'Стандартный размер [мм]',
          value: ['2600*600', '2700*600', '2500*750', '1900*600'],
        },
        {
          title: 'Номинальная толщина [мм]',
          value: ['20', '22', '25', '28', '30', '35', '40', '52', '60'],
        },
        {
          title: 'Максимальная / минимальная длина [мм]',
          value: ['2850', '800'],
        },
        {
          title: 'Максимальная / минимальная ширина [мм]',
          value: ['1250', '570'],
        },
        {
          title: 'Объемная плотность [кг/м3]',
          value: ['200'],
        },
        {
          title: 'Номинальное значение коэффициента теплопроводности [Вт/м*К]',
          value: ['0.042'],
        },
        {
          title: 'Номинальное термическое сопротивление [м2К/Вт]',
          value: ['0.47', '0.52', '0.59', '0.66', '0.78', '0.83', '0.95', '1.23', '1.42'],
        },
        {
          title: 'Коэффициент сопротивления диффузии водяного пара',
          value: ['3'],
        },
        {
          title: 'Предел прочности при сжатии [кПа]',
          value: ['150'],
        },
        {
          title: 'Предел прочности при растяжении [кПа]',
          value: ['15'],
        },
        {
          title: 'Кратковременное водопоглощение [кг/м3]',
          value: ['<1.0'],
        },
        {
          title: 'Сопротивление продуванию потоком воздуха [(кПа*с)/м3]',
          value: ['100'],
        },
        {
          title: 'Удельная теплоемкость [Дж/(кг*К)]',
          value: ['2100'],
        },
        {
          title: 'Огнестойкость (еврокласс по EN 13501-1)',
          value: ['Е'],
        },
      ],
    },
    {
      title: 'main',
      value:
        'Состав: древесина (ель/сосна) – 94%, полиуретановая смола- 5%, парафин-1%\nТеплопроводность (λ) = 0,042 Вт/м*К. Теплоемкость – 2,1 кДж. Звукопоглощение (rw)- 0.6  \n<br/>\nПрименение:\n<br/>\nДля наружной обшивки конструкций зданий (для вентилируемых фасадов)\nИзоляция кровли по стропилам/под стропилами\nИзоляция полов под бетонную стяжку\nЭффект: \nМинимизирует возникновение мостиков холода, сквозняков\nОбеспечивают дополнительную теплоемкую теплоизоляцию\nУлучшают звукоизоляцию \nДиффузионно- открыты, регулируют уровень влаги\nДо 3-х месяцев могут оставаться непокрытыми.\nВетрозащитные мембраны не нужны!!!',
    },
    {
      title: 'main',
      value: 'dsfsdfsdfsdf',
    },
    {
      title: 'main',
      value: 'dsfsdfsdfsdf',
    },
    'dsfsdfasdasd',
  ],
};
