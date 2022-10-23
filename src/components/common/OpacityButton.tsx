import { Pressable, ITextProps, Text } from 'native-base';

interface IOpacityButtonProps extends ITextProps {
  title: string
}

export function OpacityButton({ title, ...rest }: IOpacityButtonProps) {
  return (
    <Pressable>
      {({ isPressed }) => (
        <Text opacity={isPressed ? 0.5 : 1} {...rest}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}