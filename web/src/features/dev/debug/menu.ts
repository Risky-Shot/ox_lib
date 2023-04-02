import { debugData } from '../../../utils/debugData';
import { MenuSettings } from '../../../typings';

export const debugMenu = () => {
  debugData<MenuSettings>([
    {
      action: 'setMenu',
      data: {
        position: "top-right",
        title: 'Vehicle garage',
        items: [
          { label: 'Option 1', icon: 'heart' },
          {
            label: 'Option 2',
            icon: 'basket-shopping',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
            checked: true,
          },
          {
            label: 'Vehicle class',
            values: ['pogchamp', 'nice champ', { label: 'POGGERS', description: 'CHAMPPERS' }],
            icon: 'tag',
            description: 'Side scroll general description',
          },
          {
            label: 'Oil Level',
            progress: 30,
            icon: 'oil-can',
            description: 'Remaining Oil: 30% hasdha dhagdshugd adhgagsd ahdgahgsd adhjgahsdghaghdsa ahsgdha',
          },
          {
            label: 'Durability',
            progress: 80,
            icon: 'car-side',
            description: 'Durability: 80%',
            colorScheme: 'rdr.2',
            iconColor: '#d41936',
          },
          { label: 'Option 1' },
          { label: 'Option 2' },
          {
            label: 'Vehicle class',
            values: ['Nice', 'Super nice', 'Extra nice'],
            defaultIndex: 1,
          },
          { label: 'Option 1' },
          { label: 'Option 2' },
          {
            label: 'Vehicle class',
            values: ['Nice', 'Super nice', 'Extra nice'],
          },
        ],
      },
    },
  ]);
};
