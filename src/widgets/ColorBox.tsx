import React from "react";

interface ColorBoxProps {
  isDisabled: boolean;
}

/*
 * This is an example of a class component, the "old way" (but still very much supported!) of
 * making components, which a more familiar lifecycle and class functions, no hooks!
 */
export default class ColorBox extends React.Component<ColorBoxProps, any> {
  constructor(props: ColorBoxProps, state: any) {
    super(props, state);
  }

  render(): React.ReactNode {
    const { isDisabled } = this.props;

    return (
      <span style={{
        backgroundColor: isDisabled ? '#aa0099' : '#cccccc',
        color: isDisabled ? 'white' : 'black',
        padding: '5px',
      }}>
        THIS IS A SPAN
      </span>
    );
  }
}
