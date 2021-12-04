import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
}

const ProgressBar: React.FC<Props> = ({ title }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Content>
  </Styled.ProgressBar>
);

export default ProgressBar;
