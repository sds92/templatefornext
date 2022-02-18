const theme = (name) => {
  let theme = {};
  switch (name) {
    case 'black':
      theme.metaThemeColor = '#1a1520';
      theme.color1 = {
        light: 'zinc-800',
        dark: 'belplit24'
      };
      theme.color2 = {
        light: 'belplit24_2',
        dark: 'belplit24_2_b'
      };
      theme.commonText = {
        header: 'zinc-100',
        body: 'zinc-800',
        hover: 'belplit24_2',
      }
      break;
    case 'green':
      theme.metaThemeColor = '#62a044';
      theme.color1 = {
        light: 'zinc-800',
        dark: 'belplit24'
      };
      theme.color2 = {
        light: 'belplit24_2',
        dark: 'belplit24_2_b'
      };
      theme.commonText = {
        header: 'zinc-100',
        body: 'zinc-800',
        hover: 'belplit24_2',
      }
      break;
    case 'yellow':
      theme.bg = 'bg-amber-800';
      theme.text = 'text-zinc-100';
      theme.textDark = 'text-yellow-400';
      theme.hoverText = 'text-amber-300';
      theme.buttonColours = 'bg-amber-800 text-white';
      theme.button = 'bg-belplit24_2 text-white hover:bg-belplit24_2_b hover:border-belplit24_2_b rounded-md'
      break;
    default:
      break;
  }
  return theme;
};
export default theme;
