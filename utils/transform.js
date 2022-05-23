// import fs from 'fs';
// import products from './products.json'

export const transform = (input) => {
  return input.reduce((pre, cur, i) => {
    let _newOption = {};
    _newOption = {
      slices: cur.options.find(({ key }) => key === 'Количество слоев')?.value,
      collection: cur.options.find(({ key }) => key === 'Коллекция')?.value,
      color: cur.options.find(({ key }) => key === 'Оттенок')?.value || cur.options.find(({ key }) => key === 'Цвет')?.value || null,
      formSlices: cur.options.find(({ key }) => key === 'Форма нарезки')?.value || null,
      prices: [
        {
          city: 'square',
          value: cur.cost,
        },
      ],
    };
    let _product = {
      id: `${i}`,
      info: {
        position: i,
        slug: `${i}`,
        title: cur.title,
        userTitle: cur.title,
      },
      desc: [{ title: 'Описание', value: cur.description }],
      options: [_newOption],
    };
    return pre.concat(_product);
  }, []);
};

export const makeFilters = (input) => {
  return input.reduce(
    (pre, cur, i) => {
      let _res = [];
      for (const [key, value] of Object.entries(cur.options[0])) {
        switch (key) {
          case 'slices':
            {
              let _slices = pre.find((item) => item.key === key);
              let _values = new Set(_slices.values);
              _values.add(value);
              _slices.values = [..._values];
              _res.push(_slices);
            }
            break;
          case 'collection':
            {
              let _slices = pre.find((item) => item.key === key);
              let _values = new Set(_slices.values);
              _values.add(value);
              _slices.values = [..._values];
              _res.push(_slices);
            }
            break;
          case 'color':
            {
              let _slices = pre.find((item) => item.key === key);
              let _values = new Set(_slices.values);
              _values.add(value);
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
            let index = _structure.slices.indexOf('Однослойная')
            let _values = new Set(_structure?.values[index]);

            let _slices = new Set(_structure?.slices);
            _slices.add(cur.options[0].slices);
            _structure.slices = [..._slices];

            _values.add(cur.options[0].collection);
            _structure.values.splice(index, 1, [..._values]);
            _res.push(_structure);
          }

          break;
        case 'Двухслойная':
          {
            let _structure = pre.find((item) => item.key === 'structure');
            let index = _structure.slices.indexOf('Двухслойная')
            let _values = new Set(_structure?.values[index]);

            let _slices = new Set(_structure?.slices);
            _slices.add(cur.options[0].slices);
            _structure.slices = [..._slices];

            _values.add(cur.options[0].collection);
            _structure.values.splice(index, 1, [..._values]);
            _res.push(_structure);
          }

          break;
        case 'Трехслойная':
          {
            let _structure = pre.find((item) => item.key === 'structure');
            let index = _structure.slices.indexOf('Трехслойная')
            let _values = new Set(_structure?.values[index]);

            let _slices = new Set(_structure?.slices);
            _slices.add(cur.options[0].slices);
            _structure.slices = [..._slices];

            _values.add(cur.options[0].collection);
            _structure.values.splice(index, 1, [..._values]);
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
        slices: [],
        values: [[], [], []],
      },
    ]
  );
};
