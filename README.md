# Patika dev

## PatikaStore App

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

## todo App

3. Custom Hook

```js
import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, data, error};
}

export default useFetch;
```

custom hook'un kullanımı:

```js
import useFetch from './hooks/useFetch'

function App(){
  const {error, loading, data} = useFetch(Config.API_URL)
  console.log("render")
  console.log({loading, data: data.length, error})
  console.log("_______________________________________")
  .
  .
  .
}
```

## Tarifka
