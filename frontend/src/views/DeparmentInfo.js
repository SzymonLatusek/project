import { useParams } from 'react-router-dom';
import { Container, Text, Accordion, Anchor } from '@mantine/core';
import { IDepartmentData } from '../exampleData/IDepartmentData';
import { IRoomsData } from '../exampleData/IRoomsData';
import { IconHome2, IconPhoneCall, IconPlus } from '@tabler/icons';

export default function DepartmentInfo(){
    const { name } = useParams();

    console.log(IRoomsData)
    return(
        <Container size="xs" px="xs" sx={{textAlign: "center"}}>
            {
                Object.values(IDepartmentData).map(item =>{
                    if(item.SHORT_NAME === name) {
                        return (
                            <>
                                <h2>{item.NAME}</h2>
                                <h4>{item.DESCRIPTION}</h4>
                                <Text weight={100}>Właściciel: {item.FIRM}</Text><br />
                                <Text><IconHome2 size={20} />{item.ADDRESS}</Text><br />
                                <Text><IconPhoneCall size={20} />{item.PHONE}</Text><br />
                            </>
                        )
                    }
                    else return null
                })
            }
        <h2>Pomieszczenia</h2>
        <Accordion variant="separated" radius="lg" chevronPosition="left" disableChevronRotation transitionDuration={1000} chevron={<IconPlus size={16} />}
        sx={{
            '[data-active="true"] svg': {
              transform: 'rotate(45deg)',
            },
        }}>
          {
            Object.values(IRoomsData).map(item =>(
                <Accordion.Item value={item.NUMBER}>
                <Accordion.Control w sx={{textAlign: "center"}}>Sala nr. {item.NUMBER}, {item.MAX_PERSON} osobowa, {item.TYPE}</Accordion.Control>
                <Accordion.Panel>{item.DESCRIPTION}<br />
                    <Text weight={200}>Wymiary: (szerokość x długość x wysokość) {item.WIDTH} x {item.LENGTH} x {item.HEIGHT} </Text><br />
                    <Anchor href={`/room/${item.NUMBER}`} target="_blank">
                        Zobacz szczegóły
                    </Anchor>
                </Accordion.Panel>
                </Accordion.Item>
            ))
          }
      </Accordion>
    </Container>
    )

}