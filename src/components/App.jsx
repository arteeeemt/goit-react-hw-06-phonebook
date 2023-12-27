import { Provider } from 'react-redux'; // Импортируйте Provider
import {store} from 'red/store.js'; // Импортируйте ваш созданный Redux-стор

import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";

export const App = () => (
  <Provider store={store}> {/* Оберните приложение в Provider */}
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  </Provider>
);