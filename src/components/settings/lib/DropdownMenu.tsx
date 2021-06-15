import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';
import { kebabCase } from 'lodash';
import { AlignItems, FlexDirection, FlexWrap, JustifyContent } from 'types';

type PropertyName = 'justifyContent' | 'alignItems' | 'flexDirection' | 'flexWrap';

interface DropdownMenuProps {
  property: PropertyName;
  value: JustifyContent | AlignItems | FlexDirection | FlexWrap;
  onChange: (p: PropertyName) => (e: React.ChangeEvent<{ value: unknown }>) => void;
  helperText?: string;
}

export function DropdownMenu({ property, value, onChange, helperText }: DropdownMenuProps) {
  const styles = useStyles();
  const label = kebabCase(property);

  return (
    <FormControl variant="outlined" margin="dense" className={styles.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select fullWidth label={label} value={value} onChange={onChange(property)}>
        {possibleValues[property].map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

const useStyles = makeStyles({
  formControl: {
    display: 'block',
    marginBottom: 20,
  },
});

const possibleValues: Record<PropertyName, string[]> = {
  justifyContent: [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ],
  alignItems: ['flex-start', 'flex-end', 'center'],
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
};
