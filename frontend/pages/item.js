import SingleItem from '../components/SingleItem';
import { SINGLE_ITEM_QUERY } from '../components/SingleItem';

const Item = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
