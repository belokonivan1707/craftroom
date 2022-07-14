import React from 'react';

export const Banner = () => {
  const [text, setText] = React.useState('0');
  const greeting = React.useMemo(() => ['Hello', 'Mother', 'Fucker'], []);

  const typeWriter = React.useCallback((text: string, i: number, fnCallback: () => void) => {
    if (i < text.length) {
      setText(() => text.substring(0, i + 1));

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  }, []);

  const startTextAnimation = React.useCallback(
    (i: number, array: string[]) => {
      if (array[i] === undefined) {
        setTimeout(() => {
          startTextAnimation(0, array);
        }, 3000);
        return;
      }

      if (i < array[i].length) {
        typeWriter(array[i], 0, () => {
          startTextAnimation(i + 1, array);
        });
      }
    },
    [typeWriter]
  );

  React.useEffect(() => {
    startTextAnimation(0, greeting);
  }, [startTextAnimation, greeting]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
