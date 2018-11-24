export default (theme) => {
  console.log(theme);
  return ({
    container: {
      background: theme.colorBackground,
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'z-index': 150,
    },
    headline: {
      color: theme.colorHeadline,
      margin: [25, 0, 40],
      'max-width': 500,
      'text-align': 'center',
      'line-height': '1.3em',
    },
    button: {
      margin: [40, 0, 20],
    },
  });
};