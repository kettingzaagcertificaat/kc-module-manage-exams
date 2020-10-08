import React from 'react';

import { Switch, Route, HashRouter } from 'react-router-dom';
import { FormatErrorParams } from 'yup';
import * as yup from 'yup';

import { Alert } from '@erkenningen/ui/components/alert';
import { GrowlProvider } from '@erkenningen/ui/components/growl';
import { ThemeKC } from '@erkenningen/ui/layout/theme';
import { ThemeContext } from '@erkenningen/ui/layout/theme';

import CourseEdit from './courses/edit/CourseEdit';
import CourseReady from './courses/ready/CourseReady';
import { UserContext, useAuth, Roles, hasOneOfRoles } from './shared/Auth';
import CourseNew from 'courses/edit/CourseNew';
import CourseList from 'courses/list/CourseList';

// @TODO Move to lib?
yup.setLocale({
  mixed: {
    default: 'Ongeldig',
    required: 'Verplicht',
    notType: (params: FormatErrorParams) => {
      if (!params.value) {
        return 'Verplicht';
      }

      switch (params.type) {
        case 'number':
          return 'Moet een getal zijn';
        case 'date':
          return 'Verplicht';
        default:
          return 'Ongeldige waarde';
      }
    },
  },
  string: {
    email: 'Ongeldig e-mailadres',
    min: 'Minimaal ${min} karakters', // eslint-disable-line no-template-curly-in-string
    max: 'Maximaal ${max} karakters', // eslint-disable-line no-template-curly-in-string
  },
});

const App: React.FC<{}> = (props) => {
  const auth = useAuth();

  if (auth.loading) {
    return <p>Gegevens worden geladen...</p>;
  }

  if (auth.error) {
    return (
      <Alert type="danger">
        Er is een fout opgetreden bij het ophalen van de accountgegevens. Probeer het nog een keer
        of neem contact op met de helpdesk.
      </Alert>
    );
  }

  if (!auth.authenticated) {
    return <Alert type="danger">U moet ingelogd zijn om een examen te plannen.</Alert>;
  }

  if (!hasOneOfRoles([Roles.Rector, Roles.ContactpersoonExamenInstelling], auth.my?.Roles)) {
    return <Alert type="danger">U heeft geen toegang tot deze module.</Alert>;
  }

  return (
    <HashRouter>
      <UserContext.Provider value={auth.my}>
        <ThemeContext.Provider value={{ mode: 'admin' }}>
          <GrowlProvider>
            <ThemeKC>
              <Switch>
                <Route path="/wijzig/:id" component={CourseEdit} />
                <Route path="/nieuw" component={CourseNew} />
                <Route path="/gereed/:examVersionId" component={CourseReady} />
                <Route path="/overzicht" component={CourseList} />
                <Route path="/" component={CourseNew} />
                <Route>
                  Route not found, please set a route in the url hash (e.g. /overzicht, /wijzig/1234
                  or /nieuw)
                </Route>
              </Switch>
            </ThemeKC>
          </GrowlProvider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
