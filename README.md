### Doktor E-Randevu Sistemi
#### Proje Özeti
Bu proje, doktor, hasta ve yönetici (admin) kullanıcılarının yetkilere dayalı olarak randevularını takip edip bir Hastane E-Randevu sistemidir. MHRS'ye benzer olduğu söylenebilir. Kullanıcılar, randevu kayıtları oluşturabilir ve yönetebilir, Admin kullanıcısı yeni kullanıcılar, ve onlara ait yetkileri(Admin, Doktor, Personel, Hasta) tanımlayabilir, hastalar ise randevular oluşturabilir. Proje, backend olarak.NET Core 8.0, frontend olarak Angular ve veritabanı olarakta MSSQL Server kullanılarak geliştirilmiştir.

#### Teknolojiler ve Kullanılan Teknikler
##### Backend:
.NET Core 8.0: Modern ve güçlü bir backend geliştirme platformu.
C#: Projenin ana programlama dili.
###### Entity Framework: 
 .NET uygulamaları için popüler bir Object-Relational Mapper (ORM) aracıdır. Veritabanları ile nesne yönelimli programlama arasında bir köprü kurar, bu sayede veritabanı işlemlerini SQL komutları yazmadan, doğrudan C# kodu ile yapmayı sağlar.
###### Nesne-Tablo Eşleştirme: 
Veritabanı tabloları ve C# sınıfları arasında eşleştirme sağlar.
###### CRUD İşlemleri:
Create, Read, Update, Delete işlemlerini kolayca gerçekleştirir.
###### LINQ Desteği:
Veritabanı sorgularını LINQ (Language Integrated Query - dile entegre sorgular) ile yazma imkanı tanır Her türlü veri kaynağı sorgulanabilir.
###### Veritabanı Bağımsızlığı: 
Farklı veritabanlarını destekler (SQL Server, SQLite, MySQL vb.).

###### JWT (JSON Web Tokens): 
Kullanıcı kimlik doğrulama ve yetkilendirme.
###### Clean Architecture: 
Kod yapısını temiz ve sürdürülebilir tutmak için kullanılan mimari desen.
###### CQRS (Command Query Responsibility Segregation): 
Veri sorgulama ve komut işlemlerini ayırma deseni.
###### Mediator Tasarım Deseni: 
Bağımsız bileşenler arasında iletişimi sağlamak için kullanılır.
###### Scrutor: 
Bağımlılık enjeksiyonu için tarama ve kayıt kütüphanesi.
###### Ardalis Smart Enum: 
Daha tip güvenli ve bakımı kolay sabitler için kullanılan kütüphane.
###### AutoMapper: 
Nesneler arasında otomatik eşleştirme.

##### Frontend:
###### Angular:
Google tarafından geliştirilmiş popüler bir frontend frameworkü.
###### DevExtreme Scheduler:
Takvim ve tarihli randevu yönetimi için kullanılan bileşen.
###### JWT-Decode:
JWT işleme ve kullanıcı bilgilerini parçalarına ayırma kütüphanesi.
###### Router:
Angular sayfalar/komponentler arası yönlendirme modülü.
###### SweetAlert2:
Güzel cafcaflı uyarı mesajları için kullanılan kütüphane.
###### Bootstrap Modal:
Popup/açılır menü şeklinde modal bileşeni CRUD operasyonları için.
###### JavaScript:
Ek fonksiyonlar ve etkileşimler için.
###### HTML/CSS:
Ön yüz tasarımı ve stil.

##### Veritabanı:
SQL Server: RDBMS/Microsoft'un ilişkisel veritabanı yönetim sistemi. Küçük ve orta ölçekli projeler için.

##### Diğer:
###### Swagger: 
API dokümantasyonu ve test aracı.
###### Cors Politikaları:
Projemizde CORS politikaları, güvenliğin sağlanması ve yetkisiz erişimlerin önlenmesi için yapılandırılmıştır. .NET Core 8.0 kullanılarak geliştirdiğimiz backend API'sinde, belirli kaynakların yalnızca izin verilen alan adları üzerinden erişilebilmesi için CORS kuralları belirlenmiştir.
Örneğin, sadece frontend uygulamamızın çalıştığı domainin backend API'sine erişim izni bulunmaktadır. Bu sayede, güvenilmeyen kaynaklardan gelen istekler engellenir ve uygulama güvenliği artırılır.

