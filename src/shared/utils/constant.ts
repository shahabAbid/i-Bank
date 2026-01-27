// All constants are here

import { appIcons, appImages } from "../assets";

export const APP_CONST = {
  
   card_data : [
     
      {
        id: 1,
        Image: require('../../assets/Images/DigitalCard2.png'),
        name: 'SHAHAB ABID',
        // Acc: '1234 **** **** 1121',
        // BankName: 'IBank',
      },
      {
        id: 2,
        Image: require('../../assets/Images/DigitalCard3.png'),
        name: 'SHAHAB ABID',
        Acc: '1234 **** **** 1121',
        BankName: 'I-Bank',
      },
      {
        id: 3,
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
      {id:1, Image: appImages.Search1, tittle: 'Branch', tittle2: 'Search for branch', Screen: 'Branch' },
      {id:2, Image: appImages.Search2, tittle: 'Interest rate', tittle2: 'Search for interest rate', Screen: 'Interestrate' },
      {id:3, Image: appImages.Search3, tittle: 'Exchange rate', tittle2: 'Search for exchange rate', Screen: 'Exchangerate'},
      {id:4, Image: appImages.Search4, tittle: 'Exchange', tittle2: 'Exchange amount of money', Screen: 'Exchange'},
    ],

    interestrate_data: [
      {id:1, tittle: 'Individual customers', deposite: '1m', interestrate: '4.5%'},
      {id:2, tittle: 'Individual customers', deposite: '2m', interestrate: '4.5%'},
      {id:3, tittle: 'Individual customers', deposite: '4m', interestrate: '4.5%'},
      {id:4, tittle: 'Individual customers', deposite: '7m', interestrate: '4.5%'},
      {id:5, tittle: 'Individual customers', deposite: '8m', interestrate: '4.5%'},
      {id:6, tittle: 'Individual customers', deposite: '12m', interestrate: '4.5%'},
      {id:7, tittle: 'Corporate customers', deposite: '1m', interestrate: '4.5%'},
      {id:8, tittle: 'Corporate customers', deposite: '2m', interestrate: '4.5%'},
      {id:9, tittle: 'Corporate customers', deposite: '4m', interestrate: '4.5%'},
      {id:10, tittle: 'Corporate customers', deposite: '7m', interestrate: '4.5%'},
      {id:11, tittle: 'Corporate customers', deposite: '8m', interestrate: '4.5%'},

    ],

    
};


    
