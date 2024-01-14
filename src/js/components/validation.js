import { validateForms } from '../functions/validate-forms';


const rulesService = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Заполните имя!',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const rulesGallery = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Заполните имя!',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];
// const rulesModal = [
//   {
//     ruleSelector: '.input-name',
//     rules: [
//       {
//         rule: 'minLength',
//         value: 2,
//         errorMessage: 'Заполните имя!',
//       },
//       {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Заполните имя!',
//       }
//     ]
//   },
//   {
//     ruleSelector: '.input-tel',
//     tel: true,
//     telError: 'Введите корректный телефон',
//     rules: [
//       {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Заполните телефон!'
//       }
//     ]
//   },
// ];
const afterForm = () => {
};

validateForms('.form--service', rulesService, afterForm);
validateForms('.form--gallery', rulesGallery, afterForm);
// validateForms('.form--modal', rulesModal, afterForm);