#### Kullanıcı Yetkilendirme:
Kullanıcılar hasta, doktor, personel ve admin rolleriyle sisteme erişebilir. JWT (JSON Web Tokens), güvenli kimlik doğrulama ve yetkilendirme sağlamak için kullanılır. Kullanıcı giriş yaptıktan sonra, sunucu tarafından imzalanmış bir JWT oluşturulur ve bu token, kullanıcıya geri gönderilir.
##### Adımlar:
###### Kullanıcı Girişi:
Kullanıcı, kullanıcı adı ve şifre ile giriş yapar.
###### Token Oluşturma:
Sunucu, kullanıcı bilgilerinin doğruluğunu kontrol eder ve geçerliyse, bir JWT oluşturur.
###### Token Gönderimi: 
Oluşturulan JWT, kullanıcıya gönderilir.
###### Token Saklama: 
Kullanıcı, token'ı genellikle tarayıcıda saklar (örneğin, localStorage veya sessionStorage).
###### Erişim Talepleri: 
Kullanıcı, API'ye istek yaparken token'ı Authorization başlığında gönderir.
###### Token Doğrulama: 
Sunucu, gelen token'ı doğrular ve geçerliyse kullanıcıya erişim izni verir.
###### Randevu Yönetimi: 
DevExtreme Scheduler kullanılarak kullanıcıların takvim üzerinden çift tıklama ile başlangıç ve bitiş tarihleri belirlenerek randevu oluşturabilmeleri sağlanmıştır.
###### CRUD Operasyonları: 
Appointment, Doctor, Patient, Admin, AppUser, ve AppUserRole varlıkları için Create, Read, Update, Delete işlemleri CQRS ve Mediator deseni ile yönetilmiştir.
###### Swagger Entegrasyonu: 
API uç noktalarının dokümantasyonu ve test edilebilirliği için Swagger kullanılmıştır.
###### Clean Code ve SOLID Prensipleri: 
Kodun anlaşılabilir, bakımı kolay ve genişletilebilir olması için bu prensiplere dikkat edilmiştir.

#### Kullanıcı Rolleri ve İşlevleri
Admin: Kullanıcı ve randevu yönetimi, sistem ayarları.
Doktor: Hasta kayıtları ve randevu yönetimi.
Hasta: Randevu oluşturma ve yönetme.

### Görseller:
![20](https://github.com/huseyinaydin99/eAppointment/assets/16438043/eb128f8f-1f57-4075-83bd-bfb396f99b06)
![19](https://github.com/huseyinaydin99/eAppointment/assets/16438043/479ec0b0-2bfb-44e4-962c-a7c94abc5e1a)
![18](https://github.com/huseyinaydin99/eAppointment/assets/16438043/687eb94e-7b81-4f50-be88-d127b17a1516)
![17](https://github.com/huseyinaydin99/eAppointment/assets/16438043/dab7011c-590f-400a-a666-8cba3be78438)
![16](https://github.com/huseyinaydin99/eAppointment/assets/16438043/7372bc4b-b2eb-4d9e-a375-534129e2f38c)
![15](https://github.com/huseyinaydin99/eAppointment/assets/16438043/11a09ae6-b5b8-47b8-869b-da08ecfc67e7)
![14](https://github.com/huseyinaydin99/eAppointment/assets/16438043/19a3264c-2d08-474e-b250-9b9a3b44e350)
![13](https://github.com/huseyinaydin99/eAppointment/assets/16438043/51d81a53-3659-443e-8b87-8dd768428ed5)
![12](https://github.com/huseyinaydin99/eAppointment/assets/16438043/a199fe54-5d0a-42e3-bde0-9cd5eec9f584)
![11](https://github.com/huseyinaydin99/eAppointment/assets/16438043/c99daf70-c580-414f-be92-be8cda6f86a5)
![10](https://github.com/huseyinaydin99/eAppointment/assets/16438043/d36e6012-e2e0-45c8-ae4c-fa6d80afd242)
![9](https://github.com/huseyinaydin99/eAppointment/assets/16438043/27d18e2e-9538-4d66-abd6-244a6cc6b9b7)
![8](https://github.com/huseyinaydin99/eAppointment/assets/16438043/a742ac70-4feb-4599-9728-296e7ed61279)
![7](https://github.com/huseyinaydin99/eAppointment/assets/16438043/2cd07fa6-7b9e-470f-b801-ce2f7c2e4710)
![6](https://github.com/huseyinaydin99/eAppointment/assets/16438043/8e519908-451c-4762-a595-1042f2cb5d1a)
![5](https://github.com/huseyinaydin99/eAppointment/assets/16438043/88e647d3-cb51-4024-8799-d15c56324c94)
![4](https://github.com/huseyinaydin99/eAppointment/assets/16438043/ac17fc02-2ff0-4981-a559-e72a7a10109c)
![3](https://github.com/huseyinaydin99/eAppointment/assets/16438043/3e58970d-8c56-4803-a88b-b657ee7e6069)
![2](https://github.com/huseyinaydin99/eAppointment/assets/16438043/c4ae54f1-41c1-4404-9862-a41a767b0ae3)
![1](https://github.com/huseyinaydin99/eAppointment/assets/16438043/9c601c33-13dd-40ba-82e8-6fef4d814a5d)
