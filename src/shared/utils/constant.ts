// All constants are here

import { appIcons, appImages } from "../assets";

export const APP_CONST = {
  
   card_data : [
     
      {
        id: 2,
        Image: require('../../assets/Images/DigitalCard2.png'),
        name: 'SHAHAB ABID',
        // Acc: '1234 **** **** 1121',
        // BankName: 'IBank',
      },
      {
        id: 3,
        Image: require('../../assets/Images/DigitalCard3.png'),
        name: 'SHAHAB ABID',
        Acc: '1234 **** **** 1121',
        BankName: 'I-Bank',
      },
      {
        id: 4,
        Image: require('../../assets/Images/DigitalCard4.png'),
        name: 'SHAHAB ABID',
        Acc: '1234 **** **** 1121',
        BankName: 'I-Bank',
      },
    ],

    btns_data: [
      {id:1,  Image: appIcons.Account, tittle: 'Account and Card'},
      {id:2,  Image: appIcons.Transfer, tittle: 'Transfer'},
      {id:3,  Image: appIcons.Withdraw, tittle: 'Withdraw'},
      {id:4,  Image: appIcons.Mobileprepaid, tittle: 'Mobile prepaid'},
      {id:5,  Image: appIcons.Paythebill, tittle: 'Pay the bill'},
      {id:6,  Image: appIcons.Saveonline, tittle: 'Save online'},
      {id:7,  Image: appIcons.Creditcard, tittle: 'Credit card'},
      {id:8,  Image: appIcons.Transactionreport, tittle: 'Transaction report'},
      {id:9,  Image: appIcons.Beneficiary, tittle: 'Beneficiary'},

    ],

    searchscreen_data: [
      {id:1, Image: appImages.Search1, tittle: 'Branch', tittle2: 'Search for branch', },
      {id:2, Image: appImages.Search2, tittle: 'Interest rate', tittle2: 'Search for interest rate', },
      {id:3, Image: appImages.Search3, tittle: 'Exchange rate', tittle2: 'Search for exchange rate', },
      {id:4, Image: appImages.Search4, tittle: 'Exchange', tittle2: 'Exchange amount of money', },
    ]
};
