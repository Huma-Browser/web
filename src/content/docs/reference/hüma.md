---
title: "Hüma Tarayıcısı Referans Rehberi"
description: Hüma için referans rehberi.
---

### **Giriş**
Hüma, Firefox tabanlı açık kaynaklı bir web tarayıcısıdır. Hızlı, güvenli ve özelleştirilebilir yapısıyla kullanıcılara en iyi tarayıcı deneyimini sunar. Bu rehber, Hüma tarayıcısının özelliklerini, API işlevlerini ve kullanım detaylarını içermektedir.

### **Genel Bakış**
- **Tarayıcı Adı:** Hüma
- **Taban:** Firefox (Gecko motoru)
- **Geliştirici:** [GitHub - Hüma Projesi](https://github.com/VastSea0/Huma)
- **Lisans:** Açık Kaynak (Mozilla Public License)

### **Özellikler**
- **Dikey Sekmeler Desteği:** Hüma Sekmeleri eklentisi ile dikey sekme düzeni.
- **Özelleştirilebilir Arayüz:** Kullanıcı dostu, kişiselleştirilebilir tema seçenekleri.
- **Güvenlik:** En güncel güvenlik protokolleri ve gizlilik araçları.

### **API Referansı**
#### **1. Tarayıcı Arayüz API’si**
- **openNewTab(url):**
  - **Tanım:** Belirtilen URL’yi yeni bir sekmede açar.
  - **Parametreler:** `url` (string) – Açılacak web sayfasının URL’si.
  - **Geri Dönüş Değeri:** `tab` – Yeni açılan sekmenin nesnesi.
  - **Örnek Kullanım:**
    ```javascript
    var newTab = openNewTab("https://www.example.com");
    ```

- **closeTab(tabId):**
  - **Tanım:** Belirtilen sekmeyi kapatır.
  - **Parametreler:** `tabId` (number) – Kapatılacak sekmenin kimliği.
  - **Geri Dönüş Değeri:** `void`
  - **Örnek Kullanım:**
    ```javascript
    closeTab(3);
    ```

#### **2. Kullanıcı Ayarları API’si**
- **setTheme(themeName):**
  - **Tanım:** Belirtilen temayı tarayıcıya uygular.
  - **Parametreler:** `themeName` (string) – Uygulanacak tema adı.
  - **Geri Dönüş Değeri:** `void`
  - **Örnek Kullanım:**
    ```javascript
    setTheme("dark-mode");
    ```

- **getBookmarks():**
  - **Tanım:** Kullanıcının yer imlerini döner.
  - **Parametreler:** Yok.
  - **Geri Dönüş Değeri:** `Array` – Yer imlerinin listesi.
  - **Örnek Kullanım:**
    ```javascript
    var bookmarks = getBookmarks();
    ```

### **Sık Sorulan Sorular (SSS)**
- **Hüma tarayıcısını nasıl özelleştirebilirim?**
  - Hüma, eklentiler ve temalar aracılığıyla geniş ölçüde özelleştirilebilir. Kullanıcılar eklenti mağazasından farklı araçlar ve temalar indirebilirler.

- **Hüma tarayıcısında güvenlik nasıl sağlanıyor?**
  - Hüma, Firefox’un güçlü güvenlik altyapısını kullanır ve en güncel güvenlik yamalarını içerir.

- **Hüma tarayıcısı hangi ekip tarafından geliştiriliyor?**
  - Hüma, Egehan KAHRAMAN tarafından geliştiriyor. Henüz bir geliştirici ekibi yok bu nedenle tek kişi üzerinden geliştiriliyor ancak ilerleyen zamanlarda bir ekibin toplanması düşünülüyor.

- **Hüma tarayıcısında dikey sekmeleri nasıl etkinleştirebilirim?**
  - Hüma Sekmeleri eklentisi Hüma Gezgini eklentisi üzerinden "Hüma Sekmelerini edin" düğmesi ile edinilebilir.

- **Hüma sadece bir tarayıcı değil derken ne kast etmek istiyorsunuz?**
  - Hüma'nın sadece bir tarayıcı olmadığını aynı zamanda bir tepki olduğunu belirtmek istiyoruz. Bu tepki özgürlüğe karışmaya çalışılan şeylere verilen bir tepkidir. Kalıplaşmaya verilen bir tepkidir.

- **Hüma doğa ve küresel ısıma gibi küresel çevre sorunlarına karşı nasıl bir yol izliyor?**
  - Hüma doğayı son derece önemli gören ve her şeyin başlangıcı kabul eden bir felsefeye sahiptir. Doğaya karşı açılan her savaş mağlub olmaya mahkumdur. Bu nedenle doğa ile son derece uyumlu olup; doğanın bize değil, bizim doğaya uyum sağlamamız gerektiğini savunur.

- **Hüma ilk ne zaman yazılmaya başlandı?**
  - Hüma, ilk olarak 2022'de VastSea Browser adında bir deneysel olarak yazılmıştır ancak bu tarayıcı Hüma'nın değerlerini taşımadığından sadece deneysel bir iz olarak kalmıştır. Geçen zamanda ise 2023 yılında tekrardan yazılmaya başlanmış tarayıcı, geçen zamanda değer ve amaçlarını net bir şekilde belirlemiş ve bu yolda ilermeye devam etmiştir.

- **Hüma tarayıcısının amacı nedir?**
  - Hüma tarayıcısı, sadece bir web tarayıcısı olmanın ötesinde, özgürlüğün ve yeniliğin simgesi olarak tasarlanmış bir projedir. Hüma'nın temel amacı, kullanıcılarına özgür bir internet deneyimi sunmaktır. Özgürlüğü savunan Hüma, her koşulda bağımsızlığı ve bireysel kararı önemser. Kalıpların ötesinde, farklı dillerin ve kültürlerin değerini vurgulayan Hüma, Türk destanlarından esinlenerek ismini almıştır. Şeffaflık ilkesini benimseyen ve açık kaynak kodlu olan Hüma, kullanıcılarına güvenilir ve açık bir platform sunar. Hüma, özgürlüğü, bağımsız düşünceyi ve şeffaflığı merkezine alarak, daha iyi bir internet deneyimi sağlamayı hedefler.

### **Kaynaklar**
- **Resmi Hüma Belgeleri:** [Hüma Belgeleri](https://github.com/VastSea0/Huma)
- **Mozilla Developer Network:** [MDN Web Docs](https://developer.mozilla.org/)

### **Topluluk ve Destek**
- **Forum:** [Marstakiler](https://marstakiler.vercel.app) – Hüma tarayıcı topluluğuna katılın ve sorularınıza yanıt bulun.
- **GitHub:** [Hüma Projesi GitHub](https://github.com/VastSea0/Huma) – Kod katkıları ve hata bildirimleri için.
- **Discord** [Hüma Discord](https://discord.gg/ZVHmv9dJRf) - Discord sunucumuza katılın.
---
 