import css from './Error.module.css';
import { useSelector } from 'react-redux';
import { getError } from '../../redux/contactsSlice';

export const Error = () => {
  const error = useSelector(getError);
  return <p className={css['error']}>{error}</p>;
};

export default Error;
