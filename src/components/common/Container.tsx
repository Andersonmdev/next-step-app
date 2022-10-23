import { Box, IBoxProps } from 'native-base';
import { ReactNode } from 'react';

interface IContainerProps extends IBoxProps {
  children: ReactNode
}

export function Container({ children, ...rest }: IContainerProps) {
  return (
    <Box
      safeArea
      flex={1}
      bgColor='light.50'
      _dark={{
        bgColor: 'dark.100'
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}