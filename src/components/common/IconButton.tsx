import {
  IconButton as IconButtonNB,
  IIconButtonProps as IIconButtonPropsNB
} from 'native-base';

interface IIconButtonProps extends IIconButtonPropsNB { }

export function IconButton({ ...rest }: IIconButtonProps) {
  return (
    <IconButtonNB
      _pressed={{ opacity: 0.5, bgColor: 'none' }}
      {...rest}
    />
  );
}