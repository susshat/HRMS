import { ComponentProps } from 'react';

export type DrawerSectionProps = ComponentProps<'nav'>;

const DrawerSection = (props: DrawerSectionProps) => <nav {...props}></nav>;

export default DrawerSection;
