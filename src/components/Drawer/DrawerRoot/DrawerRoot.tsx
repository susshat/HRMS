import { ComponentProps, createContext } from 'react';
import classnames from 'classnames';

export const DrawerContext = createContext({
  isOpen: false,
});

export interface DrawerRootProps extends ComponentProps<'aside'> {
  isOpen?: boolean;
}

const DrawerRoot = ({ isOpen = false, ...props }: DrawerRootProps) => {
  return (
    <DrawerContext.Provider
      value={{
        isOpen,
      }}
    >
      <aside {...props}></aside>
    </DrawerContext.Provider>
  );
};

export default DrawerRoot;
