// @flow
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 80px;
  margin: 0;
`;

interface Props {
  displayName: string;
  onChange: any => void;
  value: any;
  type: 'number' | 'text';
}

const LabeledInput = ({ displayName, onChange, value, type }: Props) => (
  <div>
    <div>
      <label>{displayName}</label>
    </div>
    <div>
      <Input
        type={type || 'text'}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </div>
  </div>
);

export default LabeledInput;
