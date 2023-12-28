import { Provider } from 'react-redux';
import {store} from 'red/store.js'; 

import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";

export const App = () => (
  <Provider store={store}> {}
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  </Provider>
);