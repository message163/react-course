import React from 'react';
import { Tree } from 'xm-test-ui'
import 'xm-test-ui/dist/xm-test-ui.css'
const App: React.FC = () => {
  const data = [
    {
      id: '1',
      name: 'parent-1',
      selected: true,
      children: [
        {
          id: '2',
          name: 'child-2',
          selected: true,
          children: [
            {
              id: '3',
              name: 'child-3',
              selected: true,
            }
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'parent-4',
      selected: true,
      children: [
        {
          id: '5',
          name: 'child-5',
          selected: true,
          children: [
            {
              id: '6',
              name: 'child-6',
              selected: true,
            }
          ]
        }
      ]
    }
  ]
  return (
    <>
      <Tree  onChange={console.log} data={data}></Tree>
    </>
  );
}

export default App;