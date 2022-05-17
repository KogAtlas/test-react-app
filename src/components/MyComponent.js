export const testFunction = () => {
  console.log('My function did the things');
};
function MyComponent(props) {
  // if you need state from here (i.e. testFunction needs this info, too) try lifting the state
  return (<></>);
};

export default MyComponent;
