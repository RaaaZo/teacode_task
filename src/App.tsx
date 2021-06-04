import Layout from './components/Layout';
import ListOfContacts from './components/ListOfContacts';
import ContactsProvider from './providers/ContactsProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContactsProvider>
        <CssBaseline />
        <Layout>
          <ListOfContacts />
        </Layout>
      </ContactsProvider>
    </ThemeProvider>
  );
}

export default App;
