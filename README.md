# Jotform Frontend Hackathon Project

## User Information
Please fill in your information after forking this repository:

- **Name**: Emre Tahtalı

## Project Description

### 🛒 Grocery Shop

This is a Vue 3 e-commerce frontend built using **Pinia**, **Vite**, and the **Jotform API**.  
Users can browse a product list, add items to a cart, and view their selections and total price.

### 📦 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/) – for state management
- [Jotform API](https://api.jotform.com/docs/) – for product data

## Getting Started
### 1. Clone the repository

```bash
git clone https://github.com/emretahtali/jotform-hackathon.git
cd jotform-hackathon
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory with the following variables:

```env
VITE_JOTFORM_API_KEY=your_jotform_api_key_here
VITE_JOTFORM_FORM_ID=your_form_id_here
```

### 4. Run the development server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

###    📁 Project Structure

```plaintext
src/
├─ assets/              # Static images and icons
├─ components/          # Reusable components like ShopCard
├─ views/               # Pages like ShoppingPage and CartPage
├─ stores/              # Pinia store (cart.js)
├─ router/              # Router
├─ App.vue              # Root app component
└─ main.js              # App bootstrap
```

### 💾 Persistence

- The cart is persisted using `pinia-plugin-persistedstate`.
- Quantities remain intact after page reloads or navigation changes.

### 🧪 Jotform API Integration

- Product data is fetched dynamically from Jotform's Payment API.
- Names, images and prices are parsed from each product object.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 

# 🚀 Hackathon Duyurusu

## 📅 Tarih ve Saat
Pazar günü saat 11:00'da başlayacak.

## 🎯 Hackathon Konsepti
Bu hackathon'da, size özel hazırlanmış bir senaryo üzerine web uygulaması geliştirmeniz istenecektir. Hackathon başlangıcında senaryo detayları paylaşılacaktır.Katılımcılar, verilen GitHub reposunu fork ederek kendi geliştirme ortamlarını oluşturacaklardır.

## 📦 GitHub Reposu
Hackathon için kullanılacak repo: [JotformFrontendHackathon-20.04.2025](https://github.com/erayaydinJF/JotformFrontendHackathon-20.04.2025)

## 🛠️ Hazırlık Süreci
1. GitHub reposunu fork edin
2. Tercih ettiğiniz framework ile geliştirme ortamınızı hazırlayın
3. Hazırladığınız setup'ı fork ettiğiniz repoya gönderin

## 💡 Önemli Notlar
- Katılımcılar kendi tercih ettikleri framework'leri kullanabilirler
- Geliştirme ortamınızı önceden hazırlayıp reponuza göndermeniz önerilir
