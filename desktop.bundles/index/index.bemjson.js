module.exports = {
    block: 'page',
    title: 'Главная Лесол',
    favicon: './favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'default' },
    content: [
        {
            block: "header",
            tag: "header",
            content: [
                {
                    block: "top",
                    content: {
                        block: "container",
                        content: [
                            {
                                block: "blocks",
                                content: [
                                    {
                                        elem: "side",
                                        elemMods: { align: "left" },
                                        content: [
                                            {
                                                block: "block-menu",
                                                tag: "nav",
                                                content: {
                                                    elem: "block-items",
                                                    tag: "ul",
                                                    content: [
                                                        {
                                                            elem: "item",
                                                            tag: "li",
                                                            content: {
                                                                elem: "link",
                                                                elemMods: { align: "hover" },
                                                                tag: "a",
                                                                attrs: {href: "#"},
                                                                content: "Продукция и услуги"
                                                            }
                                                        },
                                                        {
                                                            elem: "item",
                                                            tag: "li",
                                                            content: {
                                                                elem: "link",
                                                                elemMods: { align: "hover" },
                                                                tag: "a",
                                                                attrs: {href: "#"},
                                                                content: "Как купить"
                                                            }
                                                        },
                                                        {
                                                            elem: "item",
                                                            tag: "li",
                                                            content: {
                                                                elem: "link",
                                                                elemMods: { align: "hover" },
                                                                tag: "a",
                                                                attrs: {href: "#"},
                                                                content: "О компании"
                                                            }
                                                        },
                                                        {
                                                            elem: "item",
                                                            tag: "li",
                                                            content: {
                                                                elem: "link",
                                                                elemMods: { align: "border-left" },
                                                                tag: "a",
                                                                attrs: {href: "#"},
                                                                content: "Москва"
                                                            }
                                                        }
                                                    ]
                                                }

                                            }
                                        ]
                                    },
                                    {
                                        elem: "side",
                                        elemMods: { align: "right" },
                                        content: [
                                            {
                                                block: "button-a",
                                                content: {
                                                    elem: "link",
                                                    tag: "a",
                                                    attrs: { href: "#" },
                                                    content: "Заказать сейчас"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    block: "container",
                    content: [
                        {
                            block: "blocks",
                            mix: { block: 'header__blocks' },
                            content: [
                                {
                                    elem: "side",
                                    elemMods: { align: "left" },
                                    content: [
                                        {
                                            block: 'logo',
                                            content: [
                                                {
                                                    block: 'image',
                                                    url: "../../img/logo.svg",
                                                    alt: "Лесол"
                                                },
                                                {
                                                    elem: "nameSlogan",
                                                    tag: "span",
                                                    content: "Производство металлоизделий, кровли, водостоков"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: "side",
                                    elemMods: { align: "center" },
                                    content: [
                                        {
                                            elem: "text",
                                            tag: "span",
                                            content: "Горячая линия"
                                        },
                                        {
                                            elem: "href",
                                            tag: "a",
                                            url: "tel:+74951533109",
                                            content: "+7 (495) 153-31-09"
                                        },
                                        {
                                            elem: "text",
                                            tag: "span",
                                            content: "Звоните ежедневно, 9:00—18:00"
                                        }

                                    ]
                                },
                                {
                                    elem: "side",
                                    elemMods: { align: "right" },
                                    content: [
                                        {
                                            block: "form",
                                            tag: "form",
                                            attrs: { action: "/catalog/" },
                                            content: [
                                                {
                                                    block: "search",
                                                    content: [
                                                        {
                                                            elem: "input",
                                                            tag: "input",
                                                            attrs: {placeholder: "Введите наименование…", type: "search"},
                                                        },
                                                        {
                                                            elem: "button",
                                                            tag: "button",
                                                            attrs: {type: "button"},
                                                            content: "Найти"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: "fixed",
                    attrs: {id: "navigation"},
                    content: {
                        block: "nav-fixed",
                        mix: {block: "container "},
                        content: [
                            {
                                block: 'logo',
                                content: [
                                    {
                                        block: 'image',
                                        mods: {logo: "fixed"},
                                        url: "../../img/logo.svg",
                                        alt: "Лесол"
                                    }
                                ]
                            },
                            {
                                block: 'block-menu',
                                mods: {margin: "top"},
                                tag: "nav",
                                content: {
                                    elem: "block-items",
                                    tag: "ul",
                                    content: [
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                elemMods: { align: "hover", color: "blue" },
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Каталог"
                                            }
                                        },
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                elemMods: { align: "hover", color: "blue" },
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Как купить"
                                            }
                                        },
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                elemMods: { align: "hover", color: "blue" },
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "О компании"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                block: "blocks",
                                mods: {margin: "top"},
                                content: {
                                    elem: "side",
                                    elemMods: { align: "center" },
                                    content: [
                                        {
                                            elem: "href",
                                            elemMods: { size: "m" },
                                            tag: "a",
                                            url: "tel:+74951533109",
                                            content: "+7 (495) 153-31-09"
                                        },
                                        {
                                            elem: "text",
                                            tag: "span",
                                            content: "Звоните ежедневно, 9:00—18:00"
                                        }

                                    ]
                                }
                            },
                            {
                                block: "button-a",
                                mods: {margin: "top"},
                                content: {
                                    elem: "link",
                                    tag: "a",
                                    attrs: { href: "#" },
                                    content: "Заказать сейчас"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            block: "section",
            tag: "section",
            content: [
                {
                    block: "container",
                    content: [
                        {
                            elem: "head",
                            tag: "h1",
                            mix: { block: 'section__align-center' },
                            content: "Продажа металлопроката от производителя"
                        },
                        {
                            elem: "description",
                            tag: "p",
                            mix: { block: 'section__align-center' },
                            content: "Изготовим изделия нужного вам размера и цвета за 2-4 дня"
                        },
                        {
                            block: "catalog",
                            content: [
                                {
                                    block: "catalog-item",
                                    content: [
                                        {
                                            elem: "caption",
                                            content: "Каталог продукции"
                                        },
                                        {
                                            block: "catalog-menu-blocks",
                                            tag: "ul",
                                            content: [
                                                {
                                                    content: 'Водосточные системы',
                                                    url: '#',
                                                    img: '../../img/noun-pipeline-605867.svg',
                                                    countri: "18"
                                                },
                                                {
                                                    content: 'Кровля',
                                                    url: '#',
                                                    img: '../../img/noun-roof-71229.svg',
                                                    countri: "26"
                                                },
                                                {
                                                    content: 'Профнастил',
                                                    url: '#',
                                                    img: '../../img/group-37.svg',
                                                    countri: "7"
                                                },
                                                {
                                                    content: 'Листовой прокат',
                                                    url: '#',
                                                    img: '../../img/noun-sheets-1282472.svg',
                                                    countri: "98"
                                                },
                                                {
                                                    content: 'Фасад',
                                                    url: '#',
                                                    img: '../../img/noun-home-1938118.svg',
                                                    countri: "73"
                                                },
                                                {
                                                    content: 'Снегозадержатели',
                                                    url: '#',
                                                    img: '../../img/noun-snow-1399767.svg',
                                                    countri: "38"
                                                },
                                                {
                                                    content: 'Рулонная сталь',
                                                    url: '#',
                                                    img: '../../img/noun-roll-511470.svg',
                                                    countri: "17"
                                                },
                                                {
                                                    content: 'Распродажа металла',
                                                    url: '#',
                                                    img: '../../img/noun-sale-1897279.svg',
                                                    countri: "5"
                                                }
                                            ].map(function(item) {
                                                return {
                                                    block: 'menu-items',
                                                    tag: "li",
                                                    mods: { type: 'link', image: 'yes' },
                                                    content: {
                                                        elem : 'link',
                                                        tag: "a",
                                                        attrs: {href: item.url},
                                                        mix: { block: 'menu-item', elem: 'link' },
                                                        url : item.url,
                                                        content : [
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'menu-items', elem: 'image' },
                                                                alt: item.content,
                                                                url: item.img
                                                            },
                                                            {
                                                                elem: 'link-text',
                                                                content: item.content
                                                            },
                                                            {
                                                                elem: 'count',
                                                                mix: { block: 'menu-items', elem: 'count-sltyle' },
                                                                content: item.countri
                                                            }
                                                        ]
                                                    }
                                                };
                                            }),
                                        },
                                    ]
                                },
                                {
                                    block: "catalog-item",
                                    content: [
                                        {
                                            elem: "caption",
                                            content: "Обработка металла"
                                        },
                                        {
                                            block: "catalog-menu-blocks",
                                            tag: "ul",
                                            content: [
                                                {
                                                    content: 'Обработка',
                                                    url: '#',
                                                    img: '../../img/noun-welding-255010.svg',
                                                    desc: "",
                                                    countri: "11"
                                                },
                                                {
                                                    content: 'Покраска',
                                                    url: '#',
                                                    img: '../../img/noun-spray-1547679.svg',
                                                    countri: "18",
                                                }
                                            ].map(function(item) {
                                                return {
                                                    block: 'menu-items',
                                                    tag: "li",
                                                    mods: { type: 'link', image: 'yes' },
                                                    content: [
                                                        {
                                                            elem : 'link',
                                                            tag: "a",
                                                            attrs: {href: item.url},
                                                            url : item.url,
                                                            content : [
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'menu-items', elem: 'image' },
                                                                    alt: item.content,
                                                                    url: item.img
                                                                },
                                                                {
                                                                    elem: 'link-text',
                                                                    content: item.content
                                                                },
                                                                {
                                                                    elem: 'count',
                                                                    mix: { block: 'menu-items', elem: 'count-sltyle' },
                                                                    content: item.countri
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                };
                                            }),

                                        },
                                        {
                                            elem: 'desc',
                                            content: "Покрасим ваши изделия порошковой краской за 48 часов, от 135 руб./м²"
                                        },
                                        {
                                            elem: 'link-color',
                                            mix: {block: "container", elem: "link-style"},
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Посмотреть каталог цветов"
                                        },
                                        {
                                            elem: 'count',
                                            mix: { block: 'menu-items', elem: 'count-sltyle' },
                                            content: "2500",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: "background",
                    content: {
                        block: "container",
                        content: [
                            {
                                elem: "content-block",
                                content: [
                                    {
                                        elem: "item",
                                        content: [
                                            {
                                                elem: "img",
                                                tag: "img",
                                                attrs: {src: "../../img/group-32.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        content: "Размер на выбор"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Изготовим изделия любых размеров под ваши задачи на собственном современном производстве в Москве за 1-3 дня. Предлагаем резку, раскрой, гибку, роспуск металла."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: "item",
                                        content: [
                                            {
                                                elem: "img",
                                                tag: "img",
                                                attrs: {src: "../../img/group.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        content: "Цены от производителя"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Покупайте без посредников и наценок. Производим и продаем металлоизделия оптом и в розницу от 1 желоба, 1 листа, 1 трубы и т. д."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: "item",
                                        content: [
                                            {
                                                elem: "img",
                                                tag: "img",
                                                attrs: {src: "../../img/group-34.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        content: "Красим в 2500 цветов"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Красим металл порошковой краской по каталогам RAL, RR, ПМ, NCS. Подберем оттенок по образцу вашей детали. Стойкая импортная краска, европейское оборудование, 24/7. "
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: "h2",
                                tag: "h2",
                                mix: { block: 'section__align-center' },
                                content: "Как совершить покупку"
                            },
                            {
                                elem: "content-block",
                                content: [
                                    {
                                        elem: "item",
                                        elemMods: {display: "block"},
                                        content: [
                                            {
                                                elem: "img",
                                                elemMods: {border: "radius"},
                                                tag: "img",
                                                attrs: {src: "../../img/1.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        elemMods: {size: "smoll"},
                                                        content: "Сделайте заказ по телефону или заполните анкету на сайте "
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Менеджер пришлет вам счет или квитанцию для оплаты по электронной почте."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: "item",
                                        elemMods: {display: "block"},
                                        content: [
                                            {
                                                elem: "img",
                                                elemMods: {border: "radius"},
                                                tag: "img",
                                                attrs: {src: "../../img/2.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        elemMods: {size: "smoll"},
                                                        content: "Оплатите счет через банк или баковской картой"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: ""
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: "trait",
                                        tag: "span",
                                    },
                                    {
                                        elem: "item",
                                        elemMods: {display: "block"},
                                        content: [
                                            {
                                                elem: "img",
                                                elemMods: {border: "radius"},
                                                tag: "img",
                                                attrs: {src: "../../img/3.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        elemMods: {size: "smoll"},
                                                        content: "Заберите заказ самовывозом или оформите доставку"
                                                    },
                                                    {
                                                        elem: "link",
                                                        mix: {block: "container", elem: "link-style"},
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: "Посмотреть условия доставки"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    block: "container",
                    content: [
                        {
                            elem: "h3",
                            tag: "h3",
                            mix: { block: 'section__align-center' },
                            content: "Часто покупают"
                        },
                        {
                            block: "catalog-element",
                            content: [
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/479c62e275.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/479c62e275.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: "separator",
                },
                {
                    block: "container",
                    content: [
                        {
                            elem: "title-h",
                            mix: { block: 'section__align-center' },
                            content: "О компании"
                        },
                        {
                            block: "container-o-kompanii",
                            content: [
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "title",
                                            content: "Предприятие «Лесол» работает с 2008 года и специализируется на рулонной холоднокатаной стали:",
                                        },
                                        {
                                            block: "ul-container",
                                            tag: "ul",
                                            content: [
                                                {
                                                    elem: "li-item",
                                                    tag: "li",
                                                    content: "Производство металлопроката: штрипс, профнастил, доборные элементы для кровли и стеновых сэндвич–панелей, водосточные системы, лист оцинкованный с полимерным покрытием."
                                                },
                                                {
                                                    elem: "li-item",
                                                    tag: "li",
                                                    content: "Услуги по обработке рулонной стали: отмотка от рулона, продольно-поперечный роспуск и наносим полимерные покрытия на рулоны."
                                                },
                                                {
                                                    elem: "li-item",
                                                    tag: "li",
                                                    content: "Под заказ работаем с материалом заказчика."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: {
                                        elem: "img",
                                        tag: "img",
                                        attrs: {src: "../../img/6589a9b061.jpg"}
                                    }
                                }
                            ]
                        },
                        {
                            block: "conent-certificate",
                            content: [
                                {
                                    elem: "item",
                                    content: {
                                        elem: "img",
                                        tag: "img",
                                        attrs: {src: "../../img/group-36.svg"}
                                    }
                                },
                                {
                                    elem: "item",
                                    content: {
                                        elem: "text",
                                        content: "Вся производимая продукция сертифицирована и соответствует требованиям ГОСТ и ТУ"
                                    }
                                }
                            ]
                        },
                        {
                            block: "buuton",
                            content: {
                                elem: "link",
                                mix: { block: 'catalog-element__link-order' },
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Виртуальный тур по предприятию"
                            }
                        },
                        {
                            block: "blocks-worker",
                            content: [
                                {
                                    elem: "text",
                                    mix: { block: "container__title-h section__align-center"},
                                    content: "Сотрудники",
                                },
                                {
                                    block: "worker-item-block",
                                    content: [
                                        {
                                            content: "Руслан",
                                            img: "../../img/work/name-1.png",
                                        },
                                        {
                                            content: "Зураб",
                                            img: "../../img/work/name-2.png",
                                        },
                                        {
                                            content: "Эльмира",
                                            img: "../../img/work/name-3.png",
                                        },
                                        {
                                            content: "Константин",
                                            img: "../../img/work/name-4.png",
                                        },
                                        {
                                            content: "Пётр",
                                            img: "../../img/work/name-5.png",
                                        },
                                        {
                                            content: "Анна",
                                            img: "../../img/work/name-6.png",
                                        },
                                        {
                                            content: "Константин",
                                            img: "../../img/work/name-7.png",
                                        },
                                        {
                                            content: "Георгий",
                                            img: "../../img/work/name-8.png",
                                        },
                                        {
                                            content: "Анна",
                                            img: "../../img/work/name-9.png",
                                        },
                                        {
                                            content: "Гарик",
                                            img: "../../img/work/name-10.png",
                                        }

                                    ].map(function(item) {
                                        return {
                                            elem: 'item',
                                            mods: { image: 'yes' },
                                            content : [
                                                {
                                                    block: 'image',
                                                    mix: { block: 'blocks-worker', elem: 'image' },
                                                    alt: item.content,
                                                    url: item.img
                                                },
                                                {
                                                    elem: 'name-text',
                                                    content: item.content
                                                }
                                            ]
                                        };
                                    }),
                                },
                            ]
                        }
                    ]
                },
                {
                    block: "separator",
                    mods: { margin: "top"},
                },
                {
                    block: "container",
                    mix: [{ block: 'block-tabs', js: true }],
                    content: {
                        block: "block-tabs",
                        content: [
                            {
                                elem: "ul",
                                tag: "ul",
                                content: [
                                    {
                                        elem: "li",
                                        tag: "li",
                                        attrs: {dataitem: "#tab-1"},
                                        elemMods: {block: "active"},
                                        content: "Сертификаты",
                                    },
                                    {
                                        elem: "li",
                                        tag: "li",
                                        attrs: {dataitem: "#tab-2"},
                                        content: "Благодарственные письма",
                                    }
                                ]
                            },
                            {
                                elem: "tab-item",
                                content: [
                                    {
                                        elem: "content",
                                        attrs: {id: "tab-1",style: "display: block"},
                                        content: {
                                            block: "flex-content",
                                            content: [
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "link-img",
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: [
                                                            {
                                                                elem: "bg-img",
                                                            },
                                                            {
                                                                elem: "img",
                                                                tag: "img",
                                                                attrs: {src: "../../img/certificate/1.png"},
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "link-img",
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: [
                                                            {
                                                                elem: "bg-img",
                                                            },
                                                            {
                                                                elem: "img",
                                                                tag: "img",
                                                                attrs: {src: "../../img/certificate/2.jpg"},
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "link-img",
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: [
                                                            {
                                                                elem: "bg-img",
                                                            },
                                                            {
                                                                elem: "img",
                                                                tag: "img",
                                                                attrs: {src: "../../img/certificate/3.jpg"},
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "link-img",
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: [
                                                            {
                                                                elem: "bg-img",
                                                            },
                                                            {
                                                                elem: "img",
                                                                tag: "img",
                                                                attrs: {src: "../../img/certificate/4.jpg"},
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    content: {
                                                        elem: "link-img",
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: [
                                                            {
                                                                elem: "bg-img",
                                                            },
                                                            {
                                                                elem: "img",
                                                                tag: "img",
                                                                attrs: {src: "../../img/certificate/5.jpg"},
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        elem: "content",
                                        attrs: {id: "tab-2"},
                                        content: {
                                            block: "flex-content",
                                            content: [
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "img",
                                                        tag: "img",
                                                        attrs: {src: "../../img/certificate/1.png"},
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "img",
                                                        tag: "img",
                                                        attrs: {src: "../../img/certificate/2.jpg"},
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "img",
                                                        tag: "img",
                                                        attrs: {src: "../../img/certificate/4.jpg"},
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "img",
                                                        tag: "img",
                                                        attrs: {src: "../../img/certificate/3.jpg"},
                                                    }
                                                },
                                                {
                                                    elem: "item",
                                                    content: {
                                                        elem: "img",
                                                        tag: "img",
                                                        attrs: {src: "../../img/certificate/5.jpg"},
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    block: "background",
                    mods: {padding: "bottom"},
                    content: {
                        block: "container",
                        content: {
                            block: "flex-content",
                            mods: { direction: "column" },
                            content: {
                                block: "form-order",
                                tag: "form",
                                content: [
                                    {
                                        elem: "text-title",
                                        content: "Заказать продукцию или услугу",
                                    },
                                    {
                                        elem: "block-form",
                                        content: [
                                            {
                                                elem: "block-input",
                                                mix: "flex-content flex-content_direction_column",
                                                content: [
                                                    {
                                                        elem: "text",
                                                        mix: { block: 'section__align-center' },
                                                        content: "Сообщим цену по телефону в течение 5 минут",

                                                    },
                                                    {
                                                        elem: "input",
                                                        tag: "input",
                                                        attrs: {type: "tel", placeholder: "Номер телефона"}
                                                    },
                                                    {
                                                        elem: "textarea",
                                                        tag: "textarea",
                                                        attrs: {placeholder: "Здравствуйте, я хочу заказать…", rows: "3", cols: "45", name: "text"}
                                                    },
                                                    {
                                                        elem: "file",
                                                        content: {
                                                            block: "file-upload",
                                                            content: {
                                                                elem: "label",
                                                                tag: "label",
                                                                content: [
                                                                    {
                                                                        elem: "input",
                                                                        tag: "input",
                                                                        attrs: {type: "file"},
                                                                    },
                                                                    {
                                                                        elem: "icon",
                                                                    },
                                                                    {
                                                                        elem: "text",
                                                                        tag: "span",
                                                                        content: "Прикрепить файл"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    {
                                                        elem: "button",
                                                        tag: "button",
                                                        attrs: {type: "button"},
                                                        content: "Узнать цену и получить консультацию"
                                                    },
                                                ]
                                            },
                                            {
                                                block: "block-privacy",
                                                content: [
                                                    {
                                                        elem: "text",
                                                        content: "Нажимая на кнопку вы соглашаетесь с "
                                                    },
                                                    {
                                                        elem: "link",
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: "политикой конфиденциальности"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            }
                        }
                    }
                },
                {
                    block: "container",
                    content: {
                        block: "block-question",
                        content: [
                            {
                                elem: "text-question",
                                mix: { block: "container__title-h section__align-center"},
                                content: "Остались вопросы?",
                            },
                            {
                                elem: "text-work",
                                mix: {block: "blocks__text section__align-center"},
                                tag: "span",
                                content: "Звоните ежедневно, 9:00—18:00"
                            },
                            {
                                elem: "href",
                                tag: "a",
                                mix: {block: "section__align-center"},
                                url: "tel:+74951533109",
                                content: "+7 (495) 153-31-09"
                            },
                            {
                                elem: "text-slogan",
                                mix: { block: "section__align-center"},
                                content: "Консультанты помогут подобрать материал и рассчитают количество, стоимость и срок производства ",
                            },
                            {
                                elem: "block-email",
                                mix: { block: "section__align-center"},
                                content: [
                                    {
                                        elem: "text",
                                        content: "Отправьте заявку через сайт или на почту"
                                    },
                                    {
                                        elem: "link",
                                        tag: "a",
                                        attrs: {href: "mailto:zakaz@lesollp.ru"},
                                        content: "zakaz@lesollp.ru"
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    block: "separator",
                },
                {
                    block: "block-tabs",
                    mods: {margin: "bottom"},
                    content: [
                        {
                            elem: "ul",
                            tag: "ul",
                            mix: {block: "container"},
                            content: [
                                {
                                    elem: "li",
                                    tag: "li",
                                    attrs: {dataitem: "#tab-3"},
                                    elemMods: {block: "active"},
                                    content: "Центральный офис",
                                },
                                {
                                    elem: "li",
                                    tag: "li",
                                    attrs: {dataitem: "#tab-4"},
                                    content: "Производство",
                                }
                            ]
                        },
                        {
                            elem: "tab-item",
                            content: [
                                {
                                    elem: "content",
                                    attrs: {id: "tab-3",style: "display: block"},
                                    mix: [{ block: 'map-contents', js: true }],
                                    content: {
                                        block: "map-content",
                                        content: [
                                            {
                                                elem: "iframe",
                                                tag: "iframe",
                                                attrs: {src: "https://yandex.ru/map-widget/v1/?um=constructor%3A1b56b7909fc6d1da248ea1435c482582672933b8310cb7b51148e89ba91937d9&amp;source=constructor",  width:"100%", height: "397", frameborder:"0"}
                                            },
                                            {
                                                elem: "text-info",
                                                content: [
                                                    {
                                                        elem: "dl",
                                                        tag: "dl",
                                                        content: [
                                                            {
                                                                elem: "dt",
                                                                tag: "dt",
                                                                content: "Адрес:"
                                                            },
                                                            {
                                                                elem: "dd",
                                                                tag: "dd",
                                                                content: "111033, г. Москва, ул. Золоторожский Вал, 11с9"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: "dl",
                                                        tag: "dl",
                                                        content: [
                                                            {
                                                                elem: "dt",
                                                                tag: "dt",
                                                                content: "E-mail:"
                                                            },
                                                            {
                                                                elem: "dd",
                                                                tag: "dd",
                                                                content: {
                                                                    elem: "href",
                                                                    tag: "a",
                                                                    attrs: {href: "mailto:zakaz@lesollp.ru"},
                                                                    content: "zakaz@lesollp.ru"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: "dl",
                                                        tag: "dl",
                                                        content: [
                                                            {
                                                                elem: "dt",
                                                                tag: "dt",
                                                                content: "Работает:"
                                                            },
                                                            {
                                                                elem: "dd",
                                                                tag: "dd",
                                                                content: "пн-пт c 9:00 до 18:00"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    elem: "content",
                                    attrs: {id: "tab-4"},
                                    mix: [{ block: 'map-content', js: true }],
                                    content: {
                                        block: "map-content",
                                        content: "Контент 2"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: "container",
                    content: [
                        {
                            elem: "h3",
                            tag: "h3",
                            mix: { block: 'section__align-center' },
                            elemMods: {margin: "top"},
                            content: "Недавно вы смотрели"
                        },
                        {
                            block: "catalog-element",
                            content: [
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/479c62e275.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/479c62e275.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: "footer",
            tag: "footer",
            content: {
                block: "container",
                content: {
                    block: "block-footer",
                    content: [
                        {
                            elem: "block-item",
                            content: [
                                {
                                    elem: "link",
                                    tag: "a",
                                    attrs: {href: "/"},
                                    content: {
                                        elem: "img-logo",
                                        tag: "img",
                                        attrs: {src: "../../img/invalid-name_2.svg"}
                                    },
                                },
                                {
                                    elem: "text",
                                    content: "© 2008-2018 Завод «Лесол»"
                                },
                                {
                                    elem: "text-link",
                                    tag: "a",
                                    attrs: {href: "#"},
                                    content: "Политика конфиденциальности"
                                },
                                {
                                    elem: "link",
                                    tag: "a",
                                    attrs: {href: "#"},
                                    content: "Карта сайта"
                                }
                            ]
                        },
                        {
                            elem: "block-item",
                            content: [
                                {
                                    elem: "menu-title",
                                    content: "Продукция"
                                },
                                {
                                    elem: "menu",
                                    tag: "ul",
                                    content: [
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Водосточные системы"
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Кровля",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Профнастил",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Листовой прокат",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Фасад",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Снегозадержатели",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Рулонная сталь",
                                            },
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: "block-item",
                            content: [
                                {
                                    elem: "menu-title",
                                    content: "Услуги"
                                },
                                {
                                    elem: "menu",
                                    tag: "ul",
                                    content: [
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Покраска металла",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Обработка металла",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Калькулятор водосточной системы",
                                            },
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: "block-item",
                            content: [
                                {
                                    elem: "menu-title",
                                    content: "О нас"
                                },
                                {
                                    elem: "menu",
                                    tag: "ul",
                                    content: [
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Как купить",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "О компании",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Отзывы",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Контакты",
                                            },
                                        },
                                        {
                                            elem: "menu-item",
                                            tag: "li",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: {href: "#"},
                                                content: "Оценить сотрудника",
                                            },
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: "block-item",
                            content: [
                                {
                                    elem: "title-pay",
                                    content: "Принимаем к оплате",
                                },
                                {
                                    elem: "img-pay",
                                    tag: "img",
                                    attrs: {src: "../../img/shape_2.svg"}
                                },
                                {
                                    elem: "img-pay",
                                    tag: "img",
                                    attrs: {src: "../../img/group-29.svg"}
                                },
                                {
                                    elem: "img-pay",
                                    tag: "img",
                                    attrs: {src: "../../img/mir.png"}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ]
};