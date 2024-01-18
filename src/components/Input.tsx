import { splitProps } from 'solid-js';

const Input = (props: any) => {
  const [local, others] = splitProps(props, ['class', 'classList', 'invalid']);
  return (
    <input
      class="rounded-md bg-indigo-500/25 px-2 py-2 focus:bg-indigo-500/35"
      classList={{ 'border-2 border-red-500': local.invalid }}
      aria-invalid={local.invalid}
      {...others}
    />
  );
};

export default Input;
