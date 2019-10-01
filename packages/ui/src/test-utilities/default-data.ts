import { User } from '@centrifuge/gateway-lib/models/user';
import { Contact } from '@centrifuge/gateway-lib/models/contact';
import { AttrTypes } from '@centrifuge/gateway-lib/models/schema';

export const defaultUser: User = {
  name: 'Default User',
  account: '0xDefaultAccount',
  email: 'default@user.com',
  invited: true,
  enabled: true,
  permissions: [],
  schemas: ['first_schema', 'second_schema'],
};

export const defaultContacts: Contact[] = [
  {
    name: 'First Contact',
    address: '0xFirstContact',
  },
  {
    name: 'Second Contact',
    address: '0xSecondContact',
  },
  {
    name: 'Third Contact',
    address: '0xThirdContact',
  },

];


export const defaultSchemas = [
  {
    name: 'first_schema',
    registries: [
      {
        label: 'First Registry',
        address: '0xFirstRegistry',
        proofs: [
          'firstRegistryFirstProof',
          'firstRegistrySecondProof',
        ],
      },
      {
        label: 'Second Registry',
        address: '0xSecondRegistry',
        proofs: [
          'secondRegistryFirstProof',
          'secondRegistrySecondProof',
        ],
      },
    ],
    formFeatures: {
      fundingAgreement: true,
      comments: true,
    },
    attributes: [
      {
        name: 'reference_id',
        label: 'Reference Id',
        type: AttrTypes.STRING,
      },
      {
        name: 'amount',
        label: 'Amount',
        type: AttrTypes.DECIMAL,
        options: ['1', '2', '3'],
      },
      {
        name: 'index',
        label: 'Index',
        type: AttrTypes.INTEGER,
      },
      {
        name: 'percent',
        label: 'Percent',
        type: AttrTypes.PERCENT,
      },
      {
        name: 'date',
        label: 'Some Date',
        type: AttrTypes.TIMESTAMP,
      },
      {
        name: 'customer',
        label: 'Customer',
        type: AttrTypes.STRING,
      },
    ],
  },
  {
    name: 'second_schema',
    registries: [],
    attributes: [
      {
        name: 'reference_id',
        label: 'Reference Id',
        type: AttrTypes.STRING,
      },
      {
        name: 'amount',
        label: 'Amount',
        type: AttrTypes.DECIMAL,
      },
      {
        name: 'customer',
        label: 'Customer',
        type: AttrTypes.STRING,
      },
    ],
  },
];
