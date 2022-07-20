import React from 'react';
import { TextField, Box } from '@mui/material';

const PIN_MIN_VALUE = 0;
const PIN_MAX_VALUE = 9;

interface IProps {
  pin: (number | undefined)[];
  setPin: (value: (number | undefined)[]) => void;
  disabled?: boolean;
}

export const PinCode: React.FC<IProps> = ({ pin, setPin, disabled }) => {
  const inputRefs = React.useRef<HTMLInputElement[]>([]);

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  const removeValuesFromArray = (valuesArray: string[], value: string) => {
    const valueIndex = valuesArray.findIndex(entry => entry === value);
    if (valueIndex === -1) {
      return;
    }
    valuesArray.splice(valueIndex, 1);
  };

  const changePinFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex];
    if (ref) {
      ref.focus();
    }
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const previousValue = target.defaultValue;
    const valuesArray = target.value.split('');
    removeValuesFromArray(valuesArray, previousValue);
    const value = valuesArray.pop();
    if (value === undefined) {
      return;
    }
    const pinNumber = Number(value.trim());
    if (Number.isNaN(pinNumber) || value.trim().length === 0) {
      return;
    }

    if (pinNumber >= PIN_MIN_VALUE && pinNumber <= PIN_MAX_VALUE) {
      onPinChanged(pinNumber, index);
      if (index < 6 - 1) {
        changePinFocus(index + 1);
      }
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.nativeEvent.code !== 'Backspace') {
      return;
    }

    if (pin[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 300,
        width: '100%',
        m: '0 auto'
      }}
    >
      {Array.from(
        {
          length: 6
        },
        (_, index) => (
          <TextField
            sx={{
              width: 46
            }}
            inputProps={{
              style: {
                fontSize: 32,
                padding: '0 14px'
              }
            }}
            className="input-number"
            variant="outlined"
            key={index}
            type="number"
            disabled={disabled}
            onKeyDown={event => onKeyDown(event, index)}
            onChange={event => onChange(event, index)}
            value={pin[index] ?? ''}
            InputLabelProps={{ shrink: false }}
            inputRef={el => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
          />
        )
      )}
    </Box>
  );
};
