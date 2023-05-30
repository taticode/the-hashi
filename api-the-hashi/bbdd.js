
const { v4 : uuidv4 } = require('uuid')
const thefork = {
    ofertas : [
        { 
          id : uuidv4(),
          dato        : 'oferta',
          imagen      : '#',
          name      : '¡200 Yums extra!',
          descripcion : 'Durante esta semana'
        },
        { 
          id : uuidv4(),
          dato        : 'oferta',
          imagen      : '#',
          name      : '¡300 Yums extra!',
          descripcion : 'Durante esta semana'
        },
        { 
          id : uuidv4(),
          dato        : 'regalo',
          imagen      : '#',
          name      : '¡Cena gratis!',
          descripcion : 'Sólo para socios'
        },
        { 
          id : uuidv4(),
          dato        : 'regalo',
          imagen      : '#',
          name      : '¡Postre de regalo!',
          descripcion : 'Por gasto igual o superior a 30 euros'
        },
        { 
          id : uuidv4(),
          dato        : 'regalo',
          imagen      : '#',
          name      : '¡2 bebidas gratis!',
          descripcion : 'Por tiempo limitado'
        },
      ],
    restaurantes : [
      {
        id: uuidv4(),
        name: 'Yatai Market',
        subtitle:
          'Teriyaki, ramen y otros platos de la cocina asiática en un restaurante de estilo industrial chic',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/yatai-market/yatai-3.png',
        tipo: ['Asiático', 'Japonés', 'Street food', 'Cocktails'],
        rate: 9.0,
        yums: true,
        tags: [
          { tagName: 'Double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
        {
          street: 'Calle del Dr Cortezo',
          streetNumber: 10,
          building: '',
          cp: '28012',
          city: 'Madrid',
        },
        mediumPrice: 11,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 20, class: 'discount' }],
        menu: [
          {
            cathegory: 'Ramen Noodle',
            dishes: [
              {
                name: 'Mariscos',
                description:
                  'Caldo de shio burst shifudo salt broth seafood langostino,bola de pescado rejos de calamares,shiitake variada,huevo,algas cebolletas hoja de bonito',
                price: '11,50',
              },
              {
                name: 'Chasiu',
                description:
                  'Caldo de chasiu de cerdo, soja intensa noukon shoyu,soy sauce pork chasiu de panceta,bambú,algas, huevo,shitake variada,cebolleta, cebolla frita,brotes',
                price: '8,50',
              },
              {
                name: 'Miso',
                description:
                  'Caldo de miso con pollo frito miso karaage miso fried chicken pollo sofrito,bambú,shiitake variada, huevo,algas,cebolleta brotes',
                price: '8,50',
              },
              {
                name: 'Picante',
                description:
                  'Caldo de carne de morcillo de ternera,picante borusu layou,original spicy beef carne morcillo de ternera, bambú, kimuchi,shiitake, sésamo ,variada,huevo, cebolleta,cebolla frita, aceite picante',
                price: '8,50',
              },
              {
                name: 'Ramen Frito Con Pollo Curry',
                description:
                  'Tallarines blanco con pollo curry chicken curry noodles',
                price: '8,50',
              },
            ],
          },
          {
            cathegory: 'Udon Noodle',
            dishes: [
              {
                name: 'Yakiudon Marisco',
                description: 'Udon frito con marisco shifudo-age',
                price: '11.50',
              },
              {
                name: 'Yakiudon De Ternera',
                description: 'Udon salteado con lonchita de ternera gyuniku-age',
                price: '10,50',
              },
              {
                name: 'Yasaiudon Con Verdura',
                description: 'Udon frito con verdura',
                price: '8,00',
              },
              {
                name: 'Yasaiudon Con sopa',
                description: 'Udon con sopa y verdura',
                price: '8,00',
              },
            ],
          },
  
          {
            cathegory: 'Arroz',
            dishes: [
              {
                name: 'Lomo De Cerdo',
                description: 'Lomo de cerdo crujiente con arroz y salsa tonkatsu',
                price: '8,50',
              },
              {
                name: 'Pollo Curry Crujiente',
                description: 'Pollo frito crujiente con arroz y salsa curri',
                price: '8,50',
              },
              {
                name: 'Pollo Teriyaki Bento',
                description: 'Arroz con pollo teriyaki',
                price: '8,50',
              },
            ],
          },
          {
            cathegory: 'Tapas',
            dishes: [
              {
                name: 'Tamago',
                description: 'Huevo de agua con trufa',
                price: '2,40',
              },
              {
                name: 'Kimchi',
                description: 'Col picante',
                price: '2,80',
              },
              {
                name: 'Bambú',
                description: 'Bambú take',
                price: '2,80',
              },
              {
                name: 'karaage',
                description: 'Pollo frito japonés',
                price: '3,80',
              },
              {
                name: 'Tonkatsu',
                description: 'Lomo crujiente katsuretsu',
                price: '3,80',
              },
              {
                name: 'Harumaki Vegetal',
                description: 'Rollito vegetal Harumaki',
                price: '1,80',
              },
            ],
          },
          {
            cathegory: 'Gyozas',
            dishes: [
              {
                name: 'Mariscos',
                description: '',
                price: '11,50',
              },
              {
                name: 'Mariscos',
                description: '',
                price: '11,50',
              },
              {
                name: 'Mariscos',
                description: '',
                price: '11,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Green Tea Sushi & Cocktail',
        subtitle:
          'Restaurante retro chic, en un exclusivo hotel, que ofrece sushi, makis y fuentes con forma de barco con una cuidada presentación',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/green-tea-sushi/green-tea-sushi-1.png',
        tipo: ['Japonés', 'Vida nocturna'],
        rate: 8.0,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Plaza de las Cortes',
            streetNumber: 7,
            building: 'Westin Palace',
            cp: '28014',
            city: 'Madrid',
          },
        
        mediumPrice: 36,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Entrantes',
            dishes: [
              {
                name: 'Ensalada de pato crujiente',
                description: '',
                price: '16,50',
              },
              {
                name: 'Ceviche de corvina',
                description: '',
                price: '18,50',
              },
              {
                name: 'Tartar de atún',
                description: '',
                price: '22,50',
              },
              {
                name: 'Tartar de salmón',
                description: '',
                price: '18,50',
              },
              {
                name: 'Poke bowl de salmón y atún',
                description: '',
                price: '18,50',
              },
            ],
          },
          {
            cathegory: 'Platos principales',
            dishes: [
              {
                name: 'Selección tataki del chef',
                description: '',
                price: '24.50',
              },
              {
                name: 'Tataki de atún y salsa ponzu',
                description: '',
                price: '22,50',
              },
              {
                name: 'Salmón teriyaki y arroz',
                description: '',
                price: '22,50',
              },
              {
                name: 'Tataki de solomillo',
                description: '',
                price: '26,50',
              },
            ],
          },
  
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Crujiente de frutos rojos y maracuyá',
                description: '',
                price: '9,50',
              },
              {
                name: 'Coulant de chocolate',
                description: '',
                price: '9,50',
              },
              {
                name: 'Helado de té verde',
                description: '',
                price: '9,50',
              },
              {
                name: 'Mochis',
                description: '',
                price: '9,50',
              },
              {
                name: 'Tiramisú',
                description: '',
                price: '9,50',
              },
              {
                name: 'Sorbete de limón o frambuesa',
                description: '',
                price: '9,50',
              },
            ],
          },
          {
            cathegory: 'Maki roll special',
            dishes: [
              {
                name: 'Caterpillar roll',
                description: '',
                price: '20,50',
              },
              {
                name: 'Spicy tuna roll',
                description: '',
                price: '19,50',
              },
              {
                name: 'House roll',
                description: '',
                price: '19,50',
              },
              {
                name: 'Philadelphia roll',
                description: '',
                price: '19,50',
              },
              {
                name: 'Crunchy duck roll',
                description: '',
                price: '19,50',
              },
              {
                name: 'Sake toro roll',
                description: '',
                price: '19,50',
              },
            ],
          },
          {
            cathegory: 'Bebidas',
            dishes: [
              {
                name: 'Botella de agua',
                description: '',
                price: '5,00',
              },
              {
                name: 'Café',
                description: '',
                price: '3,85',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Rangoli',
        subtitle:
          'Restaurante moderno con versiones innovadoras de especialidades indias',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/rangoli/rangoli-15.png',
        tipo: ['Indio', 'Cocina tradicional', 'Cocina de mercado'],
        rate: 9.7,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address:
          {
            street: 'Calle de Valverde',
            streetNumber: 8,
            building: '',
            cp: '28004',
            city: 'Madrid',
          },
        
        mediumPrice: 30,
        discounts: [{ value: 30, class: 'discount' }],
        menu: [
          {
            cathegory: 'Entrantes',
            dishes: [
              {
                name: 'Aloo Samosa',
                description:
                  'Empanadillas de masa casera rellena de patata, guisantes y especias ligeramente picantes, con semillas de cilantro',
                price: '7,30',
              },
              {
                name: 'Keema Samosa',
                description:
                  'Empanadillas de masa crujiente rellena de carne picada de pollo, cebolla, jengibre, semillas de cilantro y más especias',
                price: '8,00',
              },
              {
                name: 'Onion Bahji',
                description: '',
                price: '6,50',
              },
              {
                name: 'Pakora',
                description:
                  'Tempura vegetal estilo indio en harina de garbanzos, especias y hierbas frescas Murgh Pakora',
                price: '7,50',
              },
              {
                name: 'Murgh Pakora',
                description:
                  'Tempura de pollo estilo indio en harina de garbanzos, especias y hierbas frescas',
                price: '8,50',
              },
              {
                name: 'Rangoli Chaat',
                description:
                  'Rebozado de garbanzo y patata, cubierto de yogur y un chutney de tamarindo. Acompañado de unas obleas crujientes y fideos de garbanzo',
                price: '8,50',
              },
              {
                name: 'Aloo Tiki',
                description:
                  'Pastel de patata cocida crujuente relleno de anacardos y guisantes',
                price: '7,00',
              },
              {
                name: 'Entran-Tres',
                description:
                  'Combinado de Aloo Samosa, Onion Bhaji y Murgh Pakora',
                price: '15,50',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Gulab Jamun',
                description: 'Tradicional bizcocho en almíbar',
                price: '6,50',
              },
              {
                name: 'Pista Kulfi',
                description: 'Helado artesano de pistacho',
                price: '6,50',
              },
              {
                name: 'Mango Kulfi',
                description: 'Helado artesano de mango',
                price: '6,50',
              },
              {
                name: 'Gajjar ka Halwa',
                description:
                  'Zanahoria rallada preparada a fuego lento con leche y azúcar',
                price: '6,50',
              },
              {
                name: 'Mango Lassi',
                description: 'Crema de yogur batido con mango Kesar',
                price: '6,00',
              },
              {
                name: 'Coulant de chocolate',
                description: 'Coulant de chocolate con helado de vainilla',
                price: '6,50',
              },
              {
                name: 'Nutenaan',
                description:
                  'Pan indio relleno de Nutella, frutos secos y un toque de coco',
                price: '7,00',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Asia Gallery - Lagasca',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/asia-gallery/asia-gallery-10.png',
        tipo: ['Asiático', 'Chino', 'Romántico', 'Gourmet'],
        rate: 9.1,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Lagasca',
            streetNumber: 82,
            building: '',
            cp: '28001',
            city: 'Madrid',
          },
        mediumPrice: 36,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Entrantes',
            dishes: [
              {
                name: 'Bang Bang Salads',
                description:
                  'Ensalada de setas y pollo de corral con aliño de chili picante, aceite de sésamo y cilantro fresco',
                price: '12,00',
              },
              {
                name: 'Sopa Agripicante',
                description: 'Clásica sopa Sichuan con pollo y setas shiitake',
                price: '8,00',
              },
              {
                name: 'Sopa de Maíz Dulce',
                description: 'Sopa de maíz y carne de pollo',
                price: '8,00',
              },
              {
                name: 'Consomé imperial',
                description:
                  'Caldo de pollo de corral hervido con gingseng, col china y goyi',
                price: '10,00',
              },
              {
                name: 'Rollitos Crujientes de Pato',
                description:
                  'Rollitos de primavera crujientes con carne de pato y verduras',
                price: '12,00',
              },
            ],
          },
          {
            cathegory: 'Mariscos',
            dishes: [
              {
                name: 'Bogavante Asia Gallery',
                description:
                  'Opción 1: Tempurizado estilo bi-feng-tang, opción 2: Salteado con jengibre y chalotas',
                price: '42,50',
              },
              {
                name: 'Langostinos Asia Gallery',
                description:
                  'Langostino tigre glaseado con miel y nueces cantonesas',
                price: '20,00',
              },
              {
                name: 'Langostinos Salteados con Jengibre y Cebolleta',
                description:
                  'Langostino tigre salteado con jengibre y cebolleta verde',
                price: '20,00',
              },
              {
                name: 'Singapore Chili prawns',
                description:
                  'Pasta de ajo y jengibre, chalotas, chilis rojos, cilantro fresco y mantou',
                price: '20,00',
              },
              {
                name: 'Langostinos Kon Po Picantes',
                description: 'Salteado de langostinos con chili seco y anacardos',
                price: '20,00',
              },
              {
                name: 'La familia feliz',
                description: 'Plato clásico de mar y montaña',
                price: '26,00',
              },
              {
                name: 'Lubina Salvaje al vapor',
                description:
                  'Filete de lubina con jengibre y cebolletas, acompañado de soja supreme',
                price: '32,00',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Tarta casera de Zanahoria',
                description: '',
                price: '8,50',
              },
              {
                name: 'Cheese cake original con helado de vainilla',
                description: '',
                price: '8,50',
              },
              {
                name: 'Tapioca cocinada en leche de coco con mango',
                description: '',
                price: '7,50',
              },
              {
                name: 'Sorbete de Limón al cava',
                description: '',
                price: '7,50',
              },
              {
                name: 'Coulant con Helado de Vainilla',
                description: '',
                price: '8,50',
              },
              {
                name: 'Helados artesanos con nueces caramelizadas',
                description: '',
                price: '7,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Radhuni',
        subtitle:
          'Cocina típica de la india, como platos de arroz, tandoori y tikka, en un restaurante informal con opciones vegetarianas',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/radhuni/radhuni-3.png',
        tipo: ['Asiático', 'Hindú', 'Acogedor', 'Tradicional'],
        rate: 9.4,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle Príncipe Carlos',
            streetNumber: 21,
            building: '',
            cp: '28050',
            city: 'Madrid',
          },
        mediumPrice: 17,
        discounts: [
          { value: 40, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Entrantes',
            dishes: [
              {
                name: 'Lamb samosa',
                description: '',
                price: '5,95',
              },
              {
                name: 'Sheek kebab',
                description: '',
                price: '6,95',
              },
              {
                name: 'Aloo tikka',
                description: '',
                price: '4,95',
              },
              {
                name: 'Pakura',
                description: '',
                price: '4,95',
              },
            ],
          },
          {
            cathegory: 'Platos principales',
            dishes: [
              {
                name: 'Chicken tikka massala',
                description: '',
                price: '13,95',
              },
              {
                name: 'Lamb balti',
                description: '',
                price: '15,95',
              },
              {
                name: 'Mix vegetales',
                description: '',
                price: '10,95',
              },
              {
                name: 'Lamb Karahi',
                description: '',
                price: '15,95',
              },
              {
                name: 'King Prawn Bhuna',
                description: '',
                price: '18,95',
              },
              {
                name: 'Garlic Chili Chicken',
                description: '',
                price: '13,95',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Gajar Halwa',
                description: '',
                price: '6,95',
              },
              {
                name: 'Mango Lassi',
                description: '',
                price: '4,50',
              },
              {
                name: 'Golab jam',
                description: '',
                price: '5,50',
              },
              {
                name: 'Pistacho Kulfi',
                description: '',
                price: '5,50',
              },
            ],
          },
          {
            cathegory: 'Bebidas',
            dishes: [
              {
                name: 'Botella de agua',
                description: '',
                price: '2,50',
              },
              {
                name: 'Copa de vino',
                description: '',
                price: '3,50',
              },
              {
                name: 'Café',
                description: '',
                price: '2,00',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Ponzano',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/ramen-shifu-ponzano/ramen-shifu-ponzano-3.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.1,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Espronceda',
            streetNumber: 7,
            building: '',
            cp: '28003',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pato',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Toledo',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/ramen-shifu-toledo/ramen-shifu-toledo-1.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.1,
        yums: false,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle Toledo',
            streetNumber: 24,
            building: '',
            cp: '28005',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pto',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Ayala',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/ramen-shifu-ayala/ramen-shifu-ayala-9.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.2,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Ayala',
            streetNumber: 65,
            building: '',
            cp: '28001',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pto',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Plaza España',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail:
          '/assets/img/ramen-shifu-plaza-espana/ramen-shifu-plaza-espana-5.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.0,
        yums: false,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Isabel la Católica',
            streetNumber: 15,
            building: '',
            cp: '28013',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pto',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Fuencarral',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail:
          '/assets/img/ramen-shifu-fuencarral/ramen-shifu-fuencarral-8.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.3,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Fuencarral',
            streetNumber: 93,
            building: '',
            cp: '28004',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pto',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Atocha',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/ramen-shifu-atocha/ramen-shifu-atocha-8.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.8,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Fuencarral',
            streetNumber: 93,
            building: '',
            cp: '28004',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pto',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Ramen Shifu - Atocha',
        subtitle:
          'Propuesta desenfadada de cocina china contemporánea, con producto fresco de cercanía',
        noboriBadge: 'Hashi insider',
        thumbnail: '/assets/img/ramen-shifu-atocha/ramen-shifu-atocha-8.png',
        tipo: ['Asiático', 'Japonés', 'Street food'],
        rate: 9.3,
        yums: true,
        tags: [
          { tagName: 'double', class: 'double', icon: '' },
          { tagName: 'insider', class: 'yums', icon: '' },
          { tagName: 'yums', class: 'insider', icon: '' },
          { tagName: 'japanín', class: 'japanin', icon: '' },
          { tagName: 'pay', class: 'pay', icon: '/assets/icons/coin.png' },
        ],
        address: 
          {
            street: 'Calle de Fuencarral',
            streetNumber: 93,
            building: '',
            cp: '28004',
            city: 'Madrid',
          },
        mediumPrice: 18,
        discounts: [
          { value: 50, class: 'discount' },
          { value: 30, class: 'discount' },
        ],
        menu: [
          {
            cathegory: 'Aperitivos',
            dishes: [
              {
                name: 'Takoyaki',
                description:
                  'Croquetas japonesas con pulpo acompañadas con mayonesa japonesa, salsa okonomiyaki y copos de bonito (4 piezas)',
                price: '4,80',
              },
              {
                name: 'Karaage',
                description:
                  'Seis bolitas de pollo rebozado al estilo japonés servidas con salsa agridulce',
                price: '4,90',
              },
              {
                name: 'Edamame',
                description: 'Vainas de soja salteadas con sal marina',
                price: '3,80',
              },
              {
                name: 'Goma Wakame',
                description: 'Ensalada de algas con sésamo',
                price: '3,20',
              },
              {
                name: 'Gyozas',
                description:
                  'Empanadillas a la plancha rellenas de carne de cerdo, col, cebollino, ajo y jengibre, servidas con salsa de soja (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Gyozas veganas',
                description:
                  'Empanadillas a la plancha rellenas de repollo, cebolla, zanahoria y cebollino (6 piezas)',
                price: '4,80',
              },
              {
                name: 'Kimchi',
                description:
                  'Ensalada coreana con vegetales salteados con especias picantes',
                price: '4,00',
              },
              {
                name: 'Chashu Beef Fried',
                description:
                  'Patatas fritas con chashu, ternera, cebolla frita y cilantro, servidas con mayonesa japonesa',
                price: '4,80',
              },
            ],
          },
          {
            cathegory: 'Baos',
            dishes: [
              {
                name: 'Bao de Chashu',
                description:
                  'Bao relleno de carne de cerdo, cacahuetes y canónigos, servido con mayonesa japonesa',
                price: '4,90',
              },
              {
                name: 'Bao de Pollo',
                description:
                  'Bao relleno de pollo frito crujiente, cacahuetes y canónigos, servido con salsa tonkatsu',
                price: '4,90',
              },
              {
                name: 'Bao de Ternera',
                description:
                  'Bao relleno de ternera, cacahuetes y canónigos, servido con salsa de sésamo',
                price: '4,90',
              },
              {
                name: 'Bao de Pato',
                description:
                  'Bao relleno de tiras de pato crujiente, cacahuetes y canónigos con salsa hoisin',
                price: '4,90',
              },
              {
                name: 'Niku Nashi Bao (Vegano)',
                description:
                  'Bao con proteína vegetal heura, canónigos, cacahuete y salsa de sésamo',
                price: '4,90',
              },
            ],
          },
          {
            cathegory: 'Ramen',
            dishes: [
              {
                name: 'Tonkotsu Ramen',
                description:
                  'Fideos, pak choi, nori, bambú, cebollino y brotes de soja, servido con su caldo casero',
                price: '9,90',
              },
              {
                name: 'Shoyu Ramen',
                description:
                  'Fideos con chashu, pak choi, nori, bambú, brotes de soja, naruto, huevo y cebollino en su caldo casero y shoyu',
                price: '9,90',
              },
              {
                name: 'Miso Ramen',
                description:
                  'Fideos con chashu, pak choi chashu, nori, bambú, naruto, soja, brotes de soja, huevo y cebollino, servido en su caldo casero con miso',
                price: '8,00',
              },
              {
                name: 'Tan-Tan Ramen',
                description:
                  'Fideos con carne picada, pak choi, brotes de soja, huevo, salsa cacahuete, cebollino y miso, servido en su caldo casero con salsa picante especial, ¡Elige el nivel de picante de 1 a 5!',
                price: '7,50',
              },
              {
                name: 'Beef Ramen',
                description:
                  'Fideos con ternera, pak choi, cebolla morada, brotes de soja, canónigos, guindilla, huevo y cebollino, servido en su caldo casero',
                price: '11,20',
              },
              {
                name: 'Yasai Miso Ramen',
                description:
                  'Fideos con pak choi, brotes de soja, setas shiitake, repollo, huevo y cebollino, servido con su caldo vegetal casero y miso',
                price: '9,50',
              },
              {
                name: 'Fried Chicken Ramen',
                description:
                  'Fideos con pollo crujiente, pak choi, naruto, bambú, nori, brotes de soja, setas shiitake, huevo y cebollino, servido con su caldo casero',
                price: '10,95',
              },
              {
                name: 'Ebi Tempura Ramen',
                description:
                  'Fideos con langostino en tempura, brotes de soja, cebollino, huevo y pak choi, servido en caldo casero y shoyu',
                price: '9,50',
              },
              {
                name: 'Ramen de Pto',
                description:
                  'Fideos con tiras de pato crujiente, brotes de soja, huevo, pak choi, bambú, naruto, nori y cebollino, servido en su caldo casero',
                price: '12,50',
              },
              {
                name: 'Shichu Ramen',
                description:
                  'Fideos con ternera guisada al estilo taiwanés, brotes de soja, pak choi, huevo y cebollino, servido en su caldo casero',
                price: '12,20',
              },
            ],
          },
          {
            cathegory: 'Postres',
            dishes: [
              {
                name: 'Mochi de té verde',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Mango-Maracuyá',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi Cheesecake',
                description: '',
                price: '4,50',
              },
              {
                name: 'Mochi de Té Verde',
                description: '',
                price: '4,50',
              },
            ],
          },
        ],
      },
    ]
}

module.exports = thefork