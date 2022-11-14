import { useParams } from 'react-router-dom';

export function ItemInfo(){

const { name } = useParams();

return(
    <div>{name}</div>
)
}

export default ItemInfo;