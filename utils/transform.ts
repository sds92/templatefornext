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
  slices?: string;
  collection?: string;
  color?: string;
  sort: string;
  material: string;
  mark: string;
  surface: string;
  priceFor: string;
}
export const transform = (input: Input[]) => {
console.log("🚀 ~ file: transform.ts ~ line 30 ~ transform ~ input", input)
  return input.reduce((pre: IProduct[], cur: Input, i: number) => {
    let _newOption = {} as Option;
    // @ts-ignore
    _newOption = {
      h: parseInt(cur.options.find(({ key }) => key === 'Толщина')?.value as string),
      a: parseInt(cur.options.find(({ key }) => key === 'Длина')?.value as string),
      b: parseInt(cur.options.find(({ key }) => key === 'Ширина')?.value as string),
      sort: cur.options.find(({ key }) => key === 'Сорт')?.value as string || '' ,
      material: cur.options.find(({ key }) => key === 'Материал')?.value as string || '',
      mark: cur.options.find(({ key }) => key === 'Марка')?.value as string || '',
      surface: cur.options.find(({ key }) => key === 'Тип поверхности')?.value as string || '',
      priceFor: cur.unit as string,
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
        title: cur.title.includes('Фанера березовая ФК 2/3 Ш2')
          ? 'Фанера березовая ФК 2/3 Ш2'
          : cur.title.includes('Фанера березовая ФК 3/4 Ш2')
          ? 'Фанера березовая ФК 3/4 Ш2'
          : cur.title.includes('Фанера березовая ФСФ 4/4 НШ')
          ? 'Фанера березовая ФСФ 4/4 НШ'
          : cur.title.includes('Фанера хвойная ФСФ 3/3 НШ')
          ? 'Фанера хвойная ФСФ 3/3 НШ'
          : cur.title.includes('Фанера хвойная ФСФ 3/4 НШ')
          ? 'Фанера хвойная ФСФ 3/4 НШ'
          : cur.title.includes('Фанера хвоя ФСФ 3/3 НШ')
          ? 'Фанера хвойная ФСФ 3/3 НШ'
          : cur.title.includes('ФК 4/4 НШ')
          ? 'Фанера березовая ФК 4/4 НШ'
          : cur.title.includes('итай')
          ? 'Ламинированная фанера, Китай'
          : cur.title.includes('аминированная')
          ? 'Ламинированная фанера, Россия'
          : cur.title.slice(0, cur.title.indexOf(',')),
        userTitle: cur.title,
      },
      desc: [{ title: 'Описание', value: cur.description }],
      options: [_newOption],
    };
    return pre.concat(_product);
  }, [] as IProduct[]);
};

export const makeFilters = (input: IProduct[]) => {
  let _filter = {
    title: '',
    ids: [],
  };
  return input
    .reduce(
      (pre, cur) => {
        pre.find((item) => item.title === cur.info.title)
          ? // @ts-ignore
            pre.find((item) => item.title === cur.info.title)?.ids.push(cur.id)
          : // @ts-ignore
            pre.push({ title: cur.info.title, ids: [cur.id] });
        return pre;
      },
      [_filter]
    )
    .slice(1);
};
