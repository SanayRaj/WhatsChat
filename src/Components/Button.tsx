import {Pressable, SxProp, Text} from 'dripsy';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  varient?: 'fill' | 'outline' | 'clear';
  children: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  textStyles?: string;
}
interface styleType {
  fill: SxProp;
  outline: SxProp;
  clear: SxProp;
}

// const DripsyButton = styled(TouchableOpacity)((props: {success: boolean}) => ({
//   color: props.success ? 'success' : 'rgb(22 163 74)',
// }));

export default function Button({
  children,
  varient = 'outline',
  disabled,
  loading,
}: ButtonProps) {
  const inputVarientStyles: styleType = {
    fill: {
      backgroundColor: '$primary.600',
      borderColor: '$primary.600',
    },
    outline: {
      borderColor: '$primary.600',
      backgroundColor: 'transparent',
    },
    clear: {},
  };
  // const inputVarientDisabledStyles: styleType = {
  //   fill: ' border opacity-90 bg-green-600 border-green-700',
  //   outline: 'bg-neutral-800 opacity-70',
  //   clear: 'opacity-50 bg-neutral-800 py-3',
  // };

  const inputVarientTextStyles: styleType = {
    fill: {color: '#000'},
    outline: {color: '#CCC'},
    clear: {color: '#FFF'},
  };

  // return (
  //   <TouchableOpacity
  //     activeOpacity={0.8}
  //     accessibilityRole="button"
  //     accessibilityLabel={children}
  //     disabled={loading || disabled}
  //     className={`px-5 py-3 flex items-center  rounded-3xl active:scale-[0.98] transition-all ${
  //       inputVarientStyles[varient]
  //     } ${
  //       (loading || disabled) && inputVarientDisabledStyles[varient]
  //     } ${className}`}
  //     {...props}>
  //     {loading && varient == 'fill' ? (
  //       <ActivityIndicator color={Colors.black} />
  //     ) : (
  //       <Text
  //         className={`font-sansMedium text-sm  ${inputVarientTextStyles[varient]} ${textStyles}`}>
  //         {children}
  //       </Text>
  //     )}
  //   </TouchableOpacity>
  // );
  return (
    <Pressable
      sx={{
        borderWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '$3',
        borderRadius: 20,
        ...inputVarientStyles[varient],
      }}
      disabled={loading || disabled}>
      <Text
        sx={{
          fontWeight: '700',
          fontSize: '$1',
          ...inputVarientTextStyles[varient],
        }}>
        {children}
      </Text>
    </Pressable>
  );
}
