import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import { Container, MainTitle, Title } from './App.styled';

function App() {
  return (
    <Container>
      <MainTitle>Phone Book</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <ContactList />
    </Container>
  );
}

export { App };
