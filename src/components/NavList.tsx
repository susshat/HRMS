import { ComponentProps } from 'react';

export type NavlistProps = ComponentProps<'ul'>;

const Navlist = (props: NavlistProps) => {
  return (
    <>
      <ul {...props}></ul>
    </>
  );
};
export default Navlist;
