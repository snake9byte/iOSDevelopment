export const typesUI = (constName, id) => {
  switch (constName) {
    case "colors": return `const ${id} =
    'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
`;
    case "collapseVariants": return `const ${id} =
    'bordered'
  | 'default'
  | 'filled'
  | 'splitted';
`;
    case "weights": return `const ${id} =
    'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xs';
`;
    case "backgrounds": return `const  ${id} =
    'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error',
  | 'gradients_text'
  | 'gradients_primary'
  | 'gradients_secondary'
  | 'gradients_success'
  | 'gradients_warning'
  | 'gradients_error'
`;
    case "variants": return `const ${id} =
    'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
`;
    case "buttonVariants": return `const ${id} =
    'filled'
  | 'outlined'
  | 'text'
  | 'flat'
  | 'shadow';
`;
    case "cardsVariants": return `const ${id} =
    'shadow',
  | 'bordered',
  | 'dense';
`;
    case "allColors": return `const ${id} =
    'blue100',
  | 'blue200',
  | 'blue300',
  | 'blue400',
  | 'blue500',
  | 'blue600',
  | 'blue700',
  | 'blue800',
  | 'blue900',
  | 'cyan100',
  | 'cyan200',
  | 'cyan300',
  | 'cyan400',
  | 'cyan500',
  | 'cyan600',
  | 'cyan700',
  | 'cyan800',
  | 'cyan900',
  | 'gray100',
  | 'gray200',
  | 'gray300',
  | 'gray400',
  | 'gray500',
  | 'gray600',
  | 'gray700',
  | 'gray800',
  | 'gray900',
  | 'green100',
  | 'green200',
  | 'green300',
  | 'green400',
  | 'green500',
  | 'green600',
  | 'green700',
  | 'green800',
  | 'green900',
  | 'orange100',
  | 'orange200',
  | 'orange300',
  | 'orange400',
  | 'orange500',
  | 'orange600',
  | 'orange700',
  | 'orange800',
  | 'orange900',
  | 'purple100',
  | 'purple200',
  | 'purple300',
  | 'purple400',
  | 'purple500',
  | 'purple600',
  | 'purple700',
  | 'purple800',
  | 'purple900',
  | 'pink100',
  | 'pink200',
  | 'pink300',
  | 'pink400',
  | 'pink500',
  | 'pink600',
  | 'pink700',
  | 'pink800',
  | 'pink900',
  | 'red100',
  | 'red200',
  | 'red300',
  | 'red400',
  | 'red500',
  | 'red600',
  | 'red700',
  | 'red800',
  | 'red900',
  | 'yellow100',
  | 'yellow200',
  | 'yellow300',
  | 'yellow400',
  | 'yellow500',
  | 'yellow600',
  | 'yellow700',
  | 'yellow800',
  | 'yellow900',
  | 'background',
  | 'primary',
  | 'primary_1',
  | 'primary_2',
  | 'primary_3',
  | 'primary_4',
  | 'primary_5',
  | 'secondary',
  | 'secondary_1',
  | 'secondary_2',
  | 'secondary_3',
  | 'secondary_4',
  | 'secondary_5',
  | 'succe_1',
  | 'success_1',
  | 'success_2',
  | 'success_3',
  | 'success_4',
  | 'success_5',
  | 'warning',
  | 'warning_1',
  | 'warning_2',
  | 'warning_3',
  | 'warning_4',
  | 'warning_5',
  | 'error',
  | 'error_1',
  | 'error-2',
  | 'error_3',
  | 'error_4',
  | 'error_5',
  | 'gray',
  | 'gray_1',
  | 'gray_2',
  | 'gray_3',
  | 'gray_4',
  | 'gray_5';
`;
    default: return false;
  }
}