import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDeleteContactMutation } from 'components/API/api-service';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={s.list__item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={e => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export { ContactItem };
