# UI5 Demo Proje Dosya Dokümantasyonu / UI5 Demo Project File Documentation

## 🇹🇷 Türkçe

### Kök Dizin Dosyaları

#### **jsconfig.json**
TypeScript/JavaScript projesi için yapılandırma dosyası. Derleyici seçeneklerini, modül çözümleme ayarlarını ve path alias'larını tanımlar. Next.js projesi için ES2017 hedefi ve JSX desteği ile yapılandırılmıştır.

#### **next.config.js**
Next.js framework yapılandırma dosyası. Geliştirme göstergelerini devre dışı bırakır ve production ortam değişkenlerini ayarlar.

#### **package.json**
Node.js proje manifesto dosyası. Proje bağımlılıklarını, script komutlarını ve proje meta verilerini içerir. UI5 Web Components, Next.js ve React bağımlılıklarını tanımlar.

#### **package-lock.json**
NPM bağımlılık kilitleme dosyası. Tüm bağımlılıkların tam sürümlerini ve bağımlılık ağacını saklar. Tutarlı kurulumlar sağlar.

### Src/App Dizini Dosyaları

#### **src/app/layout.js**
Next.js root layout bileşeni. HTML yapısını, font ayarlarını ve sayfa meta verilerini tanımlar. Google Fonts (Geist) entegrasyonunu içerir.

#### **src/app/page.js**
Ana uygulama sayfası bileşeni. Master-detail düzenini yönetir, menü navigasyonunu kontrol eder ve UI5 bileşenlerini sarmalayıcı ile entegre eder.

#### **src/app/components/MasterPage.js**
Sol taraf menü bileşeni. Navigasyon menüsünü gösterir, menü öğelerini listeler ve seçili öğeyi vurgular. Hover efektleri ve geçiş animasyonları içerir.

#### **src/app/components/DetailPage.js**
Sağ taraf içerik paneli bileşeni. Seçilen menü öğesine göre dinamik içerik render eder. Wizard, liste ve kart görünümlerini destekler.

#### **src/app/components/WizardComponent.js**
Ana wizard orkestrasyon bileşeni. Wizard adımlarını koordine eder, useWizardState hook'unu kullanarak durum yönetimi yapar. Parçalara ayrılmış adım bileşenlerini ve gösterge bileşenini entegre eder.

#### **src/app/components/UI5Wrapper.js**
UI5 Web Components dinamik yükleyici bileşeni. Tüm UI5 bileşenlerini asenkron olarak yükler, Norveççe lokalizasyon ayarları yapar ve yükleme durumunu yönetir.

### Wizard Adım Bileşenleri

#### **src/app/components/wizard-steps/PersonalInfoStep.js**
Wizard'ın ilk adımı. Kullanıcının kişisel bilgilerini (ad, soyad, email, telefon, doğum tarihi) toplar. UI5 form elemanlarını kullanır.

#### **src/app/components/wizard-steps/ProjectDetailsStep.js**
Wizard'ın ikinci adımı. Proje detaylarını toplar. Accordion panel yapısı ile organize edilmiş üç bölüm içerir: Temel Bilgiler, Proje Detayları ve Teknik Gereksinimler.

#### **src/app/components/wizard-steps/RequirementsStep.js**
Wizard'ın üçüncü adımı. Ek proje gereksinimlerini toplar. Özellik seçimi, zaman çizelgesi ve bütçe bilgilerini içerir.

#### **src/app/components/wizard-steps/ReviewStep.js**
Wizard'ın son adımı. Tüm girilen bilgilerin özetini gösterir ve kullanıcıdan onay alır. Form verilerini özet kart formatında sunar.

#### **src/app/components/wizard-steps/StepIndicator.js**
Wizard adım göstergesi bileşeni. Mevcut adımı, tamamlanan adımları ve adımlar arası navigasyonu görsel olarak gösterir. Tıklanabilir adımlar ile hızlı navigasyon sağlar.

### Hooks

#### **src/app/hooks/useWizardState.js**
Wizard durum yönetimi için özel React Hook. Form verilerini, mevcut adımı, tamamlanan adımları ve navigasyon fonksiyonlarını yönetir. Tüm wizard lojiğini tek bir yerde toplar.

### Veri Dosyaları

#### **src/app/data/menuData.json**
Uygulama menü yapılandırma verisi. 6 ana menü öğesi tanımlar: Wizard, Products, Orders, Customers, Reports ve Settings. Her öğe için içerik tipini ve verilerini içerir.

---

## 🇬🇧 English

### Root Directory Files

#### **jsconfig.json**
Configuration file for TypeScript/JavaScript project. Defines compiler options, module resolution settings, and path aliases. Configured with ES2017 target and JSX support for Next.js project.

#### **next.config.js**
Next.js framework configuration file. Disables development indicators and sets production environment variables.

#### **package.json**
Node.js project manifest file. Contains project dependencies, script commands, and project metadata. Defines UI5 Web Components, Next.js, and React dependencies.

#### **package-lock.json**
NPM dependency lock file. Stores exact versions of all dependencies and dependency tree. Ensures consistent installations.

### Src/App Directory Files

#### **src/app/layout.js**
Next.js root layout component. Defines HTML structure, font settings, and page metadata. Includes Google Fonts (Geist) integration.

#### **src/app/page.js**
Main application page component. Manages master-detail layout, controls menu navigation, and integrates UI5 components with wrapper.

#### **src/app/components/MasterPage.js**
Left sidebar menu component. Displays navigation menu, lists menu items, and highlights selected item. Includes hover effects and transition animations.

#### **src/app/components/DetailPage.js**
Right content panel component. Renders dynamic content based on selected menu item. Supports wizard, list, and card views.

#### **src/app/components/WizardComponent.js**
Main wizard orchestration component. Coordinates wizard steps, manages state using useWizardState hook. Integrates separated step components and indicator component.

#### **src/app/components/UI5Wrapper.js**
UI5 Web Components dynamic loader component. Asynchronously loads all UI5 components, sets Norwegian localization settings, and manages loading state.

### Wizard Step Components

#### **src/app/components/wizard-steps/PersonalInfoStep.js**
First step of the wizard. Collects user's personal information (first name, last name, email, phone, date of birth). Uses UI5 form elements.

#### **src/app/components/wizard-steps/ProjectDetailsStep.js**
Second step of the wizard. Collects project details. Contains three sections organized with accordion panel structure: Basic Information, Project Details, and Technical Requirements.

#### **src/app/components/wizard-steps/RequirementsStep.js**
Third step of the wizard. Collects additional project requirements. Includes feature selection, timeline, and budget information.

#### **src/app/components/wizard-steps/ReviewStep.js**
Final step of the wizard. Shows summary of all entered information and gets user confirmation. Presents form data in summary card format.

#### **src/app/components/wizard-steps/StepIndicator.js**
Wizard step indicator component. Visually displays current step, completed steps, and navigation between steps. Provides quick navigation with clickable steps.

### Hooks

#### **src/app/hooks/useWizardState.js**
Custom React Hook for wizard state management. Manages form data, current step, completed steps, and navigation functions. Centralizes all wizard logic in one place.

### Data Files

#### **src/app/data/menuData.json**
Application menu configuration data. Defines 6 main menu items: Wizard, Products, Orders, Customers, Reports, and Settings. Contains content type and data for each item.