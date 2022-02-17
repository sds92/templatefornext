const theme = (name) => {
  let theme = {};
  switch (name) {
    case 'black':
      theme.bg = {
        header: 'bg-zinc-800',
        footer: 'bg-zinc-800',
        main: 'bg-white',
        devider: 'bg-zinc-800',
        advantages: 'bg-zinc-800',
        catalog: 'bg-white',
        about: 'bg-white',
        gallery: 'bg-white',
        contacts: 'bg-zinc-100',
        buttons: 'bg-belplit24_2 hover:bg-belplit24_2_b',
      };

      theme.text = {
        header: 'text-zinc-100',
        footer: 'text-zinc-100',
        main: 'text-zinc-800',
        devider: 'text-zinc-100',
        advantages: 'text-zinc-100',
        catalog: 'text-zinc-800',
        about: 'text-zinc-800',
        gallery: 'text-zinc-800',
        contacts: 'text-zinc-800',
        buttons: 'text-zinc-100',
      };
      theme.ui = {
        text: { title: 'text-belplit24 font-bold text-3xl' },
        buttons: {
          bg: 'bg-belplit24_2 hover:bg-belplit24_2_b',
        },
      };
      break;
    case 'blue':
      theme.bg = 'bg-slate-500';
      theme.text = 'text-zinc-100';
      theme.textDark = 'text-blue-800';
      theme.hoverText = 'text-blue-900';
      theme.buttonColours = 'bg-amber-800 text-white';
      theme.button = 'bg-belplit24_2 text-white hover:bg-belplit24_2_b hover:border-belplit24_2_b rounded-md'
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
