import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "bg",
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      bg: {
        translation: {
          nav: {
            home: "Начало",
            about: "За нас",
            services: "Услуги",
            contact: "Контакти",
          },
          home: {
            hero: {
              title: "Качествени едрови масла",
              subtitle: "за световните пазари",
              description:
                "Вашият надежден партньор в търговията със слънчогледово и соево масло",
              cta: {
                contact: "Свържете се с нас",
                learnMore: "Научете повече",
              },
              stats: {
                tons: "тона доставени",
                countries: "европейски страни",
                clients: "клиента",
              },
            },
            stats: {
              title: "В цифри",
              subtitle: "Нашите постижения",
              description:
                "Години на усърдна работа, доверие и постоянно развитие",
              metrics: {
                tons: "Тона доставени",
                clients: "Доволни клиенти",
                countries: "Европейски страни",
                quality: "Цена / Качество",
                numbers: {
                  tons: "10 000+",
                  clients: "100+",
                  countries: "25+",
                  quality: "1 място"
                }
              },
            },
            features: {
              title: "Защо да изберете нас?",
              subtitle: "Нашите предимства",
              description:
                "С дългогодишен опит и иновативен подход, ние сме вашият надежден партньор в търговията с качествени масла",
              items: {
                lab: {
                  title: "Лабораторен контрол",
                  description: "Стриктен качествен контрол на всяка партида",
                },
                global: {
                  title: "Международен обхват",
                  description: "Доставки в над 50 държави по света",
                },
                quality: {
                  title: "Гарантирано качество",
                  description: "Сертифицирани по ISO и HACCP стандарти",
                },
                delivery: {
                  title: "Бърза доставка",
                  description: "Експресни доставки до всяка точка",
                },
                transparency: {
                  title: "Прозрачност",
                  description: "Пълна проследимост на продукцията",
                },
                innovation: {
                  title: "Иновации",
                  description: "Модерни технологии за производство",
                },
              },
            },
            products: {
              title: "Нашите продукти",
              sunflower: {
                title: "Слънчогледово масло",
                description: "Рафинирано и нерафинирано",
                features: ["Висока чистота", "Златист цвят", "Приятен аромат"],
              },
              soy: {
                title: "Соево масло",
                description: "Първокласно качество",
                features: [
                  "Богато на протеини",
                  "Светъл цвят",
                  "Неутрален вкус",
                ],
              },
            },
            testimonials: {
              title: "Какво казват нашите клиенти",
              items: [
                {
                  text: "Отлично качество и професионално обслужване!",
                  author: "Вальо Стоянов",
                  position: "Управител, Food Industries Ltd."
                },
                {
                  text: "Надежден партньор с коректно отношение!",
                  author: "Ивайло Граматиков",
                  position: "Директор, Global Foods Ltd."
                },
                {
                  text: "Винаги навременни доставки и отлично качество!",
                  author: "Данил Желязков",
                  position: "Собственик, Euro Trading Ltd."
                }
              ]
            }
          },
          about: {
            hero: {
              title: "За Global Trade International 2002 Ltd",
              description: "Повече от 2 години доставяме качествени масла на световните пазари, изграждайки доверие и партньорства."
            },
            overview: {
              title: "Нашата история",
              description: "Global Trade International 2002 Ltd основана през 2022 година с мисията да предоставя висококачествени хранителни масла на международните пазари. Днес сме горди да бъдем един от водещите доставчици в индустрията, обслужващ клиенти в над 25+ европейски държави.",
              headquarters: {
                title: "Седалище",
                country: "БЪЛГАРИЯ",
                countryDesc: "Европейски съюз",
                city: "гр. София",
                cityDesc: "р-н Слатина",
                address: "бул. \"Шипченски проход\" 63",
                addressDesc: "Бизнес център",
                floor: "Етаж 2"
              },
              advantages: {
                title: "Предимства",
                quality: {
                  title: "Най-високо качество",
                  desc: "Сертифицирано производство"
                },
                delivery: {
                  title: "Експресни товари 24/7",
                  desc: "Бърза и надеждна доставка"
                },
                consultation: {
                  title: "Безплатна консултация",
                  desc: "От нашите логистични експерти"
                },
                guarantee: "Гарантирано качество"
              },
              experience: "години опит"
            },
            values: {
              title: "Нашите ценности",
              items: [
                {
                  title: "Качество",
                  description: "Най-високи стандарти във всеки аспект"
                },
                {
                  title: "Глобален обхват",
                  description: "Присъствие на международните пазари"
                },
                {
                  title: "Партньорство",
                  description: "Изграждане на дълготрайни отношения"
                },
                {
                  title: "Иновации",
                  description: "Постоянно развитие и подобрение"
                }
              ]
            }
          },
          services: {
            hero: {
              subtitle: "Нашите услуги",
              title: "Качествени решения за вашия бизнес",
              description: "Предлагаме широка гама от услуги в търговията с масла"
            },
            products: [
              {
                title: "Слънчогледово масло",
                description: "Внос и износ на рафинирано и нерафинирано слънчогледово масло с най-високо качество.",
                features: [
                  "Рафинирано и нерафинирано",
                  "Bulk опаковки",
                  "Сертифицирано качество",
                  "Конкурентни цени"
                ]
              },
              {
                title: "Соево масло",
                description: "Търговия с висококачествено соево масло за хранителната индустрия.",
                features: [
                  "Индустриални доставки",
                  "Гарантиран произход",
                  "Лабораторно тествано",
                  "Бързи доставки"
                ]
              }
            ]
          },
          contact: {
            hero: {
              subtitle: "Свържете се с нас",
              title: "Как можем да помогнем?",
              description: "Нашият екип е на ваше разположение за въпроси и съдействие"
            },
            info: {
              headquarters: {
                title: "Седалище",
                country: {
                  main: "БЪЛГАРИЯ",
                  sub: "Европейски съюз"
                },
                city: {
                  main: "гр. София",
                  sub: "р-н Слатина"
                },
                address: {
                  main: 'бул. "Шипченски проход" 63',
                  sub: "Бизнес център"
                },
                floor: "Етаж 2"
              },
              phone: {
                title: "Телефон",
                main: "+359 877 439 989",
                sub: "Мобилен телефон"
              },
              email: {
                title: "Имейл",
                main: "info@globaltrade.com",
                sub: "За обща информация"
              },
              hours: {
                title: "Работно време",
                weekdays: {
                  main: "Понеделник - Петък",
                  sub: "08:00 - 17:00"
                },
                weekend: {
                  main: "Събота - Неделя",
                  sub: "10:00 - 17:00"
                }
              }
            },
            form: {
              title: "Изпратете съобщение",
              name: "Име",
              email: "Имейл",
              phone: "Телефон",
              message: "Съобщение",
              submit: "Изпрати съобщение"
            },
            map: {
              title: "Къде да ни намерите"
            }
          },
          footer: {
            company: {
              name: "Global Trade International",
              subtitle: "2002 Ltd",
              description: "Качествени масла за световните пазари"
            },
            navigation: {
              title: "Навигация",
              home: "Начало",
              about: "За нас",
              services: "Услуги",
              contact: "Контакти"
            },
            contact: {
              title: "Контакти",
              phone: "+359 877 439 989",
              email: "info@globaltrade.com",
              address: "София, България"
            },
            copyright: "Всички права запазени."
          }
        }
      },
      uk: {
        translation: {
          nav: {
            home: "Головна",
            about: "Про нас",
            services: "Послуги",
            contact: "Контакти",
          },
          home: {
            hero: {
              title: "Якісні оптові олії",
              subtitle: "для світових ринків",
              description:
                "Ваш надійний партнер у торгівлі соняшниковою та соєвою олією",
              cta: {
                contact: "Зв'яжіться з нами",
                learnMore: "Дізнатись більше",
              },
              stats: {
                tons: "тонн доставлено",
                countries: "європейських країн",
                clients: "клієнтів",
              },
            },
            stats: {
              title: "У цифрах",
              subtitle: "Наші досягнення",
              description:
                "Роки наполегливої праці, довіри та постійного розвитку",
              metrics: {
                tons: "Тонн доставлено",
                clients: "Задоволених клієнтів",
                countries: "Європейських країн",
                quality: "Ціна / Якість",
                numbers: {
                  tons: "10 000+",
                  clients: "100+",
                  countries: "25+",
                  quality: "1 місце"
                }
              },
            },
            features: {
              title: "Чому обрати нас?",
              subtitle: "Наші переваги",
              description:
                "З багаторічним досвідом та інноваційним підходом, ми - ваш надійний партнер у торгівлі якісними оліями",
              items: {
                lab: {
                  title: "Лабораторний контроль",
                  description: "Суворий контроль якості кожної партії",
                },
                global: {
                  title: "Міжнародне охоплення",
                  description: "Поставки в понад 50 країн світу",
                },
                quality: {
                  title: "Гарантована якість",
                  description: "Сертифіковані за ISO та HACCP",
                },
                delivery: {
                  title: "Швидка доставка",
                  description: "Експрес-доставка в будь-яку точку",
                },
                transparency: {
                  title: "Прозорість",
                  description: "Повна простежуваність продукції",
                },
                innovation: {
                  title: "Інновації",
                  description: "Сучасні технології виробництва",
                },
              },
            },
            products: {
              title: "Наші продукти",
              sunflower: {
                title: "Соняшникова олія",
                description: "Рафінована та нерафінована",
                features: [
                  "Висока чистота",
                  "Золотистий колір",
                  "Приємний аромат",
                ],
              },
              soy: {
                title: "Соєва олія",
                description: "Першокласна якість",
                features: [
                  "Багата на протеїни",
                  "Світлий колір",
                  "Нейтральний смак",
                ],
              },
            },
            testimonials: {
              title: "Що кажуть наші клієнти",
              items: [
                {
                  text: "Відмінна якість та професійне обслуговування!",
                  author: "Вальо Стоянов",
                  position: "Керівник, Food Industries Ltd."
                },
                {
                  text: "Надійний партнер з коректним ставленням!",
                  author: "Івайло Граматіков",
                  position: "Директор, Global Foods Ltd."
                },
                {
                  text: "Завжди вчасні поставки та відмінна якість!",
                  author: "Даніл Желязков",
                  position: "Власник, Euro Trading Ltd."
                }
              ]
            }
          },
          about: {
            hero: {
              title: "Про Global Trade International 2002 Ltd",
              description: "Понад 2 роки постачаємо якісні олії на світові ринки, будуючи довіру та партнерство."
            },
            overview: {
              title: "Наша історія",
              description: "Global Trade International 2002 Ltd заснована у 2022 році з місією постачати високоякісні харчові олії на міжнародні ринки. Сьогодні ми пишаємося тим, що є одним з провідних постачальників у галузі, обслуговуючи клієнтів у понад 25+ європейських країнах.",
              headquarters: {
                title: "Седалище",
                country: "БОЛГАРІЯ",
                countryDesc: "Європейський Союз",
                city: "м. Софія",
                cityDesc: "р-н Слатіна",
                address: "бул. \"Шипченські проход\" 63",
                addressDesc: "Бізнес центр",
                floor: "Поверх 2"
              },
              advantages: {
                title: "Переваги",
                quality: {
                  title: "Найвища якість",
                  desc: "Сертифіковане виробництво"
                },
                delivery: {
                  title: "Експрес-доставка 24/7",
                  desc: "Швидка та надійна доставка"
                },
                consultation: {
                  title: "Безкоштовна консультація",
                  desc: "Від наших логістичних експертів"
                },
                guarantee: "Гарантована якість"
              },
              experience: "років досвіду"
            },
            values: {
              title: "Наші цінності",
              items: [
                {
                  title: "Якість",
                  description: "Найвищі стандарти в кожному аспекті"
                },
                {
                  title: "Глобальне охоплення",
                  description: "Присутність на міжнародних ринках"
                },
                {
                  title: "Партнерство",
                  description: "Побудова довготривалих відносин"
                },
                {
                  title: "Інновації",
                  description: "Постійний розвиток та вдосконалення"
                }
              ]
            }
          },
          services: {
            hero: {
              subtitle: "Наші послуги",
              title: "Якісні рішення для вашого бізнесу",
              description: "Пропонуємо широкий спектр послуг у торгівлі оліями"
            },
            products: [
              {
                title: "Соняшникова олія",
                description: "Імпорт та експорт рафінованої та нерафінованої соняшникової олії найвищої якості.",
                features: [
                  "Рафінована та нерафінована",
                  "Bulk упаковка",
                  "Сертифікована якість",
                  "Конкурентні ціни"
                ]
              },
              {
                title: "Соєва олія",
                description: "Торгівля високоякісною соєвою олією для харчової промисловості.",
                features: [
                  "Промислові поставки",
                  "Гарантоване походження",
                  "Лабораторно тестована",
                  "Швидкі поставки"
                ]
              }
            ]
          },
          contact: {
            hero: {
              subtitle: "Зв'яжіться з нами",
              title: "Як ми можемо допомогти?",
              description: "Наша команда до ваших послуг для запитань та допомоги"
            },
            info: {
              headquarters: {
                title: "Седалище",
                country: {
                  main: "БОЛГАРІЯ",
                  sub: "Європейський Союз"
                },
                city: {
                  main: "м. Софія",
                  sub: "р-н Слатіна"
                },
                address: {
                  main: 'бул. "Шипченські проход" 63',
                  sub: "Бізнес центр"
                },
                floor: "Поверх 2"
              },
              phone: {
                title: "Телефон",
                main: "+359 877 439 989",
                sub: "Мобільний телефон"
              },
              email: {
                title: "Електронна пошта",
                main: "info@globaltrade.com",
                sub: "Для загальної інформації"
              },
              hours: {
                title: "Робочий час",
                weekdays: {
                  main: "Понеділок - П'ятниця",
                  sub: "08:00 - 17:00"
                },
                weekend: {
                  main: "Субота - Неділя",
                  sub: "10:00 - 17:00"
                }
              }
            },
            form: {
              title: "Надіслати повідомлення",
              name: "Ім'я",
              email: "Електронна пошта",
              phone: "Телефон",
              message: "Повідомлення",
              submit: "Надіслати повідомлення"
            },
            map: {
              title: "Де нас знайти"
            }
          },
          footer: {
            company: {
              name: "Global Trade International",
              subtitle: "2002 Ltd",
              description: "Якісні олії для світових ринків"
            },
            navigation: {
              title: "Навігація",
              home: "Головна",
              about: "Про нас",
              services: "Послуги",
              contact: "Контакти"
            },
            contact: {
              title: "Контакти",
              phone: "+359 877 439 989",
              email: "info@globaltrade.com",
              address: "Софія, Болгарія"
            },
            copyright: "Всі права захищені."
          }
        }
      },
      ru: {
        translation: {
          nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            contact: "Контакты",
          },
          home: {
            hero: {
              title: "Качественные оптовые масла",
              subtitle: "для мировых рынков",
              description:
                "Ваш надежный партнер в торговле подсолнечным и соевым маслом",
              cta: {
                contact: "Свяжитесь с нами",
                learnMore: "Узнать больше",
              },
              stats: {
                tons: "тонн доставлено",
                countries: "европейских стран",
                clients: "клиентов",
              },
            },
            stats: {
              title: "В цифрах",
              subtitle: "Наши достижения",
              description:
                "Годы упорной работы, доверия и постоянного развития",
              metrics: {
                tons: "Тонн доставлено",
                clients: "Довольных клиентов",
                countries: "Европейских стран",
                quality: "Цена / Качество",
                numbers: {
                  tons: "10 000+",
                  clients: "100+",
                  countries: "25+",
                  quality: "1 место"
                }
              },
            },
            features: {
              title: "Почему выбрать нас?",
              subtitle: "Наши преимущества",
              description:
                "С многолетним опытом и инновационным подходом, мы - ваш надежный партнер в торговле качественными маслами",
              items: {
                lab: {
                  title: "Лабораторный контроль",
                  description: "Строгий контроль качества каждой партии",
                },
                global: {
                  title: "Международный охват",
                  description: "Поставки в более чем 50 стран мира",
                },
                quality: {
                  title: "Гарантированное качество",
                  description: "Сертифицированы по ISO и HACCP",
                },
                delivery: {
                  title: "Быстрая доставка",
                  description: "Экспресс-доставка в любую точку",
                },
                transparency: {
                  title: "Прозрачность",
                  description: "Полная прослеживаемость продукции",
                },
                innovation: {
                  title: "Инновации",
                  description: "Современные технологии производства",
                },
              },
            },
            products: {
              title: "Наши продукты",
              sunflower: {
                title: "Подсолнечное масло",
                description: "Рафинированное и нерафинированное",
                features: [
                  "Высокая чистота",
                  "Золотистый цвет",
                  "Приятный аромат",
                ],
              },
              soy: {
                title: "Соевое масло",
                description: "Первоклассное качество",
                features: [
                  "Богато протеинами",
                  "Светлый цвет",
                  "Нейтральный вкус",
                ],
              },
            },
            testimonials: {
              title: "Что говорят наши клиенты",
              items: [
                {
                  text: "Отличное качество и профессиональное обслуживание!",
                  author: "Вальо Стоянов",
                  position: "Управляющий, Food Industries Ltd."
                },
                {
                  text: "Надежный партнер с корректным отношением!",
                  author: "Ивайло Граматиков",
                  position: "Директор, Global Foods Ltd."
                },
                {
                  text: "Всегда своевременные поставки и отличное качество!",
                  author: "Данил Желязков",
                  position: "Владелец, Euro Trading Ltd."
                }
              ]
            }
          },
          about: {
            hero: {
              title: "О Global Trade International 2002 Ltd",
              description: "Более 2 лет поставляем качественные масла на мировые рынки, выстраивая доверие и партнерство."
            },
            overview: {
              title: "Наша история",
              description: "Global Trade International 2002 Ltd основана в 2022 году с миссией поставлять высококачественные пищевые масла на международные рынки. Сегодня мы гордимся тем, что являемся одним из ведущих поставщиков в отрасли, обслуживая клиентов в более чем 25+ европейских странах.",
              headquarters: {
                title: "Седалище",
                country: "БОЛГАРИЯ",
                countryDesc: "Европейский Союз",
                city: "г. София",
                cityDesc: "р-н Слатина",
                address: "бул. \"Шипченски проход\" 63",
                addressDesc: "Бизнес центр",
                floor: "Этаж 2"
              },
              advantages: {
                title: "Преимущества",
                quality: {
                  title: "Высочайшее качество",
                  desc: "Сертифицированное производство"
                },
                delivery: {
                  title: "Экспресс-доставка 24/7",
                  desc: "Быстрая и надежная доставка"
                },
                consultation: {
                  title: "Бесплатная консультация",
                  desc: "От наших логистических экспертов"
                },
                guarantee: "Гарантированное качество"
              },
              experience: "лет опыта"
            },
            values: {
              title: "Наши ценности",
              items: [
                {
                  title: "Качество",
                  description: "Высочайшие стандарты во всех аспектах"
                },
                {
                  title: "Глобальный охват",
                  description: "Присутствие на международных рынках"
                },
                {
                  title: "Партнерство",
                  description: "Построение долгосрочных отношений"
                },
                {
                  title: "Инновации",
                  description: "Постоянное развитие и улучшение"
                }
              ]
            }
          },
          services: {
            hero: {
              subtitle: "Наши услуги",
              title: "Качественные решения для вашего бизнеса",
              description: "Предлагаем широкий спектр услуг в торговле маслами"
            },
            products: [
              {
                title: "Подсолнечное масло",
                description: "Импорт и экспорт рафинированного и нерафинированного подсолнечного масла высшего качества.",
                features: [
                  "Рафинированное и нерафинированное",
                  "Bulk упаковка",
                  "Сертифицированное качество",
                  "Конкурентные цены"
                ]
              },
              {
                title: "Соевое масло",
                description: "Торговля высококачественным соевым маслом для пищевой промышленности.",
                features: [
                  "Промышленные поставки",
                  "Гарантированное происхождение",
                  "Лабораторно тестированное",
                  "Быстрые поставки"
                ]
              }
            ]
          },
          contact: {
            hero: {
              subtitle: "Свяжитесь с нами",
              title: "Как мы можем помочь?",
              description: "Наша команда к вашим услугам для вопросов и помощи"
            },
            info: {
              headquarters: {
                title: "Седалище",
                country: {
                  main: "БОЛГАРИЯ",
                  sub: "Европейский Союз"
                },
                city: {
                  main: "г. София",
                  sub: "р-н Слатина"
                },
                address: {
                  main: 'бул. "Шипченски проход" 63',
                  sub: "Бизнес центр"
                },
                floor: "Этаж 2"
              },
              phone: {
                title: "Телефон",
                main: "+359 877 439 989",
                sub: "Мобильный телефон"
              },
              email: {
                title: "Электронная почта",
                main: "info@globaltrade.com",
                sub: "Для общей информации"
              },
              hours: {
                title: "Рабочее время",
                weekdays: {
                  main: "Понедельник - Пятница",
                  sub: "08:00 - 17:00"
                },
                weekend: {
                  main: "Суббота - Воскресенье",
                  sub: "10:00 - 17:00"
                }
              }
            },
            form: {
              title: "Отправить сообщение",
              name: "Имя",
              email: "Электронная почта",
              phone: "Телефон",
              message: "Сообщение",
              submit: "Отправить сообщение"
            },
            map: {
              title: "Где нас найти"
            }
          },
          footer: {
            company: {
              name: "Global Trade International",
              subtitle: "2002 Ltd",
              description: "Качественные масла для мировых рынков"
            },
            navigation: {
              title: "Навигация",
              home: "Главная",
              about: "О нас",
              services: "Услуги",
              contact: "Контакты"
            },
            contact: {
              title: "Контакты",
              phone: "+359 877 439 989",
              email: "info@globaltrade.com",
              address: "София, Болгария"
            },
            copyright: "Все права защищены."
          }
        }
      },
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact",
          },
          home: {
            hero: {
              title: "Quality Wholesale Oils",
              subtitle: "for Global Markets",
              description:
                "Your reliable partner in sunflower and soybean oil trade",
              cta: {
                contact: "Contact Us",
                learnMore: "Learn More",
              },
              stats: {
                tons: "tons delivered",
                countries: "European countries",
                clients: "clients",
              },
            },
            stats: {
              title: "In Numbers",
              subtitle: "Our Achievements",
              description:
                "Years of hard work, trust, and continuous development",
              metrics: {
                tons: "Tons Delivered",
                clients: "Satisfied Clients",
                countries: "European Countries",
                quality: "Price / Quality",
                numbers: {
                  tons: "10,000+",
                  clients: "100+",
                  countries: "25+",
                  quality: "1st place"
                }
              },
            },
            features: {
              title: "Why Choose Us?",
              subtitle: "Our Advantages",
              description:
                "With years of experience and an innovative approach, we are your reliable partner in quality oils trade",
              items: {
                lab: {
                  title: "Laboratory Control",
                  description: "Strict quality control of each batch",
                },
                global: {
                  title: "Global Reach",
                  description: "Deliveries to over 50 countries worldwide",
                },
                quality: {
                  title: "Guaranteed Quality",
                  description: "ISO and HACCP certified",
                },
                delivery: {
                  title: "Fast Delivery",
                  description: "Express deliveries to any location",
                },
                transparency: {
                  title: "Transparency",
                  description: "Complete product traceability",
                },
                innovation: {
                  title: "Innovation",
                  description: "Modern production technologies",
                },
              },
            },
            products: {
              title: "Our Products",
              sunflower: {
                title: "Sunflower Oil",
                description: "Refined and Unrefined",
                features: ["High Purity", "Golden Color", "Pleasant Aroma"],
              },
              soy: {
                title: "Soybean Oil",
                description: "Premium Quality",
                features: ["Rich in Proteins", "Light Color", "Neutral Taste"],
              },
            },
            testimonials: {
              title: "What Our Clients Say",
              items: [
                {
                  text: "Excellent quality and professional service!",
                  author: "Valyo Stoyanov",
                  position: "Manager, Food Industries Ltd."
                },
                {
                  text: "Reliable partner with professional attitude!",
                  author: "Ivaylo Gramatikov",
                  position: "Director, Global Foods Ltd."
                },
                {
                  text: "Always timely deliveries and excellent quality!",
                  author: "Danil Zhelyazkov",
                  position: "Owner, Euro Trading Ltd."
                }
              ]
            }
          },
          about: {
            hero: {
              title: "About Global Trade International 2002 Ltd",
              description: "For over 2 years, we've been delivering quality oils to global markets, building trust and partnerships."
            },
            overview: {
              title: "Our History",
              description: "Global Trade International 2002 Ltd was founded in 2022 with the mission to provide high-quality food oils to international markets. Today, we are proud to be one of the leading suppliers in the industry, serving clients in over 25+ European countries.",
              headquarters: {
                title: "Седалище",
                country: "BULGARIA",
                countryDesc: "European Union",
                city: "Sofia",
                cityDesc: "Slatina District",
                address: "63 Shipchenski Prohod Blvd",
                addressDesc: "Business Center",
                floor: "Floor 2"
              },
              advantages: {
                title: "Advantages",
                quality: {
                  title: "Highest Quality",
                  desc: "Certified Production"
                },
                delivery: {
                  title: "Express Shipping 24/7",
                  desc: "Fast and Reliable Delivery"
                },
                consultation: {
                  title: "Free Consultation",
                  desc: "From Our Logistics Experts"
                },
                guarantee: "Guaranteed Quality"
              },
              experience: "years of experience"
            },
            values: {
              title: "Our Values",
              items: [
                {
                  title: "Quality",
                  description: "Highest standards in every aspect"
                },
                {
                  title: "Global Reach",
                  description: "Presence in international markets"
                },
                {
                  title: "Partnership",
                  description: "Building long-term relationships"
                },
                {
                  title: "Innovation",
                  description: "Continuous development and improvement"
                }
              ]
            }
          },
          services: {
            hero: {
              subtitle: "Our Services",
              title: "Quality Solutions for Your Business",
              description: "We offer a wide range of services in oil trading"
            },
            products: [
              {
                title: "Sunflower Oil",
                description: "Import and export of refined and unrefined sunflower oil of the highest quality.",
                features: [
                  "Refined and Unrefined",
                  "Bulk Packaging",
                  "Certified Quality",
                  "Competitive Prices"
                ]
              },
              {
                title: "Soybean Oil",
                description: "Trading in high-quality soybean oil for the food industry.",
                features: [
                  "Industrial Supplies",
                  "Guaranteed Origin",
                  "Laboratory Tested",
                  "Fast Delivery"
                ]
              }
            ]
          },
          contact: {
            hero: {
              subtitle: "Contact Us",
              title: "How Can We Help?",
              description: "Our team is at your disposal for questions and assistance"
            },
            info: {
              headquarters: {
                title: "Headquarters",
                country: {
                  main: "BULGARIA",
                  sub: "European Union"
                },
                city: {
                  main: "Sofia",
                  sub: "Slatina District"
                },
                address: {
                  main: '63 Shipchenski Prohod Blvd',
                  sub: "Business Center"
                },
                floor: "Floor 2"
              },
              phone: {
                title: "Phone",
                main: "+359 877 439 989",
                sub: "Mobile Phone"
              },
              email: {
                title: "Email",
                main: "info@globaltrade.com",
                sub: "For general information"
              },
              hours: {
                title: "Working Hours",
                weekdays: {
                  main: "Monday - Friday",
                  sub: "08:00 - 17:00"
                },
                weekend: {
                  main: "Saturday - Sunday",
                  sub: "10:00 - 17:00"
                }
              }
            },
            form: {
              title: "Send a Message",
              name: "Name",
              email: "Email",
              phone: "Phone",
              message: "Message",
              submit: "Send Message"
            },
            map: {
              title: "Where to Find Us"
            }
          },
          footer: {
            company: {
              name: "Global Trade International",
              subtitle: "2002 Ltd",
              description: "Quality oils for global markets"
            },
            navigation: {
              title: "Navigation",
              home: "Home",
              about: "About",
              services: "Services",
              contact: "Contact"
            },
            contact: {
              title: "Contact",
              phone: "+359 877 439 989",
              email: "info@globaltrade.com",
              address: "Sofia, Bulgaria"
            },
            copyright: "All rights reserved."
          }
        }
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
