import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonCta extends Schema.Component {
  collectionName: 'components_button_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface SelectLocalSelect extends Schema.Component {
  collectionName: 'components_select_local_selects';
  info: {
    displayName: 'localSelect';
    description: '';
  };
  attributes: {
    locale: Attribute.String;
    code: Attribute.String;
    flag: Attribute.Media;
  };
}

export interface SubmenuSubmenu extends Schema.Component {
  collectionName: 'components_submenu_submenus';
  info: {
    displayName: 'submenu';
    icon: 'apps';
    description: '';
  };
  attributes: {
    element: Attribute.Component<'button.cta'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.cta': ButtonCta;
      'select.local-select': SelectLocalSelect;
      'submenu.submenu': SubmenuSubmenu;
    }
  }
}
