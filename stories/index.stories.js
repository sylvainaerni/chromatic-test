export default {
  title: 'Demo',
};

export const Introduction = () => (
  '<h1>Introduction to the Bund design system</h1>'
)

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

