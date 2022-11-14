import { useParams } from 'react-router-dom';
import { Container, Text } from '@mantine/core';
import { IDepartmentData } from '../exampleData/IDepartmentData';
import { IconHome2, IconPhoneCall } from '@tabler/icons';

export default function DepartmentInfo(){
    const { name } = useParams();

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
        </Container>
    )

}