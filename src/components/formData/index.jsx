import React, { useReducer, createContext } from 'react';

import reducer from './reducer';

const FormDataContext = createContext(null);

const initialState = {
  data: {
    istMehrfamilienhaus: true,
    hatSammelheizung: true,
    hatBad: true,
    hatPersonenaufzug: false,
    istSozialwohnung: false,
    istOeffentlichModernisiert: false,
    istWohnheim: false,
    istBezugsfertigNach2014: false,
    istUeberlassungDringenderWohnbedarf: false,
    istModernisierung: false,
    wohnflaeche: null,
    nettokaltmiete: null,
    baujahr: 'vor 1918',
    adresseStrasse: null,
    adresseHausnummer: null
  },

  extraProps: {},

  errors: {}
};

const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormDataContext.Provider value={{ state, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext };

export default FormDataProvider;
