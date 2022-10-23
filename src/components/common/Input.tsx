import { Input as InputNB, IInputProps as IInputPropsNB } from 'native-base';

interface IInputProps extends IInputPropsNB { }

export function Input({ ...rest }: IInputProps) {
  return (
    <InputNB
      {...rest}
    />
  );
}