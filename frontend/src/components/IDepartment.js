import { Accordion, Anchor } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { IDepartmentData } from '../exampleData/IDepartmentData';

export default function IDepartment() {
  return (
    <>
      <h2>
        Wydziały
      </h2>
      <Accordion variant="separated" radius="lg" chevronPosition="left" disableChevronRotation transitionDuration={1000} chevron={<IconPlus size={16} />}
        sx={{
            '[data-active="true"] svg': {
              transform: 'rotate(45deg)',
            },
        }}>
          {Object.values(IDepartmentData).map(item =>(
            <Accordion.Item value={item.SHORT_NAME}>
              <Accordion.Control>{item.NAME}</Accordion.Control>
              <Accordion.Panel>{item.DESCRIPTION}<br />
                <Anchor href={`/department/${item.SHORT_NAME}`} target="_blank">
                    Zobacz szczegóły
                </Anchor>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
      </Accordion>
    </>
  );
}