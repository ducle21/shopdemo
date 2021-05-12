import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBiRJb8zyUyH290Gy4AzYHXf9p8ts-ojjg",
  authDomain: "fir-1999-c29c2.firebaseapp.com",
  databaseURL: "https://fir-1999-c29c2.firebaseio.com",
  projectId: "fir-1999-c29c2",
  storageBucket: "fir-1999-c29c2.appspot.com",
  messagingSenderId: "654940819507",
  appId: "1:654940819507:web:fe2f9a6b9cdbbb5a2f9346",
  measurementId: "G-DZ25VQLRG4"
};

firebase.initializeApp(firebaseConfig)

export const NodeDataUser =  firebase.database().ref('User');
export const NodeDataProduct =  firebase.database().ref('Product');
export const Sale = firebase.database().ref('Sale')
export const AlterUserCart = (id,cart)=>{
          var string = 'User/' + id + '/Cart';
          var DataOneUser =  firebase.database().ref(string);
          DataOneUser.push(cart)
        }
export const AlterCountUserCart = (id,key,idProduct,count)=>{
          var string = 'User/' + id + '/Cart/' + key;
          var DataOneUser =  firebase.database().ref(string);
          DataOneUser.set({
            id : idProduct,
            count : count
          })
        }
export const DropCart = (id,key)=>{
          var string = 'User/' + id + '/Cart/'
          var DataOneUser =  firebase.database().ref(string);
          DataOneUser.child(key).remove();
}

export const DropAllCart = (id)=>{
          var string = 'User/' + id 
          var DataOneUser =  firebase.database().ref(string);
          DataOneUser.child('Cart').remove();
}



export const GetData = (ProductsToken,product) =>{
      let stt = 0
      product.forEach(item =>{
      const style = item.val().Style;
      const key = item.key;
      const productname = item.val().ProductName;
      const price = item.val().Price;
      const trademark = item.val().TradeMark;
      const image = item.val().Image;
      const detail = item.val().Detail;
      switch(style){
        case 'Cpu' :           
          const core = item.val().Core;
          const threading = item.val().Threading;
          const socket = item.val().Socket;
          const loai = item.val().Loai;
          ProductsToken.push({
              id : key,
              stt : stt,
              productname : productname,
              price : price,
              trademark : trademark,
              image : image,
              core : core,
              threading : threading,
              socket : socket ,
              loai : loai,
              style : style,
              detail : detail
          });
          stt ++;
          break;
        case 'Gpu' :
          const dong = item.val().Dong;
          const vram = item.val().Vram;
          ProductsToken.push({
              id : key,
              stt : stt,
              productname : productname,
              price : price,
              trademark : trademark,
              image : image,
              dong : dong,
              vram : vram,
              style : style,
              detail : detail
          });
          stt ++;
          break;
        case 'Ram' :
          const bus = item.val().Bus;
          const size = item.val().Size;
          ProductsToken.push({
              id : key,
              stt : stt,
              productname : productname,
              price : price,
              trademark : trademark,
              image : image,
              bus : bus ,
              size : size,
              style : style,
              detail : detail
          });
          stt ++;
          break; 
        case 'MainBoard' :
          const chipset = item.val().Chipset;
          const socketM = item.val().Socket;
          ProductsToken.push({
              id : key,
              stt : stt,
              productname : productname,
              price : price,
              trademark : trademark,
              image : image,
              chipset : chipset,
              socketM : socketM,
              style: style,
              detail : detail
          });                
          stt ++;
          break; 
        default :
          break;
      }

      }) 
}




firebase.analytics();