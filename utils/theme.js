const theme = (name) => {
  let theme = {};
  switch (name) {
    case 'black':
      theme.bg = 'bg-bp_black';
      theme.text = 'text-white';
      theme.textDark = 'text-zinc-800';
      theme.hoverText = 'text-bp_red';
      theme.buttonColours = 'bg-bp_red text-white hover:bg-bp_red_2 hover:border-bp_red_2 rounded-md';
      theme.button = 'bg-bp_red text-white hover:bg-bp_red_2 hover:border-bp_red_2 rounded-md'
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
