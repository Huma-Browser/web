---
title: "Hüma Tarayıcısı Referans Rehberi"
description: Firefox tabanlı Hüma tarayıcısı için kapsamlı referans rehberi.
---

# Hüma Tarayıcısı Referans Rehberi

## Giriş

Hüma, Firefox'un güçlü altyapısını kullanan özel bir web tarayıcısıdır. Firefox'un WebExtensions API'sini temel alarak, hızlı, güvenli ve özelleştirilebilir bir tarama deneyimi sunar. Bu rehber, Hüma tarayıcısının özelliklerini ve kullanılabilir API'leri detaylandırmaktadır.

## Genel Bakış

- **Tarayıcı Adı:** Hüma
- **Taban:** Firefox
- **Motor:** Gecko (Firefox'tan)
- **Lisans:** Mozilla Public License

## Özellikler

1. **Çoklu Sekme Yönetimi:** Firefox'un güçlü sekme yönetim sistemi.
2. **Gizlilik Odaklı Tarama:** Gelişmiş izleyici koruması ve özel pencere modu.
3. **Özelleştirilebilir Arayüz:** Firefox tema desteği ve arayüz düzenleme seçenekleri.
4. **Eklenti Desteği:** Firefox eklenti ekosistemi ile uyumluluk.
5. **Hızlı Tarama:** Gecko motorunun optimize edilmiş performansı.

## API Referansı

Hüma, Firefox'un WebExtensions API'sini kullanır. İşte bazı temel API'ler:

### 1. Sekme Yönetimi API'si

#### `browser.tabs.create(createProperties)`

Yeni bir sekme açar.

- **Parametreler:** 
  - `createProperties` (object)
    - `url` (string, opsiyonel): Açılacak URL
    - `active` (boolean, opsiyonel): Sekmenin aktif olup olmayacağı
- **Geri Dönüş:** `Promise<Tab>`
- **Örnek:**
  ```javascript
  browser.tabs.create({ url: "https://www.example.com" })
    .then(tab => console.log("Yeni sekme ID:", tab.id));
  ```

#### `browser.tabs.remove(tabIds)`

Belirtilen sekme(leri) kapatır.

- **Parametreler:** 
  - `tabIds` (integer veya integer array): Kapatılacak sekme ID(leri)
- **Geri Dönüş:** `Promise<void>`
- **Örnek:**
  ```javascript
  browser.tabs.remove(4);
  // veya
  browser.tabs.remove([4, 5, 6]);
  ```

### 2. Yer İmleri API'si

#### `browser.bookmarks.create(bookmark)`

Yeni bir yer imi oluşturur.

- **Parametreler:**
  - `bookmark` (object)
    - `title` (string): Yer imi başlığı
    - `url` (string, opsiyonel): Yer imi URL'si
- **Geri Dönüş:** `Promise<BookmarkTreeNode>`
- **Örnek:**
  ```javascript
  browser.bookmarks.create({
    title: "Mozilla",
    url: "https://mozilla.org"
  }).then(bookmark => console.log("Yer imi eklendi:", bookmark.id));
  ```

### 3. Tema API'si

#### `browser.theme.update(windowId, theme)`

Tarayıcı temasını günceller.

- **Parametreler:**
  - `windowId` (integer, opsiyonel): Tema uygulanacak pencere ID'si
  - `theme` (object): Tema özellikleri
- **Geri Dönüş:** `Promise<void>`
- **Örnek:**
  ```javascript
  browser.theme.update(undefined, {
    images: {
      theme_frame: "images/bg-light.png",
    },
    colors: {
      frame: "#FFFFFF",
      tab_background_text: "#000000"
    }
  });
  ```

## Eklenti Geliştirme

Hüma, Firefox eklentileri ile uyumludur. Eklenti geliştirmek için:

1. `manifest.json` dosyası oluşturun.
2. Gerekli izinleri ve API'leri belirtin.
3. Eklenti kodunuzu JavaScript kullanarak yazın.
4. Eklentiyi Hüma'ya yükleyin ve test edin.

Örnek `manifest.json`:

```json
{
  "manifest_version": 2,
  "name": "Hüma Örnek Eklenti",
  "version": "1.0",
  "description": "Hüma için örnek eklenti",
  "permissions": ["tabs", "bookmarks"],
  "background": {
    "scripts": ["background.js"]
  }
}
```

## Güvenlik ve Gizlilik

Hüma, Firefox'un güvenlik ve gizlilik özelliklerini miras alır:

- **Gelişmiş İzleyici Koruması:** Üçüncü taraf izleyicileri engeller.
- **Özel Gezinme Modu:** Geçmişi kaydetmeden gizli tarama.
- **HTTPS-Only Modu:** Güvenli bağlantıları zorlar.

## Performans İpuçları

1. Sekmeler arasında hızlı geçiş için klavye kısayollarını kullanın (örn. Ctrl+Tab).
2. Kullanılmayan eklentileri devre dışı bırakarak bellek kullanımını optimize edin.
3. İçerik engelleme için uBlock Origin gibi hafif eklentiler kullanın.

## Kaynaklar

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/)
- [Firefox Eklenti Workshop](https://extensionworkshop.com/)
- [Firefox Kaynak Kodu](https://searchfox.org/)


### **Topluluk ve Destek**
- **GitHub:** [Hüma Projesi GitHub](https://github.com/Huma-Browser/browser) – Kod katkıları ve hata bildirimleri için.
- **Discord** [Hüma Discord](https://discord.gg/ZVHmv9dJRf) - Discord sunucumuza katılın.
---
 