import styled from '@emotion/styled';
import { Watch } from 'react-loader-spinner';
import { useFetchContactsQuery } from 'components/API/api-service';
import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

const WatchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactList = () => {
  const { data: contacts, isFetching, isError } = useFetchContactsQuery();

  return (
    <>
      {isFetching && (
        <WatchWrapper>
          <Watch color="#00BFFF" height={200} width={200} ariaLabel="loading" />
        </WatchWrapper>
      )}
      {!isFetching && !isError && contacts && (
        <ul className={s.list}>
          {[...contacts]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => {
              return <ContactItem contact={{ id, name, number }} key={id} />;
            })}
        </ul>
      )}
      {isError && <h1>Data are not found</h1>}
    </>
  );
};

export default ContactList;
