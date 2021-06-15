import {
  FormControl,
  FormHelperText,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import * as React from 'react';

type PropertyName = 'gap';

interface InputWithUnitsProps {
  property: PropertyName;
  value: string;
  onChange: (p: PropertyName) => (e: React.ChangeEvent<{ value: unknown }>) => void;
  helperText?: string;
}

export function InputWithUnits({ property, value, onChange, helperText }: InputWithUnitsProps) {
  const styles = useStyles();

  return (
    <FormControl variant="outlined" margin="dense" className={styles.formControl}>
      <OutlinedInput
        value={value}
        onChange={onChange(property)}
        endAdornment={<InputAdornment position="end">px</InputAdornment>}
        labelWidth={0}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

const useStyles = makeStyles({
  formControl: {
    display: 'block',
    marginBottom: 20,
  },
});
