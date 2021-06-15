import {
  FormControl,
  FormHelperText,
  InputAdornment,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
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
  const [unit, setUnit] = React.useState('px');
  const handleUnitChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setUnit(e.target.value as string);
  return (
    <FormControl variant="outlined" margin="dense" className={styles.formControl}>
      <OutlinedInput
        value={value}
        onChange={onChange(property)}
        endAdornment={<UnitPicker unit={unit} onChange={handleUnitChange} />}
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
  'MuiInput-underline': {
    '&::before, &::after': {
      all: 'unset',
    },
  },
});

interface UnitPickerProps {
  unit: string;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}

function UnitPicker({ unit, onChange }: UnitPickerProps) {
  const styles = useStyles();

  return (
    <InputAdornment position="end">
      <Select value={unit} onChange={onChange} className={styles['MuiInput-underline']}>
        {validCssUnits.map((cssUnit) => (
          <MenuItem key={cssUnit} value={cssUnit}>
            {cssUnit}
          </MenuItem>
        ))}
      </Select>
    </InputAdornment>
  );
}

const validCssUnits = ['px', 'rem', 'em'];
