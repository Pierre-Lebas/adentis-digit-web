import React from 'react';
import './editform.css';
import ReactDOM from 'react-dom';
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { Link } from 'react-router-dom';

import App from './app';
import AppComp from './AppComp';
import DemoBar from './demobar';
import * as serviceWorker from './serviceWorker';
import * as variables from './variables';
import { createRoot } from 'react-dom/client';


export default function EditForm() {
  var items = [{
    key: 'Header',
    name: 'Texte d\'en tête',
    icon: 'fa fa-header',
    static: true,
    content: 'Écrire texte...'
  },
  {
    key: 'Paragraph',
    name: 'Paragraphe',
    static: true,
    icon: 'fa fa-paragraph',
    content: 'Écrire texte...'
  }];
  
  // const formbuilder = document.getElementById('form-builder');
  // const root = createRoot(formbuilder); // createRoot(container!) if you use TypeScript
  // root.render(
  //   <>
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>,
  //   </>
  // );

  return (
      <div className="editform-component" >
        {/* <DemoBar variables={variables} />
        <App />
        <ReactFormBuilder url='path/to/GET/initial.json' toolbarItems={items} saveUrl='path/to/POST/built/form.json'/> */}
        <AppComp></AppComp>
        <Link to="/">Annuler</Link>
      </div>
  )
}
