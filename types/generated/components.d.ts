import type { Schema, Attribute } from '@strapi/strapi';

export interface AdressenAdressen extends Schema.Component {
  collectionName: 'components_adressen_adressens';
  info: {
    displayName: 'Adressen';
    icon: 'bulletList';
  };
  attributes: {
    Strasse: Attribute.Relation<
      'adressen.adressen',
      'oneToOne',
      'api::street.street'
    >;
    Hausnummer: Attribute.String;
    von_Jahr: Attribute.Integer;
    bis_Jahr: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'adressen.adressen': AdressenAdressen;
    }
  }
}
