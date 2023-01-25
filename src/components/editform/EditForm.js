import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

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

  return (
    <>
      <ReactFormBuilder url='path/to/GET/initial.json' toolbarItems={items} saveUrl='path/to/POST/built/form.json' />
    </>
  )
}
