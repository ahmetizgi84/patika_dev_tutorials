## Patika dev

1. PatikaStore App

- Notlar

* Declerative State Yapısı

Aşağıda `updateCounter` fonksiyonunda state'in önceki ve sonraki değeri gözlenmek istenmiştir.
Her ne kadar `setCounter` fn içinde çağırılsada, o esnada state değişmemiş olacaktır. Dolayısıyla
ikinci `console.log` ifadesinde state'i ilk değeri ile görürüz. Eğer state'in güncellenen değerine
bağlı olarak yeni bir aksiyon almak istersek o halde `useEffect` hook'unu kullanmalıyız.

```js
function updateCounter() {
  console.log("State'in ilk değeri: ", counter);
  setCounter(counter + 1);
  console.log("State'in ikinci değeri: ", counter);
}

useEffect(() => {
  console.log("State'in yeni değeri: ", counter);
}, [conter]); // dependency array içersinde counter state'i dinleniyor...
```

- Clean up fonksiyonu

Komponent yüklendikten sonra çağırılmasını istediğimiz fnları `useEffect` hook'u içerisinde çağırıyorduk.
Peki komponent kaldırıldıktan sonra çağırılmasını istediğimiz fonksiyonları nasıl çalıştıracağız. İşte burada
clean up fonksiyonlar devreye giriyor.

```js
useEffect(() => {
  //Komponent yüklendikten sonra çalıştırılacak olan kısım
  console.log('Komponent yüklendi.');

  // clean up fonksiyonu
  return () => {
    console.log('Komponent kaldırıldıktan sonra çağırılıyor.');
  };
}, []);
```

2. todo App
