import * as React from 'react';
import { Header } from '@fluentui/react-northstar';
import { ComponentInfo } from '../componentInfo/types';
import { JSONTreeElement } from './types';

export type ComponentDescriptionProps = {
  selectedJSONTreeElement: JSONTreeElement;
  componentInfo: ComponentInfo;
};

const ComponentDescription: React.FunctionComponent<ComponentDescriptionProps> = ({
  selectedJSONTreeElement,
  componentInfo,
}) => {
  if (!componentInfo) {
    return null;
  }

  return (
    <div>
      <Header as="h2" styles={{ display: 'inline-block', margin: 0 }}>
        {componentInfo.displayName}
      </Header>{' '}
      <code style={{ float: 'right' }}>uuid: {selectedJSONTreeElement.uuid}</code>
      <br />
      <span style={{ opacity: 0.5 }}>{componentInfo.docblock.description}</span>
    </div>
  );
};

export default ComponentDescription;
