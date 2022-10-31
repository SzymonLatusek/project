import { useParams } from 'react-router-dom';

export function SubjectInfo(){

const { name } = useParams();

return(
    <div>{name}</div>
)
}

export default SubjectInfo;