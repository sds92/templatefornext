const theme = (name) => {
  let theme = {
    styles: {
      buttons: `font-bold max-w-xs whitespace-nowrap rounded-md shadow-md p-2 uppercase text-xl text-center`,
    },
    bg: {},
    text: {},
    borders: {}
  };
  switch (name) {
    case 'black':
      theme.logo = '#ff0000'; 
      theme.metaThemeColor = '#1a1520';
      theme.bg.header = 'bp_black';
      theme.bg.buttons = 'bp_red';
      theme.bg.productcardPrice = 'bp_red';
      theme.bg.advantages = 'zinc-800';
      theme.bg.contacts = 'zinc-800';
      theme.text.header = 'zinc-100';
      theme.text.advantages = 'zinc-100';
      theme.text.contactsTitle = 'zinc-100';
      theme.text.contactsSubTitle = 'zinc-100';
      theme.text.contactsIcon = 'bp_red';
      theme.text.body = 'zinc-800';
      theme.text.bodyTitle = 'bp_red';
      theme.text.buttons = 'zinc-100';
      theme.text.hover = 'bp_red';
      theme.text.active = 'bp_red_2';
      theme.borders.contacts = 'bp_red_2'

      break;
    case 'green':
      theme.logo = '#62a044'; 
      theme.metaThemeColor = '#62a044';
      theme.bg.header = 'zinc-100';
      theme.bg.buttons = 'bp_green';
      theme.bg.productcardPrice = 'bp_green';
      theme.bg.advantages = 'zinc-800';
      theme.bg.contacts = 'zinc-800';
      theme.text.header = 'zinc-800';
      theme.text.advantages = 'zinc-100';
      theme.text.contactsTitle = 'bp_green_2';
      theme.text.contactsSubTitle = 'zinc-100';
      theme.text.contactsIcon = 'bp_green_2';
      theme.text.body = 'zinc-800';
      theme.text.bodyTitle = 'bp_green_2';
      theme.text.buttons = 'zinc-100';
      theme.text.hover = 'bp_green';
      theme.text.active = 'bp_green_2';
      theme.borders.contacts = 'bp_green_3'
      break;
    case 'yellow':
      theme.bg = 'bg-amber-800';
      theme.text = 'text-zinc-100';
      theme.textDark = 'text-yellow-400';
      theme.hoverText = 'text-amber-300';
      theme.buttonColours = 'bg-amber-800 text-white';
      theme.button = 'bg-belplit24_2 text-white hover:bg-belplit24_2_b hover:border-belplit24_2_b rounded-md';
      break;
    default:
      break;
  }
  return theme;
};
export default theme;
